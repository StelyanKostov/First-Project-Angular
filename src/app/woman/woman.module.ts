import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomenComponent } from './women/women.component';
import { TopWomanComponent } from './top-woman/top-woman.component';
import { WomanRoutingModule } from './woman-routing.module';
import { WomenService } from './women.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { VideosWomanComponent } from './videos-woman/videos-woman.component';
import { AllWomanComponent } from './all-woman/all-woman.component';



@NgModule({
  declarations: [
    WomenComponent,
    TopWomanComponent,
    VideosWomanComponent,
    AllWomanComponent
  ],
  imports: [
    CommonModule,
    WomanRoutingModule,
    HttpClientModule,
    SharedModule

  ],
  providers:[
    WomenService,
    
  ]
})
export class WomanModule { }
