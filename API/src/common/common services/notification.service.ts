import { Injectable } from '@nestjs/common';
import { NotificationDocument, Notification } from '../schema/notification.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
var FCM = require('fcm-node');

@Injectable()
export class NotificationService {

    constructor(
        @InjectModel(Notification.name) private notificationModel: Model<NotificationDocument>,
    ){}

    async pushNotification(to_user,from_user) {
        var fcm = new FCM(
            'AAAAoASIEEg:APA91bEllfQDh5gh1DIbykFnrDbayaLK-cJkTLkbTOxPFILTvrpr3snKGFaejuD8oMo5mvO8esXGl627SUlW4Af2FmTGvmBubzKLxkFox1rsiCg46q5wqlEgUUCwlWcUMdT-Sb1AcZzq',
          );

        let message = {
            to: to_user.fca_token,
            notification: {
              title: "Appointment Booking",
              body: from_user.first_name+" "+from_user.last_name+" has booked appointment successfully",
            },
            data: {
              type: 'Success',
            },
          };

          const notificationObj = new Notification()
          notificationObj.to_user = to_user._id;
          notificationObj.from_user = from_user._id;
          notificationObj.type = message.notification.title;
          notificationObj.message = message.notification.body;
          notificationObj.is_for = to_user.user_type;
          await this.notificationModel.create(notificationObj);

          await fcm.send(message, async (err, response) => {
            if (!err) {
                try {
                    return response
                  } catch (error) {
                    return error;
                  }
            }
          })
    }
}