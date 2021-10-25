import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormsRoutingModule } from './forms-routing.module';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { SharedModule } from '../shared/shared.module';
import { FormBuilder, FormsModule as form, ReactiveFormsModule } from '@angular/forms';
import { DeleteFormComponent } from './delete-form/delete-form.component';



@NgModule({
  declarations: [
    EditFormComponent,
    SuggestionsComponent,
    DeleteFormComponent
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
