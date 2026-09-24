import { computed, Injectable, signal } from '@angular/core';
import { Car } from './car';
const DEMO_CARS: readonly Car[] = [
  { id: 'demo-toyota', make: 'Toyota', model: 'Corolla', year: 2022, price: 1150000, mileage: 42000, city: 'القاهرة' },
  { id: 'demo-hyundai', make: 'Hyundai', model: 'Elantra', year: 2021, price: 940000, mileage: 58000, city: 'الجيزة' },
  { id: 'demo-kia', make: 'Kia', model: 'Sportage', year: 2023, price: 1850000, mileage: 24000, city: 'الإسكندرية' },
];
@Injectable({ providedIn: 'root' })
export class CarsStore {
  private readonly inventory = signal(DEMO_CARS);
  private readonly favoriteIds = signal<readonly string[]>([]);
  readonly cars = this.inventory.asReadonly();
  readonly favorites = computed(() => this.cars().filter(car => this.favoriteIds().includes(car.id)));
  isFavorite(id: string): boolean { return this.favoriteIds().includes(id); }
  toggleFavorite(id: string): void {
    if (!this.cars().some(car => car.id === id)) return;
    this.favoriteIds.update(ids => ids.includes(id) ? ids.filter(value => value !== id) : [...ids, id]);
  }
}
