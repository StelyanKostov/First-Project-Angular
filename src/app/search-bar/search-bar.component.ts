import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WomenService } from '../woman/women.service';
import { tap, switchMap, map } from 'rxjs/operators'
import { IStars, StarsImagesFirebaseService } from '../shared/firebase.service';
import { DbService } from '../shared/db.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css', '../../image-styles.css']
})
export class SearchBarComponent implements OnInit {

  value: string = "";
  data: IStars[];
  dataVideos: string[];
  isStartSearch = false;
  parametars: string;
  inputValue;

  showImg: boolean = true;
  showVideos: boolean = true;

  constructor(private womenService: WomenService,
    private route: ActivatedRoute,
    private r: Router,
    private fireBaseService: StarsImagesFirebaseService,
    private db:DbService
  ) {

  }

  async ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.parametars = params['searchString'];
    //   console.log(params['searchString']+ " here")
    // });


    if (!("/search" === this.r.url)) {

      window.scroll(0, 0);
      this.data = null
      const name = this.route.snapshot.params.name;
      this.value = name;
      console.log(name)

      // this.data =  this.womenService.getAllImgWithString(name);
      // await this.fireBaseService.getStarsName(name , "stars").then(x => this.data = x);

      this.db.getImagesByName(name).pipe(tap(data=> this.data = data as IStars[])).subscribe()

      console.log(this.data)
      // window.scroll(0,0);
      // this.route.params.pipe(
      //   tap(()=>this.data = null),
      //   map(({name})=> this.womenService.getAllImgWithString(name))
      // ).subscribe(data =>{
      //   console.log(data)
      //   this.data = data;
      //   // this.isStartSearch = !this.isStartSearch;
      // })
    }


  }

  async startSearch(value: string) {

    this.data = [];
    // await this.fireBaseService.getStarsForSearch(value, "stars").then(x => this.data = x)

    await this.fireBaseService.getStarsForSearch(value, "videos").then(x => this.dataVideos = x)
    this.isStartSearch = !this.isStartSearch;
  }

  inputKeyup(event: KeyboardEvent): void {
    this.inputValue = (event.target as HTMLInputElement).value;

    if (this.inputValue === "") {
      this.data = null;
      return

    }
    this.startSearch(this.inputValue)

  }
  showOnlyImages(value) {

    this.showImg = !this.showImg;
  
  }

  showChecked(elementImg , elementVideos){

    this.showImg = elementImg.checked ? true: false;
    this.showVideos = elementVideos.checked ? true: false;

  }
  showOnlyVideos() {

    this.showVideos = !this.showVideos;
  }
}
