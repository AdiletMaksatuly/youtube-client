import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { YoutubeRouteParams, YoutubeRoutePaths } from './models/routes.model';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: `${YoutubeRoutePaths.DETAILED_INFORMATION_PAGE}/:${YoutubeRouteParams.ID}`,
    component: DetailedInformationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
