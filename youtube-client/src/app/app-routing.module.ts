import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/guards/login.guard';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { YoutubeRoutePaths } from './youtube/models/routes.model';
import { AuthRoutePaths } from './auth/models/routes.model';

const routes: Routes = [
  {
    path: AuthRoutePaths.LOGIN,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: YoutubeRoutePaths.MAIN_PAGE,
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canLoad: [LoginGuard],
  },
  {
    path: '',
    redirectTo: YoutubeRoutePaths.MAIN_PAGE,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
