import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ContentRoutingModule} from './content.routing.module';
import {ContentManagementComponent} from './content.component';
import {AddComponent} from './add/add.component';
import {ViewComponent} from './view/view.component';
import {UpdateComponent} from './update/update.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ContentRoutingModule,
        NgxSpinnerModule.forRoot({type: 'ball-scale-multiple'})
    ],
    declarations: [
        ContentManagementComponent,
        AddComponent,
        ViewComponent,
        UpdateComponent
    ],
    providers: []
})
export class ContentModule {
    constructor() {}
}
