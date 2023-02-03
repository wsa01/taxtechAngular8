import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients:Client[];

  constructor(
    private clientService:ClientService,
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

}
