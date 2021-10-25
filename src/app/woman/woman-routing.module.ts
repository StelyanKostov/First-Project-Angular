import { RouterModule, Routes } from "@angular/router";
import { TopWomanComponent } from "./top-woman/top-woman.component";
import { WomenComponent } from "./women/women.component";

const routes: Routes = [
    {
    path:'woman',  
    component: WomenComponent
    },
   
     {
      path: 'topWoman',
      pathMatch: 'full',
      component: TopWomanComponent
    }
  
  
  ];
  
  
  
  export const WomanRoutingModule = RouterModule.forChild(routes)