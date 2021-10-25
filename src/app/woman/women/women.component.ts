import { Component, OnInit } from '@angular/core';
import { WomenService } from '../women.service';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FirebaseService, IStars } from '../../shared/firebase.service'

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css' ,'../../../image-styles.css']
})
export class WomenComponent implements OnInit {
  data: string[] = [];
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

  async showImgVictoriaJ() {

    await this.db.getStarsName('Victoria Justice').then(x => this.data = x);

  }
  async showImgNinaDobrev() {
    await this.db.getStarsName('Nina Dobrev').then(x => this.data = x);

  }
  async showImgKendallJ() {
    await this.db.getStarsName('Kendall Jenner').then(x => this.data = x);

  }
  async showLeidyAImg() {
    await this.db.getStarsName('Leidy Amelia').then(x => this.data = x);

  }
  async showImgEmily() {
    await this.db.getStarsName('Emily Ratajkowski').then(x => this.data = x);


  }
  showAllImg() {

    // this.db.getStarsAll().then(x=> x.forEach(x=> this.data.push(x.path)))

    this.data = null;
    this.data = this.womenService.getAllImg()
  }


}
