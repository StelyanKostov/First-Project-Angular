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
   
    {
      position: 1,
      name: "Victoria Justice",
      pathToImg: "https://celebmagazine.com/wp-content/uploads/2020/12/victoria-justice-new-song-treat-myself.jpg"
    },
    {
      position: 2,
      name: "Leidy Amelia",
      pathToImg: "http://localhost:4200/assets/leidy%20amelia/leidy%20amelia16.jpg"
    },
    {
      position: 3,
      name: "Emily Ratajkowski",
      pathToImg: "http://localhost:4200/assets/emily/Emily%20Ratajkowski30.jpg"
    },  
    {
      position: 4,
      name: "Nina Dobrev",
      pathToImg: "http://i.imgur.com/EaOp9EV.jpg"
    },
    {
      position: 5,
      name: "Anya Sugar",
      pathToImg: "http://localhost:4200/assets/anya sugar/anya sugar12.jpg"
    },
    
  ];
  
  getTopWoman(){
    return this.dataTopWoman;
  }
  
}
