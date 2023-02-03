import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClientEditService } from 'src/app/services/client-edit.service';

@Component({
  selector: 'app-modal-edit-client',
  templateUrl: './modal-edit-client.component.html',
  styleUrls: ['./modal-edit-client.component.css']
})
export class ModalEditClientComponent implements OnInit {

  @Input() clientImp!:Client;
  @Output() respEvent = new EventEmitter<string>();

  constructor(
    private clientEditServ:ClientEditService
  ) { }

  ngOnInit() {
  }

  saveClientUpdate(){
    this.clientEditServ.editClient()
      .subscribe((resp:any)=>{
        this.respEvent.emit(resp.code)
      })
  }




}
