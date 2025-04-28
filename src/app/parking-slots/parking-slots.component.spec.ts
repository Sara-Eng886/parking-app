import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSlotsComponent } from './parking-slots.component';

describe('ParkingSlotsComponent', () => {
  let component: ParkingSlotsComponent;
  let fixture: ComponentFixture<ParkingSlotsComponent>;
  it('should delete a slot', () => {
    component.slots = [
      { id: 1, isOccupied: false, plateNumber: null, phoneNumber: null },
      { id: 2, isOccupied: true, plateNumber: 'ABC123', phoneNumber: '123456789' }
    ];
  
    component.deleteSlot(1);
  
    expect(component.slots.length).toBe(1);
    expect(component.slots[0].id).toBe(2);
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingSlotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

