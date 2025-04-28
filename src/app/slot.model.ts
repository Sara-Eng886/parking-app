export interface Slot {
  id: number;
  isOccupied: boolean;
  carInfo?: {
    name: string;
    number: string;
  };
}
