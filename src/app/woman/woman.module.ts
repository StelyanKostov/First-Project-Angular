import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomenComponent } from './women/women.component';
import { TopWomanComponent } from './top-woman/top-woman.component';
import { WomanRoutingModule } from './woman-routing.module';
import { WomenService } from './women.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    WomenComponent,
    TopWomanComponent
  ],
  imports: [
    CommonModule,
    WomanRoutingModule,
    HttpClientModule,

  ],
  providers:[
    WomenService,
    TopWomanComponent
  ]
})
export class WomanModule { }
