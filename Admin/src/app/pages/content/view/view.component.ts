import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AppService} from '@services/app.service';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    userId: any;
    name: any;
    content: any;

    constructor(
        private toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private appService: AppService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params) => {
            this.userId = params['userid'];
        });
        this.getContentById(this.userId);
    }

    getContentById(userid: any) {
        this.spinner.show();
        this.appService.getContentById(userid).then((res) => {
            this.spinner.hide();
            if (res.data[0]) {
                let data = res.data[0];

                this.name = data.name;
                this.content = data.content;
            }
        });
    }

    back() {
        this.router.navigate(['content']);
    }
}
