import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,addDoc } from 'firebase/firestore/lite';
import { environment } from '../../environments/environment'
import { WomenService } from '.././woman/women.service';



export interface IStars {
  name: string,
  path: string
}

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration




// Get a list of cities from your database


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  db: any;
  dataFromDb:string[] =[];
  constructor(private womanService:WomenService) {
    const app = initializeApp(environment.fireBase);
    this.db = getFirestore(app);
  }


  async addStars(name:string , arrayData:any[]){

    const starsCol = collection(this.db, 'stars');

    for (let index = 0; index < arrayData.length; index++) {
      
    await addDoc(starsCol,{name:name ,path:arrayData[index]})
      
    }
    
  }
  private async getDataStarsFromDbByName(strName:string) {
    
    const starsCol = collection(this.db, 'stars');
    const starsSnapshot = await getDocs(starsCol);
    const starsList = starsSnapshot.docs.map(doc => doc.data()).filter(x=> (x as IStars).name.toLowerCase().includes(strName.toLowerCase()));
    return starsList;

  }
  getStarsName(strName:string){

    this.dataFromDb = [];
    this.getDataStarsFromDbByName(strName).then(x=> x.forEach(x=> this.dataFromDb.push(x.path)))

    return this.dataFromDb;
  }

  getStartsAll(){

    this.dataFromDb = [];
    this.getDataStarsFromDbAll().then(x=> x.forEach(x=> this.dataFromDb.push(x.path)));
    return this.dataFromDb;
  }

  private async getDataStarsFromDbAll() {
    
    const starsCol = collection(this.db, 'stars');
    const starsSnapshot = await getDocs(starsCol);
    const starsList = starsSnapshot.docs.map(doc => doc.data());
    return starsList;

    // let dataStars:IStars[];
    // const starsCol = collection(this.db, 'stars');
    // await getDocs(starsCol).then((querySnapshot) => {
    //   querySnapshot.forEach(function (doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     // console.log(doc.get('name'), " => ", (doc.data() as IStars).path);

    //     dataStars =doc.data() as IStars[];
    //   });
    // }).catch(function (error) {
    //   console.log("Error getting documents: ", error);
    // });

    // console.log(dataStars)
    // return dataStars
  }

}
