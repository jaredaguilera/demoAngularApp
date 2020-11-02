import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonModel } from '../models/person.model';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {
  }

  getPerson(request: PersonModel) {
    const url = `http://localhost:8888/getinfoperson/`;
    return this.http.post(url, request);
  }

}