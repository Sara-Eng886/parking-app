import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../local-storage.service';



export interface Slot {
  id: number;
  isOccupied: boolean;
  plateNumber: string | null;
  phoneNumber: string | null;
}


@Component({
  selector: 'app-parking-slots',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parking-slots.component.html',
  styleUrls: ['./parking-slots.component.css']
})
export class ParkingSlotsComponent implements OnInit {
  
removeSlot(arg0: any) {
throw new Error('Method not implemented.');
}
  slots: Slot[] = [];
  isSlotSelected = false;
  selectedSlot: Slot | null = null;
  userInfo = { plateNumber: '', phoneNumber: '' };
  message: string = '';
  isConfirmingRemoval: boolean = false;  // Flag to show the confirmation modal

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.slots = this.initializeSlots();
  }

  initializeSlots(): Slot[] {
    return Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      isOccupied: false,
      plateNumber: null,
      phoneNumber: null
    }));
  }

  parkCar(slot: Slot): void {
    if (!slot.isOccupied) {
      this.selectedSlot = slot;
      this.isSlotSelected = true;
      this.message = '';
    }
  }

  handleSlotClick(slot: Slot) {
    if (slot.isOccupied) {
      // Occupied: show phone number
      this.message = `Phone number: ${slot.phoneNumber}`;
      setTimeout(() => {
        this.message = '';
      }, 3000); // Clear the message after 3 seconds
    } else {
      // Empty: allow adding car info
      this.selectedSlot = slot;
      this.isSlotSelected = true;
    }
  }
  deleteSlot(slotId: number): void {
    this.slots = this.slots.filter(slot => slot.id !== slotId);
    this.localStorageService.saveData('slots', this.slots);
    this.message = `Slot ${slotId} has been deleted.`;
  }

  confirmSelection(): void {
    if (this.userInfo.plateNumber && this.userInfo.phoneNumber) {
      if (this.selectedSlot) {
        this.selectedSlot.isOccupied = true;
        this.selectedSlot.plateNumber = this.userInfo.plateNumber;
        this.selectedSlot.phoneNumber = this.userInfo.phoneNumber;
  
        this.isSlotSelected = false;
        this.userInfo = { plateNumber: '', phoneNumber: '' }; // Reset input fields
  
        this.message = `Slot ${this.selectedSlot.id} was successfully occupied!`;
        this.localStorageService.saveData('slots', this.slots);
      }
    } else {
      alert('Please fill in both plate number and phone number');
    }
  }

  cancelSelection(): void {
    this.isSlotSelected = false;
    this.selectedSlot = null;
    this.message = 'No slots were reserved.';
  }

  removeCar(): void {
    if (this.selectedSlot != null) {  // Check if selectedSlot is not null
      this.selectedSlot.isOccupied = false;
      this.selectedSlot.plateNumber = null;
      this.selectedSlot.phoneNumber = null;
      this.isConfirmingRemoval = false;
      this.message = `Car removed from Slot ${this.selectedSlot.id}`;
      this.localStorageService.saveData('slots', this.slots);
    }
  }
  
  cancelRemoval(): void {
    this.isConfirmingRemoval = false;
  }
  
}

