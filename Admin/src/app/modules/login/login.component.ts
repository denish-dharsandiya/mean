import {
    Component,
    OnInit,
    OnDestroy,
    Renderer2,
    HostBinding
} from '@angular/core';
import {UntypedFormGroup, UntypedFormControl, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AppService} from '@services/app.service';
import {Router} from '@angular/router';
import {Constant} from '../../shared/constant';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    @HostBinding('class') class = 'login-box';
    public loginForm: UntypedFormGroup;
    public isAuthLoading = false;
    public isGoogleLoading = false;
    public isFacebookLoading = false;

    cities;

    selectedCity;

    selectedValues: string[] = ['val1', 'val2'];

    constructor(
        private renderer: Renderer2,
        private toastr: ToastrService,
        private appService: AppService,
        private router: Router,
        private spinner: NgxSpinnerService
    ) {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

    ngOnInit() {
        this.renderer.addClass(
            document.querySelector('app-root'),
            'login-page'
        );
        this.loginForm = new UntypedFormGroup({
            email: new UntypedFormControl(null, Validators.required),
            password: new UntypedFormControl(null, Validators.required)
        });
    }

    login() {
        if (this.loginForm.invalid) {
            Constant.validateAllFields(this.loginForm);
            return;
        }
        this.spinner.show();
        this.appService.proceedLogin(this.loginForm.value).then((res: any) => {
            if (res.status === 200) {
                localStorage.removeItem('token');
                this.appService.setToken(res.data.token);

                this.toastr.success('Login Successfully');
                this.loginForm.reset();
                setTimeout(() => {
                    this.spinner.hide();
                    this.router.navigate(['dashboard']);
                }, 1000);
            }
        });
    }

    ngOnDestroy() {
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'login-page'
        );
    }
}
