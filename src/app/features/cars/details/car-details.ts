import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarsStore } from '../data-access/cars-store';
import { EmptyState } from '../../../shared/ui/empty-state';
@Component({
  selector: 'app-car-details', imports: [DecimalPipe, RouterLink, EmptyState], changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="text-[#12624d] underline underline-offset-[5px]" routerLink="/cars">الرجوع للعربيات</a>
    @if (car(); as car) {
      <section class="mt-6 rounded-xl border border-[#dce3df] bg-white p-8"><span class="text-xs leading-[1.7] font-bold text-[#355747]">إعلان تجريبي</span><h1 class="my-4 text-[clamp(28px,4vw,44px)] leading-[1.45] font-bold">{{ car.make }} {{ car.model }}</h1>
        <p class="my-4 text-[28px] font-bold text-[#12624d]">{{ car.price | number }} جنيه</p>
        <dl class="my-4 grid grid-cols-[120px_1fr] gap-3"><dt>سنة الصنع</dt><dd class="m-0 font-bold">{{ car.year }}</dd><dt>المسافة</dt><dd class="m-0 font-bold">{{ car.mileage | number }} كم</dd><dt>المدينة</dt><dd class="m-0 font-bold">{{ car.city }}</dd></dl>
        <button class="inline-block cursor-pointer rounded-lg border border-[#12624d] bg-[#12624d] px-5 py-2.5 text-white no-underline hover:bg-[#0a4c3a]" type="button" [attr.aria-pressed]="store.isFavorite(car.id)" (click)="store.toggleFavorite(car.id)">{{ store.isFavorite(car.id) ? 'إزالة من المفضلة' : 'أضف للمفضلة' }}</button>
        <p class="my-4 text-[#52645d]">عرض تجريبي لتوضيح شكل التفاصيل. التواصل مع البائع هيتضاف بعد ربط الخدمة.</p>
      </section>
    } @else {
      <h1 class="my-4 text-[clamp(28px,4vw,44px)] leading-[1.45] font-bold">العربية مش موجودة</h1><app-empty-state class="col-span-full" heading="راجع الرابط" description="الإعلان ده مش ضمن البيانات التجريبية الحالية." />
    }`,
})
export class CarDetails {
  protected readonly store = inject(CarsStore);
  private readonly params = toSignal(inject(ActivatedRoute).paramMap);
  protected readonly car = computed(() => this.store.cars().find(car => car.id === this.params()?.get('id')));
}
