import { Component } from '@angular/core';

// Services:
import { FifaDataService } from './fifa-data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public loading = false;
  public teams = [];


  constructor(private configCaousel: NgbCarouselConfig, fifaDataServices: FifaDataService) {
    this.loading = true;
    fifaDataServices.getTeams().subscribe((data) => {
      this.loading = false;
      this.teams = data.Teams;
    });


  }


}
