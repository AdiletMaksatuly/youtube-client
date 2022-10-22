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
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
  exports: [],
})
export class YoutubeModule {}
