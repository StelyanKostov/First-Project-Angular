import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnlargeImgDirective } from './enlarge-img.directive';
import { FirebaseService } from './firebase.service';



@NgModule({
  declarations: [
    EnlargeImgDirective,
    
  ],
  providers:[
    FirebaseService
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EnlargeImgDirective,
  ]
})
export class SharedModule { }
