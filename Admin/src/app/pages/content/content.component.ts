import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {AppService} from '@services/app.service';
import {Constant} from '@/shared/constant';
import {Router} from '@angular/router';
import {ConfirmationService} from 'primeng/api';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    providers: [ConfirmationService]
})
export class ContentManagementComponent {
    pages: any;

    constructor(
        readonly fb: FormBuilder,
        private toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private appService: AppService,
        private router: Router,
        private confirmationService: ConfirmationService
    ) {}
    ngOnInit(): void {
        this.getcontentViewData();
    }

    getcontentViewData() {
        this.spinner.show();
        this.appService.getContent().then(
            (res) => {
                this.spinner.hide();
                if (res.data) {
                    this.pages = res.data;
                }
            },
            (err: any) => {
                if (err.error.status == false) {
                    this.toastr.error(err.error.message);
                }
            }
        );
    }

    viewDetails(id: any) {
        this.router.navigate(['content/content-view'], {
            queryParams: {userid: id}
        });
    }

    editDetails(id: any) {
        this.router.navigate(['content/content-edit'], {
            queryParams: {userid: id}
        });
    }

    addNewContent() {
        this.router.navigate(['content/content-add']);
    }

    deleteContent(id, fullName) {
        this.confirmationService.confirm({
            message:
                'Are you sure want to delete ' +
                fullName.replace(/\b\w/g, (l) => l.toUpperCase()) +
                ' ?',
            header: 'Delete Content',
            icon: 'pi pi-info-circle',
            accept: () => {
                let data = {
                    content_id: id
                };
                this.spinner.show();
                this.appService.deleteContent(data).then((res: any) => {
                    if (res.status === 200) {
                        this.toastr.success('Content deleted successfully');
                        this.getcontentViewData();
                        this.spinner.hide();
                    }
                });
            },
            reject: () => {},
            key: 'positionDialog'
        });
    }
}
