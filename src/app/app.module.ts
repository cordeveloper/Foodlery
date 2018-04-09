import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { ImagesService } from './services/images.service';

const appRoutes: Routes = [
  {
    path: '',
    component: PreviewComponent,
    pathMatch: 'full'
  }
]


@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ImagesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
