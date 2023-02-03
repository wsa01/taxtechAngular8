import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clients:Client[];

  constructor(
    private miServicio:ClientService,
    private clientService:ClientService,

  ) { }

  ngOnInit() {
    this.getClients()
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

}
