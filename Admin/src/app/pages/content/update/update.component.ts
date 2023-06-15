import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from '@services/app.service';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {Constant} from '@/shared/constant';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
    editForm: FormGroup;
    userId: any;
    textData: any;

    constructor(
        readonly fb: FormBuilder,
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
        this.editForm = this.fb.group({
            name: ['', Validators.required],
            content: ['', Validators.required]
        });
    }

    getContentById(userid: any) {
        this.spinner.show();
        this.appService.getContentById(userid).then((res) => {
            this.spinner.hide();
            if (res.data[0]) {
                let data = res.data[0];
                this.textData = data.content;
                this.editForm.patchValue({
                    name: data.name,
                    content: data.content
                });
            }
        });
    }

    updateContent() {
        if (this.editForm.invalid) {
            Constant.validateAllFields(this.editForm);
            return;
        }
        this.spinner.show();
        let data = {
            name: this.editForm.value.name,
            content: this.editForm.value.content,
            content_id: this.userId
        };
        this.appService.editContent(data).then((res: any) => {
            if (res.status === 200) {
                this.toastr.success('Content updated successfully');
                this.getContentById(this.userId);
                this.router.navigate(['content']);  
                this.spinner.hide();
            }
        });
    }

    back() {
        this.router.navigate(['content']);
    }
}
