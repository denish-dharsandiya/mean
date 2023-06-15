import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {AppService} from '@services/app.service';
import {DatePipe} from '@angular/common';

@Component({
   selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

    completeData: any;

    appointmentsCount:number;
    approvedAppointmentCount:number;
    doctorsCount:number;
    patientsCount:number;
    pendingAppointmentCount:number;
    rejectAppointmentCount:number;

    constructor(
        private toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private appService: AppService,
        public datepipe: DatePipe,
    ) {
    }

    ngOnInit(): void {
        this.getDashboardData();
    }

    getDashboardData() {
        this.spinner.show();
        this.appService.getDashboardData().then(
            (res) => {
                this.spinner.hide();
                if (res.data) {
                    // this.completeData=res.data
                    
                    let data= res.data
                    this.doctorsCount = data.doctorsCount;
                    this.patientsCount = data.patientsCount;
                    this.appointmentsCount = data.appointmentsCount;
                    this.approvedAppointmentCount = data.approvedAppointmentCount;
                    this.pendingAppointmentCount = data.pendingAppointmentCount;
                    this.rejectAppointmentCount= data.rejectAppointmentCount;

                    this.completeData = {
                        labels: ['Doctors', 'Patient', 'Appointment', 'Approved Appointment', 'Pending Appointment', 'Reject Appointment'],
                        datasets: [
                            {
                                label: 'Count',
                                data: [this.doctorsCount, this.patientsCount, this.appointmentsCount, this.approvedAppointmentCount, this.pendingAppointmentCount, this.rejectAppointmentCount]
                            }
                        ]
                    }
                }
            },
            (err: any) => {
                if (err.error.status == false) {
                    this.toastr.error(err.error.message);
                }
            }
        );
    }
}
