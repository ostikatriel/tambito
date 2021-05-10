import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RatingModule} from 'primeng/rating'
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ConfirmationService, MessageService } from 'primeng/api';

import { FormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule,
    
    TableModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    InputTextareaModule,
    RatingModule,
    InputNumberModule,
    ButtonModule,

    DialogModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    
    
  ],
  providers: [
    MessageService,
    ConfirmationService,
],
})
export class AdminModule { }
