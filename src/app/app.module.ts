import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './modules/shared/material.module';

import { SideBarComponent } from './modules/components/side-bar/side-bar.component';
import { AnimeComponent } from './modules/components/pages/anime/anime.component';
import { ComicComponent } from './modules/components/pages/comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    AnimeComponent,
    ComicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
