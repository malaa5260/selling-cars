import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cars' },
  { path: 'cars', loadChildren: () => import('./features/cars/cars.routes').then(m => m.CARS_ROUTES) },
  { path: 'sell-car', title: 'بيع عربيتك | Selling Cars', loadComponent: () => import('./features/sell-car/sell-car').then(m => m.SellCar) },
  { path: 'my-listings', title: 'إعلاناتي | Selling Cars', loadComponent: () => import('./features/my-listings/my-listings').then(m => m.MyListings) },
  { path: 'favorites', title: 'المفضلة | Selling Cars', loadComponent: () => import('./features/favorites/favorites').then(m => m.Favorites) },
  { path: 'account', title: 'حسابي | Selling Cars', loadComponent: () => import('./features/account/account').then(m => m.Account) },
  { path: '**', title: 'الصفحة مش موجودة | Selling Cars', loadComponent: () => import('./layout/not-found').then(m => m.NotFound) },
];
