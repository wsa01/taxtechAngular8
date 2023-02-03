import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-modal-add-client',
  templateUrl: './modal-add-client.component.html',
  styleUrls: ['./modal-add-client.component.css']
})
export class ModalAddClientComponent implements OnInit {

  @Output() respEvent = new EventEmitter<string>();

  newClient:Client;
  Pnombre:string="";
  Papellido:string="";
  Pedad:number=0;
  PfechaNac:string="";
  Pdni:number=0;

  constructor(
    private clientServ:ClientService,
  ) { }

  ngOnInit() {
  }

  addClient(){
    this.newClient = {
      nombre:this.Pnombre,
      apellido:this.Papellido,
      edad:this.Pedad,
      fechNac:this.PfechaNac,
      dni:this.Pdni
    }
    this.limpForm();
    this.clientServ.addClient(this.newClient)
      .subscribe((resp:any)=>{
        console.log(resp.code);
        this.respEvent.emit(resp.code);
      })
  }

  limpForm(){
    this.Pnombre="";
    this.Papellido="";
    this.Pedad=0;
    this.PfechaNac="";
    this.Pdni=0;
  }

}
