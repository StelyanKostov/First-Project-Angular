import { RouterModule, Routes } from "@angular/router";
import { EditFormComponent } from "./edit-form/edit-form.component";
import { SuggestionsComponent } from "./suggestions/suggestions.component";

const routes: Routes = [
    {
    path:'edit',  
    component: EditFormComponent
    },
    
    {
      path:'suggestions',
      component:SuggestionsComponent
    }

  ];
  
  
  
  export const FormsRoutingModule = RouterModule.forChild(routes)