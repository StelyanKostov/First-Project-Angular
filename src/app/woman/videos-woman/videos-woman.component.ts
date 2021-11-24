import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DbVideosService } from 'src/app/shared/db-videos.service';
import { IStars, StarsImagesFirebaseService } from 'src/app/shared/firebase.service';

@Component({
  selector: 'app-videos-woman',
  templateUrl: './videos-woman.component.html',
  styleUrls: ['./videos-woman.component.css']
})
export class VideosWomanComponent implements OnInit {

  data = [];
  constructor(private db: DbVideosService) { }

  ngOnInit() {
    this.db.getAllVideos().pipe(tap(data => this.data = (data as IStars[]).map(x => x.path))).subscribe()
  }



}
