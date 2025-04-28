import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParkingSlotsComponent } from './parking-slots/parking-slots.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ParkingSlotsComponent,
     
      ],
      imports: [BrowserModule, FormsModule]  // Import BrowserModule (provides *ngIf/*ngFor) and FormsModule if using ngModel
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Additional tests (if any) can be added here to verify toggling behavior or localStorage usage.
});
