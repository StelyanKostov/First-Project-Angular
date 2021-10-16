import { Injectable } from '@angular/core';


export interface ITopWaman{

  position:number;
  name:string;
  pathToImg:string;

}


@Injectable({
  providedIn: 'root'
})
export class TopWomanService {

  constructor() { }

  dataTopWoman:ITopWaman[] =[
    // {
    //   position: 1,
    //   name: "Desi",
    //   pathToImg: "../assets/desi/desi.jpg"
    // },
    {
      position: 1,
      name: "Victoria",
      pathToImg: "https://celebmagazine.com/wp-content/uploads/2020/12/victoria-justice-new-song-treat-myself.jpg"
    },
    {
      position: 2,
      name: "Leidy",
      pathToImg: "http://localhost:4200/assets/leidy%20amelia/leidy%20amelia16.jpg"
    },
    {
      position: 3,
      name: "Emily",
      pathToImg: "http://localhost:4200/assets/emily/Emily%20Ratajkowski30.jpg"
    },  
    {
      position: 4,
      name: "Nina",
      pathToImg: "http://i.imgur.com/EaOp9EV.jpg"
    },
    {
      position: 5,
      name: "kiele",
      pathToImg: "https://ilarge.lisimg.com/image/16292906/759full-kiele-montgomery.jpg"
    },
    
  
  ];
  
  getTopWoman(){
    return this.dataTopWoman;
  }
  
}
