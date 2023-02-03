import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlBase:String = environment.UrlBase;
  private clientes:Client[];

  constructor( private http:HttpClient ) { }

  getClients(){
    let url = `${this.urlBase}/listclients`;
    return this.http.get(url);
  }

  deleteClient(dni:number){
    let url = `${this.urlBase}/deleteclient/${dni}`;
    return this.http.delete(url);
  }

  addClient(client:Client){
    console.log("cliente")
    console.log(client)
    let url = `${this.urlBase}/createclient`;
    return this.http.post(url,client)
  }
}
