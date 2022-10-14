import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {DetailedInformationPageComponent} from "./pages/detailed-information-page/detailed-information-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'detailed/:id',
    component: DetailedInformationPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
