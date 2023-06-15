import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Content, ContentDocument } from './schema/content.schema';
import { extname } from 'path';
import { AuthService } from 'src/auth/auth.service';
import { UserDocument, User } from './schema/user.schema';
import { Pages, PagesDocument } from './schema/pages.schema';
import { Service, ServiceDocument } from './schema/service.schema';
const fs = require('fs');
const ObjectId = require('mongoose').Types.ObjectId;

@Injectable()
export class CommonService {
  constructor(
    @InjectModel(Content.name) private contentModel: Model<ContentDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Pages.name) private pagesModel: Model<PagesDocument>,
    private readonly authService: AuthService,
    @InjectModel(Service.name) private serviceModel: Model<ServiceDocument>,
  ) { }

  async getContent(body): Promise<Content[]> {
    if (body.title) {
      return await this.contentModel.find({ title: body.title });
    } else {
      return await this.contentModel.find({});
    }
  }

  async saveFiles(fileInfo, path) {
    try {
      let response = [];
      for (let data of fileInfo) {
        let outputBuffer = data.buffer;
        const file_name = Math.random() + '_' + new Date().getTime();
        let extenstion = extname(data.originalname);
        const file_path: string = `public/${path}/${file_name}${extenstion}`;
        await fs.writeFile(file_path, outputBuffer, function (err) {
          if (err) throw err;
        });
        let fileType = null;

        if (data.mimetype.includes('image')) {
          fileType = 'image';
        }
        if (data.mimetype.includes('video')) {
          fileType = 'video';
        }
        let fileObj = {
          filePath: file_path,
          fileType: fileType,
          fieldName: data.fieldname,
        };

        response.push(fileObj);
      }
      return response;
    } catch (err) {
      throw err;
    }
  }

  async changePassword(payload: any, userInfo: any) {
    try {
      if (payload.newPassword != payload.conformPassword)
        throw new Error(
          'Conform password is not matching as your new password!! ',
        );
      const getUser = await this.userModel.findOne({ _id: userInfo._id });
      if (!getUser) throw new Error('User not found!!');

      let comparePassword = await this.authService.doesPasswordMatch(
        payload.oldPassword,
        getUser.password,
      );

      if (!comparePassword) {
        throw new Error(
          'Sorry old password is not matching as your current password',
        );
      }
      let newPassword = await this.authService.hashingPassword(
        payload.newPassword,
      );
      await this.userModel
        .updateOne({ password: newPassword })
        .where({ _id: getUser._id });

      return await this.userModel.findOne({ _id: userInfo._id });
    } catch (err) {
      throw err;
    }
  }


  async addUpdateContent(payload) {
    try {
      let pageInfo = new Pages();
      pageInfo.name = payload.name;
      pageInfo.content = payload.content;

      if (payload?.content_id) {
        if (!ObjectId.isValid(payload.content_id))
          throw new Error('content Id is not valid');
        let contentExist = await this.pagesModel.findOne({
          _id: payload.content_id,
        });
        if (!contentExist) {
          throw new Error('content record not found.');
        }

        await this.pagesModel.update(
          { _id: payload.content_id },
          { $set: pageInfo },
        );
        return await this.pagesModel.findOne({ _id: payload.content_id });
      } else {
        return await new this.pagesModel(pageInfo).save();
      }
    } catch (err) {
      throw err;
    }
  }

  async deleteContent(content_id) {
    try {
      if (!ObjectId.isValid(content_id))
        throw new Error('content_id is not valid');

      const getContent = await this.pagesModel.findOne({ _id: content_id });
      if (!getContent) throw new Error('Can not find content');

      await this.pagesModel.deleteOne({ _id: content_id });
      return 'Content Deleted Successfully';
    } catch (err) {
      throw err;
    }
  }

  async getContents(query) {
    try {
      let queryData = [];
      queryData.push({
        $sort: {
          created_at: 1,
        },
      });

      if (query.slug) {
        queryData.unshift({
          $match: {
            slug: { $regex: query.slug },
          },
        });
      }
      if (query.content_id) {
        if (!ObjectId.isValid(query.content_id))
          throw new Error('content_id is not valid');

        queryData.push({
          $match: {
            _id: ObjectId(query.content_id),
          },
        });
      }
      const getContent = await this.pagesModel.aggregate(queryData);

      if (getContent.length >= 1) return getContent;

      return [];
    } catch (err) {
      throw err;
    }
  }

  async updateProfile(userInfo, id) {
    try {
      let user = await this.userModel
        .find({ _id: id, user_type: 'user' })
        .exec();
      if (user) {
        let query = {};
        if (userInfo.first_name) query['first_name'] = userInfo.first_name;
        if (userInfo.last_name) query['last_name'] = userInfo.last_name;
        if (userInfo.email) {
          let duplicateUser = await this.userModel.find({
            email: userInfo.email,
          });
          if (duplicateUser && duplicateUser.length > 1) {
            throw new Error('Email is already in use for other user.');
          }
          query['email'] = userInfo.email;
        }
        if (userInfo.dob) query['dob'] = new Date(userInfo.dob);
        if (userInfo.gender) query['gender'] = userInfo.gender;
        if (userInfo.address) query['location'] = userInfo.address;
        if (userInfo.phone) query['phone'] = userInfo.phone;
        if (userInfo.profile) query['profile_pic'] = userInfo.profile;
        await this.userModel.findOneAndUpdate({ _id: id }, query);
        return await this.userModel.find({ _id: id }).exec();
      } else {
        throw new Error('Patient not found');
      }
    } catch (err) {
      throw err;
    }
  }
}