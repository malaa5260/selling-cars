import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarsStore } from '../cars/data-access/cars-store';
import { CarCard } from '../cars/ui/car-card';
import { EmptyState } from '../../shared/ui/empty-state';
@Component({
  selector: 'app-favorites', imports: [CarCard, EmptyState, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1 class="my-4 text-[clamp(28px,4vw,44px)] leading-[1.45] font-bold">العربيات المفضلة</h1><p class="my-4 text-[#52645d]">المفضلة محفوظة طول ما الصفحة مفتوحة، وبتتمسح مع إعادة تحميلها.</p><div class="grid grid-cols-3 gap-[22px] max-[850px]:grid-cols-2 max-[560px]:grid-cols-1">
    @for (car of store.favorites(); track car.id) {
      <app-car-card [car]="car" [favorite]="true" (favoriteToggle)="store.toggleFavorite($event)" />
    } @empty {
      <app-empty-state class="col-span-full" heading="لسه مفيش عربيات في المفضلة" description="ضيف العربيات اللي عجبتك عشان ترجع لها بسهولة."><a class="text-[#12624d] underline underline-offset-[5px]" routerLink="/cars">شوف العربيات</a></app-empty-state>
    }</div>`,
})
export class Favorites { protected readonly store = inject(CarsStore); }
