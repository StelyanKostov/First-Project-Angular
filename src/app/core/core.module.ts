import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { WomanModule } from '../woman/woman.module';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    WomanModule
  ],
  exports:[
    NavigationComponent
  ]
  
})
export class CoreModule { }
