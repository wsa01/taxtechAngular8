import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientEditService {

  urlBase:string=environment.UrlBase;

  udtClient:Client={
    nombre:"",
    apellido:"",
    edad:0,
    fechNac:"",
    dni:0
  };

  constructor(private http:HttpClient) { }

  editClient(){
    console.log(this.udtClient);
    let url = `${this.urlBase}/updateclient`;
    return this.http.put(url,this.udtClient);
  }


}
