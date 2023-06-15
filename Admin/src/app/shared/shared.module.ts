import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {RadioButtonModule} from 'primeng/radiobutton';
import {HttpClientModule} from '@angular/common/http';
import {MultiSelectModule} from 'primeng/multiselect';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TooltipModule} from 'primeng/tooltip';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ChipsModule} from 'primeng/chips';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {KeyFilterModule} from 'primeng/keyfilter';
import {PasswordModule} from 'primeng/password';
import {TabViewModule} from 'primeng/tabview';
import {InputMaskModule} from 'primeng/inputmask';
import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/accordion';
import {RatingModule} from 'primeng/rating';
import {EditorModule} from 'primeng/editor';
import {FileUploadModule} from 'primeng/fileupload';
import {PaginatorModule} from 'primeng/paginator';
import {ChartModule} from 'primeng/chart';

// material modules
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
    exports: [
        CardModule,
        DialogModule,
        CalendarModule,
        FormsModule,
        InputTextModule,
        DropdownModule,
        InputSwitchModule,
        RadioButtonModule,
        HttpClientModule,
        MultiSelectModule,
        FormsModule,
        ReactiveFormsModule,
        CheckboxModule,
        TableModule,
        ReactiveFormsModule,
        AutoCompleteModule,
        TooltipModule,
        ConfirmDialogModule,
        ChipsModule,
        CarouselModule,
        ButtonModule,
        ProgressSpinnerModule,
        KeyFilterModule,
        PasswordModule,
        TabViewModule,
        InputMaskModule,
        PanelModule,
        AccordionModule,
        RatingModule,
        EditorModule,
        FileUploadModule,
        PaginatorModule,
        ChartModule,
        
        MatMenuModule,
        MatIconModule,
        CdkAccordionModule
    ],
    declarations: [],
    imports: [CommonModule]
})
export class SharedModule {}
