import { Component, OnInit } from '@angular/core';
import { FligthService } from '../fligth.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(private service: FligthService) { }

  ngOnInit() {
    this.service.getFligths().subscribe((data: any) => {
      console.log(data);
    });
    
  }

}
