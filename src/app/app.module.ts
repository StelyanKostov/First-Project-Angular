import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WomanModule } from './woman/woman.module';

import { environment } from "src/environments/environment";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { FormsRoutingModule } from './forms/forms-routing.module';
import {FormsModule as form} from './forms/forms.module'
import { WomanRoutingModule } from './woman/woman-routing.module';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    WomanModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    form,
    

  ],
  providers: [
    Title,
    
  ],
  bootstrap: [AppComponent],
  exports:[
  ]
})
export class AppModule { }
