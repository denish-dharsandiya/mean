import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    apiRoot = environment.apiRoot;
    head_obj: HttpHeaders = new HttpHeaders().set(
        'Authorization',
        ' bearer ' + localStorage.getItem('token')
    );

    constructor(
        private router: Router,
        private toastr: ToastrService,
        private http: HttpClient,
        private _ApiService: ApiService
    ) { }

    setToken(token: any) {
        localStorage.setItem('token', token);
        this.head_obj = new HttpHeaders().set(
            'Authorization',
            ' bearer ' + localStorage.getItem('token')
        );
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user_data');
        this.router.navigate(['/login']);
    }

    proceedLogin(userCred: any): Promise<any> {
        return this._ApiService.postRequest<any>('admin/login', userCred);
    }

    forgotPassword(data: any): Promise<any> {
        return this._ApiService.postRequest<any>('auth/forgot-password', data);
    }

    resetPassword(token: any, data: any): Promise<any> {
        let head_obj = new HttpHeaders().set(
            'Authorization',
            ' bearer ' + token
        );
        return this._ApiService.postRequest<any>(
            'auth/reset-password',
            data,
            head_obj
        );
    }

    getPatientList(): Promise<any> {
        return this._ApiService.getRequest<any>(
            'admin/get-patients',
            this.head_obj
        );
    }

    getDoctorList(): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/doctors',
            this.head_obj
        );
    }

    activeInactive(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'admin/change-status',
            data,
            this.head_obj
        );
    }

    doctorProfileapproveReject(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'admin/doctor-verification',
            data,
            this.head_obj
        );
    }

    getPatientById(id: any): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/patient-details/' + id,
            this.head_obj
        );
    }

    getDoctorById(id: any): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/doctor-details/' + id,
            this.head_obj
        );
    }

    getContent(): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/get-contents',
            this.head_obj
        );
    }

    getContentById(id: any): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/get-contents?content_id=' + id,
            this.head_obj
        );
    }

    editContent(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'common/add-content',
            data,
            this.head_obj
        );
    }

    addContent(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'common/add-content',
            data,
            this.head_obj
        );
    }

    deleteContent(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'common/delete-content',
            data,
            this.head_obj
        );
    }

    getinsurance(): Promise<any> {
        return this._ApiService.getRequest<any>(
            'admin/get-insurance',
            this.head_obj
        );
    }

    getInsuranceById(id: any): Promise<any> {
        return this._ApiService.getRequest<any>(
            'admin/get-insurance?insurance_id=' + id,
            this.head_obj
        );
    }

    addInsurance(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'admin/add-insurance',
            data,
            this.head_obj
        );
    }

    editInsurance(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'admin/update-insurance',
            data,
            this.head_obj
        );
    }

    deleteInsurance(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'admin/delete-insurance',
            data,
            this.head_obj
        );
    }

    getFaqListByPagination(data: any): Promise<any> {
        return this._ApiService.getRequest<any>(`common/faqs?limit=${data.limit}&skip=${data.skip}`, this.head_obj);
    }

    getFaqDataById(id: any): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/faqs?faq_id=' + id,
            this.head_obj
        );
    }

    updateorAddFaq(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'common/add-faq',
            data,
            this.head_obj
        );
    }

    deleteFAQ(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'common/delete-faq',
            data,
            this.head_obj
        );
    }

    getLoggedInProfileData(): Promise<any> {
        return this._ApiService.getRequest<any>('admin/profile', this.head_obj);
    }

    editProfile(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'common/update-profile',
            data,
            this.head_obj
        );
    }

    getDashboardData(): Promise<any> {
        return this._ApiService.getRequest<any>(
            'admin/dashboard',
            this.head_obj
        );
    }

    getspaciality(): Promise<any> {
        return this._ApiService.getRequest<any>(
            'admin/specilities',
            this.head_obj
        );
    }

    getSpecialityById(id: any): Promise<any> {
        return this._ApiService.getRequest<any>(
            'admin/specilities?specility_id=' + id,
            this.head_obj
        );
    }

    editSpeciality(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'admin/update-specialty',
            data,
            this.head_obj
        );
    }

    deleteSpeciality(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'admin/delete-specialty',
            data,
            this.head_obj
        );
    }

    getCountries(): Observable<any> {
        return this.http.get('https://countriesnow.space/api/v0.1/countries/positions');
    }

    getStates(data): Observable<any> {
        console.log('data')
        console.log(data)
        return this.http.post('https://countriesnow.space/api/v0.1/countries/states', data);
    }

    getCountryCode(data): Observable<any> {
        console.log('country code data')
        console.log(data)
        return this.http.post('https://countriesnow.space/api/v0.1/countries/codes', data);
    }

    getLocations(): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/get-countries',
            this.head_obj
        );
    }

    addLocation(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'admin/add-update-countries',
            data,
            this.head_obj
        );
    }

    getLocationById(id: any): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/get-countries?id=' + id,
            this.head_obj
        );
    }

    editLocation(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'admin/add-update-countries',
            data,
            this.head_obj
        );
    }

    deleteLocation(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'admin/delete-country',
            data,
            this.head_obj
        );
    }

    getTestimonials(): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/get-admin-testimonials',
            this.head_obj
        );
    }

    addTestimonial(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'common/add-update-admin-testimonials',
            data,
            this.head_obj
        );
    }

    getTestimonialById(id: any): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/get-admin-testimonials?id=' + id,
            this.head_obj
        );
    }

    editTestimonial(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'common/add-update-admin-testimonials',
            data,
            this.head_obj
        );
    }

    deleteTestimonial(data: any): Promise<any> {
        return this._ApiService.postRequest<any>(
            'common/delete-admin-testimonial',
            data,
            this.head_obj
        );
    }

    getFinancing(): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/get-patient-finances',
            this.head_obj
        );
    }

    getFinancingById(id: any): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/get-patient-finances?id=' + id,
            this.head_obj
        );
    }

    getQueryData(): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/representative-talk',
            this.head_obj
        );
    }

    getAppointmentData(): Promise<any> {
        return this._ApiService.getRequest<any>(
            'admin/get-appointments',
            this.head_obj
        );
    }

    getAppointmentById(id: any): Promise<any> {
        return this._ApiService.getRequest<any>(
            'admin/get-appointments?appointment_id=' + id,
            this.head_obj
        );
    }

    downloadPdf(id: any): Promise<any> {
        return this._ApiService.getRequest<any>(
            'common/generate-pdf/' + id,
            this.head_obj
        );
    }


}
