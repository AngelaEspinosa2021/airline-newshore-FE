import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightInterface } from './interfaces/FligthInterface';

@Injectable({
  providedIn: 'root'
})
export class FligthService {
  
  private bdUrl = 'http://localhost:60595/Flight/Find';

  constructor(private http: HttpClient) {  }

FindFligths(): Observable<FlightInterface[]> {
    return this.http.get<FlightInterface[]>(this.bdUrl);
}
  
}
