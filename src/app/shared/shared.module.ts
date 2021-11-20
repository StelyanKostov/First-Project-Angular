import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnlargeImgDirective } from './enlarge-img.directive';
import { StarsImagesFirebaseService } from './firebase.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    EnlargeImgDirective,
    
  ],
  providers:[
    StarsImagesFirebaseService
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports:[
    EnlargeImgDirective,
  ]
})
export class SharedModule { }
