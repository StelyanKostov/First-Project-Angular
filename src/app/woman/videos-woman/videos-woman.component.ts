import { Component, OnInit } from '@angular/core';
import { StarsImagesFirebaseService } from 'src/app/shared/firebase.service';

@Component({
  selector: 'app-videos-woman',
  templateUrl: './videos-woman.component.html',
  styleUrls: ['./videos-woman.component.css']
})
export class VideosWomanComponent implements OnInit {

  data = [];
  constructor(private db: StarsImagesFirebaseService) { }

  async ngOnInit() {

    await this.db.getDataStarsFromDbAll("videos").then(x => x.map(x => this.data.push(x)));
  }

}
