import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DataTransferService {
    filterprofileData = new Subject<any>();
    filterprofileData$ = this.filterprofileData.asObservable();

    updateProfileData(data) {
        this.filterprofileData.next(data);
    }
}
