import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnlargeImgDirective } from './enlarge-img.directive';
import { StarsImagesFirebaseService } from './firebase.service';



@NgModule({
  declarations: [
    EnlargeImgDirective,
    
  ],
  providers:[
    StarsImagesFirebaseService
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EnlargeImgDirective,
  ]
})
export class SharedModule { }
