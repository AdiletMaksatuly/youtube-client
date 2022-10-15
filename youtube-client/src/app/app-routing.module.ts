import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/guards/login.guard';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canLoad: [LoginGuard],
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
