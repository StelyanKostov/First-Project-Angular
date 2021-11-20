import { Component, OnInit } from '@angular/core';
import { WomenService } from '../women.service';
import { BrowserModule, Title } from '@angular/platform-browser';
import { StarsImagesFirebaseService, IStars } from '../../shared/firebase.service'
import { DbService } from 'src/app/shared/db.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css', '../../../image-styles.css']
})
export class WomenComponent implements OnInit {


  data = {
    pathImgs: [],
    pathVideos: []
  };
  isVictoriaJ = false;
  isKendallJ = false;
  isNinaDobrev = false;
  showImg: boolean = true
  showVideos: boolean = true;
  constructor(
    public womenService: WomenService,
    public titleService: Title,
    private db: StarsImagesFirebaseService,
    private dbService: DbService
  ) {
    titleService.setTitle("Women")

  }

  ngOnInit(): void {
  }

  async showImgAnyaSugar() {

    this.showImgOn('Anya Sugar');
  }

  async showImgErzabel() {

    this.showImgOn('Erzabel');
  }
  async showImgVictoriaJ() {

    this.showImgOn('Victoria Justice');

  }
  async showImgNinaDobrev() {

    this.showImgOn('Nina Dobrev');

  }
  async showImgKendallJ() {

    this.showImgOn('Kendall Jenner');

  }
  async showLeidyAImg() {
    this.showImgOn('Leidy Amelia');

  }
  async showImgEmily() {
    this.showImgOn('Emily Ratajkowski');


  }
  showAllImg() {

    // this.db.getStarsAll().then(x=> x.forEach(x=> this.data.push(x.path)))
    this.data.pathImgs = this.womenService.getAllImg()
  }

  showImgOn(name: string) {

    this.data.pathImgs =[];
    // this.dbService.getImagesByName(name).subscribe(data => this.data.pathImgs = data as []);

    this.dbService.getImagesByName(name).pipe( tap((data) =>this.data.pathImgs = data as [] )).subscribe()


    // await this.db.getStarsName(name, 'videos').then(x => this.data.pathVideos = x);
    // await this.db.getStarsName(name, 'stars').then(x => this.data.pathImgs = x);
  }

  showChecked(elementImg, elementVideos) {

    this.showImg = elementImg.checked ? true : false;
    this.showVideos = elementVideos.checked ? true : false;

  }
}
