import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FligthService {

  bdUrl = 'http://localhost:44310/FligthService.svc';

  constructor(private http: HttpClient) { }

  getFligths() {
    return this.http.get(this.bdUrl);
  }


}
