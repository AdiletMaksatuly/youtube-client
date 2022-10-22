import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SettingsComponent,
    LoginComponent,
    SearchbarComponent,
    FilterComponent,
    NotFoundPageComponent,
    LogoutComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [HeaderComponent, NotFoundPageComponent],
})
export class CoreModule {}
