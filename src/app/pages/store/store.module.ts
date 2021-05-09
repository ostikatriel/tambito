import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TambitoComponent } from './tambito/tambito.component';


import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {RatingModule} from 'primeng/rating';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TambitoComponent],
  imports: [
    CommonModule,

    DataViewModule,
    ButtonModule,
    DropdownModule,
    RatingModule,
    InputTextModule,
    
    HttpClientModule,
    FormsModule,
  ]
})
export class StoreModule { }
