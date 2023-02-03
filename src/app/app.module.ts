import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ClientService } from './services/client.service';
import { HttpClientModule } from "@angular/common/http";
import { ClientComponent } from './components/client/client.component';
import { ModalAddClientComponent } from './components/modal-add-client/modal-add-client.component';
import { ModalEditClientComponent } from './components/modal-edit-client/modal-edit-client.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ClientComponent,
    ModalAddClientComponent,
    ModalEditClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
