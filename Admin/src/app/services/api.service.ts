import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../environments/environment';
import {NgxSpinnerService} from 'ngx-spinner';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    apiRoot: string;

    constructor(
        private _ToastrService: ToastrService,
        private _HttpClient: HttpClient,
        private router: Router,
        private spinner: NgxSpinnerService
    ) {
        this.apiRoot = environment.apiRoot;
    }

    postRequest<T>(url: string, body: any, headers?: HttpHeaders): Promise<T> {
        let request;
        if (headers) {
            request = this._HttpClient.post(`${this.apiRoot}${url}`, body, {
                headers
            });
        } else {
            request = this._HttpClient.post(`${this.apiRoot}${url}`, body);
        }
        return request
            .toPromise()
            .then((res) => {
                this.handleResponseException(res);
                return res as T;
            })
            .catch((err) => {
                this.handleError(err);
                return {} as T;
            });
    }
    getRequest<T>(url: string, headers?: HttpHeaders): Promise<T> {
        let request;
        if (headers) {
            request = this._HttpClient.get(`${this.apiRoot}${url}`, {headers});
        } else {
            request = this._HttpClient.get(`${this.apiRoot}${url}`);
        }
        return request
            .toPromise()
            .then((res) => {
                return res as T;
            })
            .catch((err) => {
                this.handleError(err);
                return {} as T;
            });
    }
    putRequest<T>(url: string, body: any, headers?: HttpHeaders): Promise<T> {
        let request;
        if (headers) {
            request = this._HttpClient.put(`${this.apiRoot}${url}`, body, {
                headers
            });
        } else {
            request = this._HttpClient.put(`${this.apiRoot}${url}`, body);
        }
        return request
            .toPromise()
            .then((res) => {
                return res as T;
            })
            .catch((err) => {
                this.handleError(err);
                return {} as T;
            });
    }
    deleteRequest<T>(url: string, headers?: HttpHeaders): Promise<T> {
        let request;
        if (headers) {
            request = this._HttpClient.delete(`${this.apiRoot}${url}`, {
                headers
            });
        } else {
            request = this._HttpClient.delete(`${this.apiRoot}${url}`);
        }
        return request
            .toPromise()
            .then((res) => {
                return res as T;
            })
            .catch((err) => {
                this.handleError(err);
                return {} as T;
            });
    }
    handleError(err: HttpErrorResponse | any): void {
        console.log(err);
        if (err.status === 500) {
            this.spinner.hide();
            this._ToastrService.error('Server not available');
        } else if (err.status === 404) {
            this.spinner.hide();
            this._ToastrService.error('Method/API not available');
        } else if (err.status === 400) {
            this.spinner.hide();
            this._ToastrService.error('Bad Request');
            if (err.error.errors) {
                err.error.errors.forEach((value) => {
                    this._ToastrService.error(
                        `${value.fieldName} ${value.fieldError}`
                    );
                });
            } else {
                this._ToastrService.error(err.error.message);
                err.error.debugMessage
                    ? this._ToastrService.error(err.error.debugMessage)
                    : '';
            }
        } else if (err.status === 401) {
            this.spinner.hide();
            this._ToastrService.error('Unauthorized');
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
        } else if (err.status === 422) {
            this.spinner.hide();
            this._ToastrService.error(err.error.message);
        } else if (err.status === 0) {
            this.spinner.hide();
            this._ToastrService.error(err.message);
        } else {
            this.spinner.hide();
            this._ToastrService.error(err.error.message);
        }
    }

    handleResponseException(err: any): void {
        if (err.status === 200) {
            err.data.responseMessage
                ? this._ToastrService.error(err.data.responseMessage)
                : '';
        }
    }
}
