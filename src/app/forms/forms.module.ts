import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormsRoutingModule } from './forms-routing.module';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { SharedModule } from '../shared/shared.module';
import { FormBuilder, FormsModule as form, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditFormComponent,
    SuggestionsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule,
    form,
    ReactiveFormsModule,
    
  ],
  exports:[
    EditFormComponent,
    SuggestionsComponent
  ]
})
export class FormsModule { }
