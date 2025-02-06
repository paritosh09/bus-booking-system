import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {
  ticketId: any;

  constructor(private busService: BusService) { }

  ngOnInit(): void {
  }

  // onCancel(): void {
  //   this.busService.cancelTicket(this.ticketId).subscribe(response => {
  //     console.log('Ticket cancelled successfully', response);
  //   });
  // }
}