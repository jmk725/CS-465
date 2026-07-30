import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTrip implements OnInit {
  editForm!: FormGroup;
  submitted = false;
  tripCode = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tripService: TripData
  ) {}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.tripCode = this.route.snapshot.paramMap.get('tripCode') || '';

    this.tripService.getTrip(this.tripCode).subscribe({
      next: (trip: any) => {
        this.editForm.patchValue({
          _id: trip._id,
          code: trip.code,
          name: trip.name,
          length: trip.length,
          start: trip.start?.substring(0, 10),
          resort: trip.resort,
          perPerson: trip.perPerson,
          image: trip.image,
          description: trip.description
        });
      },
      error: (error: any) => {
        console.log('Error loading trip:', error);
      }
    });
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.editForm.valid) {
      this.tripService.updateTrip(
        this.tripCode,
        this.editForm.value
      ).subscribe({
        next: (data: any) => {
          console.log('Trip updated:', data);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error updating trip:', error);
        }
      });
    }
  }

  get f() {
    return this.editForm.controls;
  }
}