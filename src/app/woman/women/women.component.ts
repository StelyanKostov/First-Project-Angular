import { Component, OnInit } from '@angular/core';
import { WomenService } from '../women.service';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FirebaseService, IStars } from '../../shared/firebase.service'

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  data: any[] = [];
  isVictoriaJ = false;
  isKendallJ = false;
  isNinaDobrev = false;
  constructor(
    public womenService: WomenService,
    public titleService: Title,
    private db: FirebaseService
  ) {
    titleService.setTitle("Women")
  }


  ngOnInit(): void {
  }

  showImgVictoriaJ() {

    this.data = this.db.getStarsName('Victoria Justice');

  }
  showImgNinaDobrev() {

    this.data = this.db.getStarsName('Nina Dobrev')

  }
  showImgKendallJ() {
  
    this.data = this.db.getStarsName('Kendall Jenner')
  }
  showLeidyAImg() {

    this.data = this.db.getStarsName('Leidy Amelia')
  }
  showImgEmily() {

    this.data = this.db.getStarsName('Emily Ratajkowski')

  }
  showAllImg() {

    // this.db.getStarsAll().then(x=> x.forEach(x=> this.data.push(x.path)))

    this.data = null;
    this.data = this.womenService.getAllImg()
  }


}
