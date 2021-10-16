import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';



const routes: Routes = [
 
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'search',
    pathMatch: 'full',
    component: SearchBarComponent
  },
  {
    path: 'search/:name',
    pathMatch: 'full',
    component: SearchBarComponent
  },
  {
    path:'suggestions',
    component:SuggestionsComponent
  }
  ,
  {
    path: '**',
    component: NotFoundComponent
  }

];



export const AppRoutingModule = RouterModule.forRoot(routes)
// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
