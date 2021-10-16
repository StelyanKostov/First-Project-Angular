import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnlargeImgDirective } from './enlarge-img.directive';



@NgModule({
  declarations: [
    EnlargeImgDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EnlargeImgDirective
  ]
})
export class SharedModule { }
