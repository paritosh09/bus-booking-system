import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { BusService } from '../../bus.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

 
@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  buses: any[] = [];
  filteredBuses: any[] = [];
  searchSource: string = '';
  searchDestination: string = '';
  searchDepartureTime: string = '';

  constructor(private busService: BusService, private router: Router) { } // Inject Router

  ngOnInit(): void {
    this.loadBuses();
  }

  loadBuses(): void {
    this.busService.getBuses().subscribe(data => {
      this.buses = data;
      this.filteredBuses = data;
    });
  }

  

  applyFilters(): void {
    this.filteredBuses = this.buses.filter(bus =>
      bus.source.toLowerCase().includes(this.searchSource.toLowerCase()) &&
      bus.destination.toLowerCase().includes(this.searchDestination.toLowerCase()) &&
      (!this.searchDepartureTime || bus.departureTime.includes(this.searchDepartureTime))
    );
  }

  clearFilters(): void {
    this.searchSource = '';
    this.searchDestination = '';
    this.searchDepartureTime = '';
    this.filteredBuses = this.buses;
  }
  navigateToBooking(busId: number): void {
    // Navigate to the booking page with busId as a query parameter
    this.router.navigate(['/book-ticket'], { queryParams: { busId } });
  }

}