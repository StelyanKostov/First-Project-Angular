import { RouterModule, Routes } from "@angular/router";
import { AllWomanComponent } from "./all-woman/all-woman.component";
import { TopWomanComponent } from "./top-woman/top-woman.component";
import { VideosWomanComponent } from "./videos-woman/videos-woman.component";
import { WomenComponent } from "./women/women.component";

const routes: Routes = [
  {
    path: 'woman',
    component: WomenComponent
  },

  {
    path: 'topWoman',
    pathMatch: 'full',
    component: TopWomanComponent
  },
  {
    path: 'videos',
    component:VideosWomanComponent
  }
  ,
  {
    path: 'allWoman',
    component:AllWomanComponent
  }


];



export const WomanRoutingModule = RouterModule.forChild(routes)