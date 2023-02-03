import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClientEditService } from 'src/app/services/client-edit.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients:Client[];
  oldClient:Client;
  constructor(
    private clientService:ClientService,
    private clientEditServ:ClientEditService
  ) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(){
    this.clientService.getClients()
      .subscribe((res:any) => {
        this.clients = res.data;
      },error =>{
        console.log("error")
      }
      )
  }

  deleteClient(dni:number){
    this.clientService.deleteClient(dni)
      .subscribe((resp:any)=>{
        console.log(resp.code);
        this.getClients();
      })

  }

  updateClient(client:Client){
    this.clientEditServ.udtClient={
      nombre:client.nombre,
      apellido:client.apellido,
      edad:client.edad,
      fechNac:client.fechNac,
      dni:client.dni
    }
  }

  updateListClient(code:string){
    console.log("paso:",code)
    if (code=="201") {
      this.getClients();
    }
  }

}
