import { Component, OnInit } from '@angular/core';
import { WomenService } from '../women.service';
import { BrowserModule, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  data:string[]
  isVictoriaJ = false;
  isKendallJ =false;
  isNinaDobrev = false;
  constructor(public womenService:WomenService,
    public titleService:Title) { 
      titleService.setTitle("Women")
    }

 
  ngOnInit(): void {
  }

  showImgVictoriaJ(){
    this.data = this.womenService.getImagesViectoriaJ()
    
  }
  showImgNinaDobrev(){
    this.data = this.womenService.getImagesNinaDobrev()

  }
  showImgKendallJ(){
    
    this.data = this.womenService.getImagesKendallJ()
   
    
  }
  showImgEmily(){
    this.data = this.womenService.getImagesEmily();
  }
  showAllImg(){


    this.data = null;
    this.data = this.womenService.getAllImg()
  }
  showLeidyAImg(){

    this.data = this.womenService.getImagesLeidy();
  }
 
}
