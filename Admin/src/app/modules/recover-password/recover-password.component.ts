import {
    Component,
    HostBinding,
    OnDestroy,
    OnInit,
    Renderer2
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AppService} from '@services/app.service';
import {Constant} from '@/shared/constant';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-recover-password',
    templateUrl: './recover-password.component.html',
    styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit, OnDestroy {
    @HostBinding('class') class = 'login-box';

    public resetPasswordForm: FormGroup;
    public isAuthLoading = false;
    token: any;

    constructor(
        readonly fb: FormBuilder,
        private renderer: Renderer2,
        private toastr: ToastrService,
        private appService: AppService,
        private spinner: NgxSpinnerService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.renderer.addClass(
            document.querySelector('app-root'),
            'login-page'
        );
        this.resetPasswordForm = this.fb.group(
            {
                password: ['', [Validators.required]],
                confirm_password: ['', [Validators.required]]
            },
            {
                validators: this.MustMatch('password', 'confirm_password')
            }
        );

        this.route.params.subscribe((params) => (this.token = params['token']));
    }

    MustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (
                matchingControl.errors &&
                !matchingControl.errors['MustMatch']
            ) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({MustMatch: true});
            } else {
                matchingControl.setErrors(null);
            }
        };
    }

    resetPassword() {
        if (this.resetPasswordForm.invalid) {
            Constant.validateAllFields(this.resetPasswordForm);
            return;
        }
        this.spinner.show();
        this.appService
            .resetPassword(this.token, this.resetPasswordForm.value)
            .then((res: any) => {
                if (res.status === 200) {
                    this.toastr.success('Password changed successfully ');
                    this.resetPasswordForm.reset();
                    setTimeout(() => {
                        this.spinner.hide();
                        this.router.navigate(['/login']);
                    }, 1000);
                }
            });
    }

    ngOnDestroy(): void {
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'login-page'
        );
    }
}
