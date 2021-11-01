import { Component, OnInit } from '@angular/core';
import { IStars, StarsImagesFirebaseService } from 'src/app/shared/firebase.service';


interface IData {
  name: string,
  path: string[]

}


@Component({
  selector: 'app-all-woman',
  templateUrl: './all-woman.component.html',
  styleUrls: ['./all-woman.component.css' , '../../../image-styles.css']
})
export class AllWomanComponent implements OnInit  {

  imgGirl = false;
  // data = [
  //   {
  //     name: "",
  //     path: []

  //   }
  // ]
  data: IData[] =[
    {
      name: " ",
      path: [" "]
    }
  ]
  data2: IStars[];
  constructor(private db: StarsImagesFirebaseService) {
    this.getData();
  }

  
  ngOnInit(): void {


  }

  async getData() {

    await this.db.getDataAll('stars').then(x => this.data2 = x)

    

    for (let index = 0; index < this.data2.length; index++) {

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
    console.log( this.data.reverse())
    this.data.splice(this.data.length - 1,1)

  }

  showImgOnGirl(name: string) {
    this.data = this.data.filter(x => x.name === name)
    this.imgGirl = true;
    window.scroll(0,0)
  }

  backHandler(){
    this.getData();
    this.imgGirl =false;
  }

}
