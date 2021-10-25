import { RouterModule, Routes } from "@angular/router";
import { DeleteFormComponent } from "./delete-form/delete-form.component";
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
    },
    {
      path:"delete",
      component:DeleteFormComponent
    }

  ];
  
  
  
  export const FormsRoutingModule = RouterModule.forChild(routes)