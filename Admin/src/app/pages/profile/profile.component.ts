import {Component} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AppService} from '@services/app.service';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {Constant} from '@/shared/constant';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {Subscription} from 'rxjs';
import {DataTransferService} from '@services/datatransfer.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    editForm: FormGroup;
    user: any;
    phone: any;
    first_name: any;
    last_name: any;
    email: any;
    dob: any;
    gender: any;
    location: any;
    created_at: any;
    address: any;
    city: any;
    state: any;
    zip_code: any;
    filterSubscription: Subscription;

    constructor(
        readonly fb: FormBuilder,
        private toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private appService: AppService,
        private router: Router,
        public datepipe: DatePipe,
        public dataTranferService: DataTransferService
    ) {}

    ngOnInit(): void {
        this.spinner.show();
        this.getProfileData();
        this.editForm = this.fb.group({
            email: ['', Validators.required],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            phone: ['', Validators.required],
            dob: ['', Validators.required],
            gender: ['', Validators.required]
        });
    }

    getProfileData() {
        this.spinner.show();
        this.appService.getLoggedInProfileData().then((res) => {
            this.spinner.hide();
            if (res.data) {
                let data = res.data;
                (this.email = data.email),
                    (this.phone = data.phone),
                    (this.first_name = data.first_name),
                    (this.last_name = data.last_name),
                    (this.dob = new Date(data.dob)),
                    (this.gender = data.gender);
                this.created_at = data.created_at;
                let location = data.location;
                this.address = location.address;
                this.state = location.state;
                this.city = location.city;
                this.zip_code = location['zip-code'];

                this.editForm.patchValue({
                    email: data.email,
                    phone: data.phone,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    dob: new Date(data.dob),
                    gender: data.gender
                });
            }
        });
    }

    updateProfile() {
        if (this.editForm.invalid) {
            Constant.validateAllFields(this.editForm);
            return;
        }
        this.spinner.show();
        this.editForm.value.dob = this.datepipe.transform(
            new Date(this.editForm.value.dob),
            'MM-dd-yyyy'
        );
        this.appService.editProfile(this.editForm.value).then((res: any) => {
            if (res.status === 200) {
                this.toastr.success('Updated Successfully');
                this.getProfileData();
                this.dataTranferService.updateProfileData('');
                this.router.navigate(['dashboard']);
                this.spinner.hide();
            }
        });
    }

    back() {
        this.router.navigate(['dashboard']);
    }

    ngDestory() {
        if (this.filterSubscription) {
            this.filterSubscription.unsubscribe();
        }
    }
}
