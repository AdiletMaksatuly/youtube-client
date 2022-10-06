import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';
  isShowSearchResults: boolean = false;

  showSearchResults() {
    if (this.isShowSearchResults) return;

    this.isShowSearchResults = true;
  }
}
