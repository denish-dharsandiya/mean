import {
    Component,
    HostBinding,
    OnDestroy,
    OnInit,
    Renderer2
} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AppService} from '@services/app.service';
import {Constant} from '@/shared/constant';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
    @HostBinding('class') class = 'login-box';
    public forgotPasswordForm: UntypedFormGroup;
    public isAuthLoading = false;

    constructor(
        private renderer: Renderer2,
        private toastr: ToastrService,
        private appService: AppService,
        private spinner: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.renderer.addClass(
            document.querySelector('app-root'),
            'login-page'
        );
        this.forgotPasswordForm = new UntypedFormGroup({
            email: new UntypedFormControl(null, [
                Validators.required,
                Validators.pattern(
                    '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
                )
            ])
        });
    }

    forgotPassword() {
        if (this.forgotPasswordForm.invalid) {
            Constant.validateAllFields(this.forgotPasswordForm);
            return;
        }
        this.spinner.show();
        this.appService
            .forgotPassword(this.forgotPasswordForm.value)
            .then((res: any) => {
                if (res.status === 200) {
                    this.toastr.success('Link sent on email successfully');
                    this.forgotPasswordForm.reset();
                    setTimeout(() => {
                        this.spinner.hide();
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
