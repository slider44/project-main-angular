import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  API_URL: string = "http://localhost:4200/api/";

  constructor(private httpClient: HttpClient) { }

  getAllSkills() {
    return this.httpClient.get(this.API_URL + 'skills');
  }

}
