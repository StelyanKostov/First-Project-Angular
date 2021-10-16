import { rendererTypeName } from '@angular/compiler';
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEnlargeImg]'
})
export class EnlargeImgDirective {

  tobig:boolean = false;

@HostBinding('class.toBigImg') get isbigImg(){

  return this.tobig;
}

  @HostListener('click', ['$event']) clickImg(e:Event){

    this.enlargeImg();
  }
  constructor(
    private render:Renderer2,
    private element:ElementRef
    ) { }


  enlargeImg(){

   
    
  
  //  this.render.setStyle(
  //    this.element.nativeElement,
  //   "width",
  //   this.tobig ? '19%':'50%'
  //  );
  //  this.render.setStyle(
  //   this.element.nativeElement,
  //  "height",
  //  this.tobig ? '550px':'50%'
  // );

  this.tobig =!this.tobig;
  }
}
