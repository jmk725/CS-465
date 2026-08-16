import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TripData } from '../services/trip-data';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard {
  @Input() trip: any;

  constructor(
    private tripData: TripData,
    private authenticationService: Authentication
  ) {}

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public deleteTrip(): void {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${this.trip.name}?`
    );

    if (!confirmed) {
      return;
    }

    this.tripData.deleteTrip(this.trip.code).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (error: any) => {
        console.log('Error deleting trip:', error);
      }
    });
  }
}