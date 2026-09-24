import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CarsStore } from '../data-access/cars-store';
import { CarCard } from '../ui/car-card';
import { EmptyState } from '../../../shared/ui/empty-state';
@Component({
  selector: 'app-car-search', imports: [CarCard, EmptyState], changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="rounded-2xl bg-[#e1ebe3] p-[clamp(24px,5vw,60px)]"><span class="text-xs leading-[1.7] font-bold text-[#355747]">SELLING CARS / البداية</span><h1 class="my-4 text-[clamp(28px,4vw,44px)] leading-[1.45] font-bold">خطوة أقرب لعربيتك الجاية.</h1><p class="my-4 text-[#52645d]">دور على الماركة أو الموديل أو المدينة، واحفظ العربيات اللي عجبتك.</p></section>
    <section class="my-7" aria-label="البحث عن عربية">
      <label class="mb-2 block font-bold" for="car-search">بتدور على إيه؟</label>
      <input class="w-full max-w-[650px] rounded-lg border border-[#8a9c93] bg-white px-4 py-3.5 text-[#172a31]" id="car-search" type="search" placeholder="مثلاً Toyota أو القاهرة" [value]="query()" (input)="query.set($any($event.target).value)" />
      <p class="my-4 text-[#52645d]" aria-live="polite">{{ filteredCars().length }} عربيات · بيانات تجريبية</p>
    </section>
    <div class="grid grid-cols-3 gap-[22px] max-[850px]:grid-cols-2 max-[560px]:grid-cols-1">
      @for (car of filteredCars(); track car.id) {
        <app-car-card [car]="car" [favorite]="store.isFavorite(car.id)" (favoriteToggle)="store.toggleFavorite($event)" />
      } @empty {
        <app-empty-state class="col-span-full" heading="مفيش نتائج" description="جرب ماركة أو مدينة تانية."><button class="inline-block cursor-pointer rounded-lg border border-[#12624d] bg-[#12624d] px-5 py-2.5 text-white no-underline hover:bg-[#0a4c3a]" type="button" (click)="query.set('')">امسح البحث</button></app-empty-state>
      }
    </div>`,
})
export class CarSearch {
  protected readonly store = inject(CarsStore);
  protected readonly query = signal('');
  protected readonly filteredCars = computed(() => {
    const query = this.query().trim().toLocaleLowerCase();
    return this.store.cars().filter(car => `${car.make} ${car.model} ${car.city}`.toLocaleLowerCase().includes(query));
  });
}
