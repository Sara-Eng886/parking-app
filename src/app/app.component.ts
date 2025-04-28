// src/app/app.component.ts
import { Component } from '@angular/core';
import { ParkingSlotsComponent } from './parking-slots/parking-slots.component';
import { CommonModule } from '@angular/common';  // For *ngIf, *ngFor

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, ParkingSlotsComponent]
})
export class AppComponent {
  currentView: 'park' | 'remove' = 'park';  // Initial view is 'park'

  // Method to toggle to Park view
  setParkView() {
    this.currentView = 'park';
    console.log('View changed to:', this.currentView);  // Debug log
  }

  // Method to toggle to Remove view
  setRemoveView() {
    this.currentView = 'remove';
    console.log('View changed to:', this.currentView);  // Debug log
  }
}
