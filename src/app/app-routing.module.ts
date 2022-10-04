import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './modules/components/pages/anime/anime.component';
import { ComicComponent } from './modules/components/pages/comic/comic.component';

const routes: Routes = [
  {
    path : 'anime',
    component : AnimeComponent
  },
  {
    path : 'comic',
    component: ComicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
