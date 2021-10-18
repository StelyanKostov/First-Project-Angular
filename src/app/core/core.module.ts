import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { WomanModule } from '../woman/woman.module';
import { FormsModule } from '@angular/forms';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports:[
    NavigationComponent
  ]
  
})
export class CoreModule { }
