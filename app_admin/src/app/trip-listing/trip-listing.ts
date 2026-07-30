import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';
import { TripData } from '../services/trip-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit {
  trips: any[] = [];
  message = '';

 constructor(
  private tripData: TripData,
  private changeDetector: ChangeDetectorRef,
  private router: Router
) {}

public addTrip(): void {
  this.router.navigate(['add-trip']);
}

  ngOnInit(): void {
    this.tripData.getTrips().subscribe({
      next: (data: any) => {
        this.trips = data;
        this.changeDetector.markForCheck();
      },
      error: (error: any) => {
        console.log('Error retrieving trips:', error);
        this.message = 'Unable to retrieve trips.';
        this.changeDetector.markForCheck();
      }
    });
  }
}