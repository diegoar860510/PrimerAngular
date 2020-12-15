import { Component } from '@angular/core';

// Services:
import { FifaDataService } from './../fifa-data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent {


  public hab: boolean;
  public stadiums : any = [];

  constructor(private config: NgbCarouselConfig, fifaDataServices: FifaDataService) {
    this.hab = false;
    fifaDataServices.getStadiums().subscribe((data) => {
      this.hab = true;
      this.stadiums = data.stadiums;
      console.log('Estadios', this.stadiums);
    });

    config.interval = 3000;
    config.showNavigationArrows = false;
  }
}
