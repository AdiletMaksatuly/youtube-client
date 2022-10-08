import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';
  searchQuery: string | null = null;

  showSearchResults(searchQuery: string) {
    this.searchQuery = searchQuery;
  }
}
