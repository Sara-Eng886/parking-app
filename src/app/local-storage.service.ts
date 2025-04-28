import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Check if localStorage is available before using it
  private isLocalStorageAvailable(): boolean {
    try {
      // Check if localStorage is available
      return typeof window !== 'undefined' && window.localStorage !== null;
    } catch (e) {
      // In case there is an error accessing localStorage, return false
      console.error('localStorage is not available:', e);
      return false;
    }
  }

  // Get data from localStorage
  getData(key: string): any {
    if (this.isLocalStorageAvailable()) {
      const data = localStorage.getItem(key);
      try {
        return data ? JSON.parse(data) : null;
      } catch (e) {
        console.error('Error parsing data from localStorage for key:', key, e);
        return null;  // Return null if parsing fails
      }
    }
    return null;  // Return null if localStorage is not available
  }

  // Save data to localStorage
  saveData(key: string, data: any): void {
    if (this.isLocalStorageAvailable()) {
      try {
        localStorage.setItem(key, JSON.stringify(data));
      } catch (e) {
        console.error('Error saving data to localStorage for key:', key, e);
      }
    }
  }
}
