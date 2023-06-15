import {Component} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AppService} from '@services/app.service';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {Constant} from '@/shared/constant';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent {
    addForm: FormGroup;
    userId: any;
    textData: any;

    constructor(
        readonly fb: FormBuilder,
        private toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private appService: AppService,
        private router: Router
    ) {}
    ngOnInit(): void {
        this.addForm = this.fb.group({
            name: ['', Validators.required],
            content: ['', Validators.required]
        });
    }

    addContent() {
        if (this.addForm.invalid) {
            Constant.validateAllFields(this.addForm);
            return;
        }
        this.spinner.show();
        let data = {
            name: this.addForm.value.name,
            content: this.addForm.value.content
        };
        this.appService.addContent(data).then((res: any) => {
            if (res.status === 200) {
                this.addForm.reset();
                this.toastr.success('Content added successfully');
                this.spinner.hide();
                this.router.navigate(['content']);  
            }
        });
    }

    back() {
        this.router.navigate(['content']);
    }
}
