import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {YoutubeRoutePaths} from "../../../youtube/models/routes.model";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  private adminPageRoute = YoutubeRoutePaths.ADMIN_PAGE;

  constructor(private router: Router) {
  }
  goToAdminPage() {
    this.router.navigate(['main/' + this.adminPageRoute])
  }
}
