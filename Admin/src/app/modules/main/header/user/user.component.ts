import {Component, OnInit} from '@angular/core';
import {AppService} from '@services/app.service';
import {DataTransferService} from '@services/datatransfer.service';
import {DateTime} from 'luxon';
import {NgxSpinnerService} from 'ngx-spinner';
import {Subscription} from 'rxjs';
import {ConfirmationService} from 'primeng/api';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    providers: [ConfirmationService]
})
export class UserComponent implements OnInit {
    user: any;
    email: any;
    first_name: any;
    last_name: any;
    dob: any;
    filterSubscription: Subscription;

    constructor(
        private appService: AppService,
        private dataTranferService: DataTransferService,
        private spinner: NgxSpinnerService,
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.getProfileData();
        this.filterSubscription =
            this.dataTranferService.filterprofileData$.subscribe(
                (filterdata) => {
                    this.getProfileData();
                }
            );
    }

    getProfileData() {
        this.spinner.show();
        this.appService.getLoggedInProfileData().then((res) => {
            this.spinner.hide();
            if (res.data) {
                let data = res.data;
                (this.email = data.email),
                    (this.first_name = data.first_name),
                    (this.last_name = data.last_name),
                    (this.dob = new Date(data.dob));
            }
        });
    }

    logout() {
        this.confirmationService.confirm({
            message:
                'Are you sure want to logout ?',
            header: ' Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.appService.logout();
            },
            reject: () => {},
            key: 'positionDialog'
        });
    }

    formatDate(date) {
        return DateTime.fromISO(date).toFormat('dd LLL yyyy');
    }

    ngDestory() {
        if (this.filterSubscription) {
            this.filterSubscription.unsubscribe();
        }
    }
}
