import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { DateHighlightDirective } from './directives/date-highlight.directive';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideoStatsComponent } from './components/video-stats/video-stats.component';
import { SharedModule } from '../shared/shared.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CreateCardFormComponent } from './components/create-card-form/create-card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { youtubeReducer } from './redux/reducers/youtube.reducer';
import { EffectsModule } from '@ngrx/effects';
import { YoutubeEffects } from './redux/effects/youtube.effects';

@NgModule({
  declarations: [
    SearchComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    DateHighlightDirective,
    SearchFilterPipe,
    MainPageComponent,
    DetailedInformationPageComponent,
    VideoDetailsComponent,
    VideoStatsComponent,
    AdminPageComponent,
    CreateCardFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('youtube', youtubeReducer),
    EffectsModule.forFeature([YoutubeEffects]),
  ],
  exports: [],
})
export class YoutubeModule {}
