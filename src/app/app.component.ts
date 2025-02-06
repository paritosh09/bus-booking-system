import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { LoadingService } from './loader-service';

@Component({
  selector: 'app-root' ,
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bus-Booking-App';
  isLoading: boolean = true;
  constructor(private loadingService: LoadingService) {
    this.loadingService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
}
}
