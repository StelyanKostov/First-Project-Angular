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
    // this.isVictoriaJ = !this.isVictoriaJ;
    this.data = this.womenService.getImagesViectoriaJ()
    this.hiddenImg(this.isVictoriaJ);
    // this.isNinaDobrev = false;
    // this.isKendallJ =false;
  }
  showImgNinaDobrev(){
    // this.isNinaDobrev = !this.isNinaDobrev;
    this.data = this.womenService.getImagesNinaDobrev()
    this.hiddenImg(this.isNinaDobrev);
    // this.isVictoriaJ = false;
    // this.isKendallJ =false;
  }
  showImgKendallJ(){
    
    // this.isKendallJ = !this.isKendallJ;
    this.data = this.womenService.getImagesKendallJ()
   
    this.hiddenImg(this.isKendallJ);
    // this.isVictoriaJ = false;
    // this.isNinaDobrev = false;
  }
  showImgEmily(){
    this.data = this.womenService.getImagesEmily();
  }
  showAllImg(){


    this.data = null;
    this.data = this.womenService.getAllImg()
  }
  hiddenImg(value:boolean){

    if (value) {
      this.data = null;
    }
  }
}
