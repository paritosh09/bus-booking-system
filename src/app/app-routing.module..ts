// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';

export const routes: Routes = [
  { path: '', component: BusListComponent },
  { path: 'book-ticket', component: BookTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
