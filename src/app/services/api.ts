import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseUrl = environment.API_URL;
  constructor(private http:HttpClient){

  }

  post( url: string,data: any) {
    return this.http.post(`${this.baseUrl}${url}`, data);
  }
  get(url:string){
    return this.http.get(`${this.baseUrl}${url}`)
  }
}
