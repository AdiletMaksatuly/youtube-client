import {Component, OnInit} from '@angular/core';
import {FilterType} from "../../../app.model";
import {YoutubeService} from "../../services/youtube.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showFilter: boolean = false;

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {}

  onSearch(searchQuery: string) {
    console.log('search', searchQuery)

    this.youtubeService.setSearchQuery(searchQuery)
  }







  onFilter(filterQuery: FilterType) {
    this.youtubeService.setFilterQuery(filterQuery);
  }

  onFilteredByString(filterString: string) {
    this.youtubeService.setFilterString(filterString);
  }
}
