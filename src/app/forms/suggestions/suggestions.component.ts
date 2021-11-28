import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DbVideosService } from 'src/app/shared/db-videos.service';
import { DbService } from 'src/app/shared/db.service';
import { StarsImagesFirebaseService } from '../../shared/firebase.service';
import { ImageService } from '../image.service';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  image;
  selectedFile: ImageSnippet;
  img: string;
  constructor(
    private fireBaseService: StarsImagesFirebaseService,
    private router: Router,
    private imageService: ImageService,
    private dbService: DbService,
    private dbvideosService: DbVideosService,
    private htttp: HttpClient
  ) { }

  ngOnInit(): void {
  }

  suggestionHandler(form: NgForm) {

    let imgName = form.value.name;
    let imgLink = form.value.link;
    let table = form.value.table;

    console.log(imgName + imgLink + table)

    if (table === "videos") {

      imgLink = `assets/videos/${imgLink}.mp4`
      this.dbvideosService.addVideo(imgName, this.image)

    } else if (table === "stars") {

      this.dbService.addImages(imgName, this.image)
      console.log(this.image)
    }


    // this.router.navigate(['woman'])
  }
  shoImg(event: KeyboardEvent) {

    this.img = (event.target as HTMLInputElement).value;
  }

  saveImage(files: FileList) {

    var file: File = files.item(0);

    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {

      this.image = myReader.result;

      // this.htttp.post(`http://localhost:1000/api/images/upload`, {file:this.image,  name:form.value.name}, { withCredentials: true }).subscribe();
      // console.log(this.image)
    }
    myReader.readAsDataURL(file);

  }

}


