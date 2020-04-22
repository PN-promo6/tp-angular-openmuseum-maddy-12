import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SingleMuseumComponent } from './single-museum/single-museum.component';
import { MuseumListService } from './services/museumList.service';
import { IndexComponent } from './index/index.component';
import { AddMuseumComponent } from './add-museum/add-museum.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'add', component: AddMuseumComponent },
  { path: 'museum/:ref_musee', component: MuseumDetailComponent },
  { path: 'not-found', component: NotFoundComponent },
  // {path: '**', redirectTo: 'not-found' },
  { path: '', component: IndexComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    IndexComponent,
    AddMuseumComponent,
    MuseumDetailComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
