import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentManagementComponent} from './content.component';
import {UpdateComponent} from './update/update.component';
import {AddComponent} from './add/add.component';
import {ViewComponent} from './view/view.component';

export const routes: Routes = [
    {path: '', component: ContentManagementComponent},
    {path: 'content-add', component: AddComponent},
    {path: 'content-view', component: ViewComponent},
    {path: 'content-edit', component: UpdateComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentRoutingModule {}
