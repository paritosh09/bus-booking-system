import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Correct import for FormsModule
 import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { AppRoutingModule } from './app-routing.module.';

@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,  // Make sure BusListComponent is declared here
    BookTicketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,  // Ensure FormsModule is in imports for ngModel to work
    AppRoutingModule  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // This is okay if you are using web components
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
