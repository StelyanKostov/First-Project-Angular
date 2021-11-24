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

  selectedFile: ImageSnippet;
  img: string;
  constructor(
    private fireBaseService: StarsImagesFirebaseService,
    private router: Router,
    private imageService: ImageService,
    private dbService: DbService,
    private dbvideosService: DbVideosService
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
      this.dbvideosService.addVideo(imgName, imgLink)
      
    } else if (table === "stars") {

      this.dbService.addImages(imgName, imgLink)
    }


    // this.router.navigate(['woman'])
  }
  shoImg(event: KeyboardEvent) {

    this.img = (event.target as HTMLInputElement).value;
  }

  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   // reader.addEventListener('load', (event: any) => {

  //   //   this.selectedFile = new ImageSnippet(event.target.result, file);

  //   //   this.imageService.uploadImage(this.selectedFile.file)
  //   // });

  //   // reader.readAsDataURL(file);

  //   this.imageService.uploadImage(file)
  // }
}
