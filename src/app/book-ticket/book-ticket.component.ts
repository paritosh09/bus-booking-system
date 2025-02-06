import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute and Router
import { BusService } from '../../bus.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  ticket: any = {
    passengerName: '',
    seatNumber: '',
    bus: {
      id: null
    }
  };

  constructor(
    private busService: BusService,
    private route: ActivatedRoute, // Inject ActivatedRoute
    private router: Router // Inject Router
  ) { }

  ngOnInit(): void {
    // Retrieve busId from query parameters
    this.route.queryParams.subscribe(params => {
      const busId = params['busId'];
      if (busId) {
        this.ticket.bus.id = busId;
        // Optionally, fetch bus details using busId
        this.busService.getBusById(busId).subscribe(bus => {
          console.log('Bus details:', bus);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.ticket.passengerName && this.ticket.seatNumber && this.ticket.bus.id) {
      this.busService.bookTicket(this.ticket).subscribe(
        response => {
          alert('Ticket booked successfully!');
          console.log('Booking response:', response);
          this.resetForm();
          this.router.navigate(['/']); // Redirect to home or bus list page
        },
        error => {
          alert('Failed to book ticket. Please try again.');
          console.error('Booking error:', error);
        }
      );
    } else {
      alert('Please fill out all fields.');
    }
  }

  resetForm(): void {
    this.ticket = {
      passengerName: '',
      seatNumber: '',
      bus: {
        id: null
      }
    };
  }
}