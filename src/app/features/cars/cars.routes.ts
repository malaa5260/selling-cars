import { Routes } from '@angular/router';
export const CARS_ROUTES: Routes = [
  { path: '', title: 'العربيات | Selling Cars', loadComponent: () => import('./search/car-search').then(m => m.CarSearch) },
  { path: ':id', title: 'تفاصيل العربية | Selling Cars', loadComponent: () => import('./details/car-details').then(m => m.CarDetails) },
];
