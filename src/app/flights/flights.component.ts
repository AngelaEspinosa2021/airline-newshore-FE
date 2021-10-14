import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FligthService } from '../fligth.service';
import { FlightInterface } from '../interfaces/FligthInterface';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {

  constructor(private service: FligthService,
              private router: Router) { }

  fligthForm = new FormGroup({
    origen: new FormControl('', Validators.required),
    destino: new FormControl('', Validators.required),
    fechaLlegada: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log(this.fligthForm.value);

    this.service.FindFligths(this.fligthForm.value).subscribe((data: any) => {
    })

  }

}