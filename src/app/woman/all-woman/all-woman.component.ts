import { Component, OnInit } from '@angular/core';
import { IStars, StarsImagesFirebaseService } from 'src/app/shared/firebase.service';


interface IData {
  name: string,
  path: string[]

}

@Component({
  selector: 'app-all-woman',
  templateUrl: './all-woman.component.html',
  styleUrls: ['./all-woman.component.css', '../../../image-styles.css']
})
export class AllWomanComponent implements OnInit {

  imgGirl = false;
  // data = [
  //   {
  //     name: "",
  //     path: []

  //   }
  // ]
  data: IData[] = [];

  data2: IStars[];
  constructor(private db: StarsImagesFirebaseService) {
    this.getData();
  }


  ngOnInit(): void {

    console.log(this.data.length === 0)
  }

  async getData() {

    await this.db.getDataAll('stars').then(x => this.data2 = x)

    this.data.push({ name: this.data2[0].name, path: [this.data2[0].path] })


    for (let index = 1; index < this.data2.length; index++) {

      for (let index2 = 0; index2 < this.data.length; index2++) {

        if (this.data[index2].name === this.data2[index].name) {
          this.data[index2].path.push(this.data2[index].path)
          break;
        }
        if (index2 === this.data.length - 1) {
          this.data.push({ name: this.data2[index].name, path: [this.data2[index].path] })
          break;
        }
      }
    }

  }

  showImgOnGirl(name: string) {
    this.data = this.data.filter(x => x.name === name)
    this.imgGirl = true;
    window.scroll(0, 0)
  }

  backHandler() {
    this.getData();
    this.imgGirl = false;
  }

}
