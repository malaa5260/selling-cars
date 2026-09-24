import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car } from '../data-access/car';
@Component({
  selector: 'app-car-card', imports: [RouterLink, DecimalPipe], changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="overflow-hidden rounded-xl border border-[#dce3df] bg-white">
      <div class="bg-[#e5ebe7] p-[30px] text-[32px] font-extrabold text-[#365e4e] [direction:ltr]" aria-hidden="true">{{ car().make }}<span class="block text-[17px] font-normal">{{ car().model }}</span></div>
      <div class="p-6">
        <span class="text-xs leading-[1.7] font-bold text-[#355747]">إعلان تجريبي · {{ car().city }}</span>
        <h2 class="my-3 text-[22px] font-bold"><a class="text-inherit underline underline-offset-[5px]" [routerLink]="['/cars', car().id]">{{ car().make }} {{ car().model }}</a></h2>
        <p class="my-4 text-[#52645d]">{{ car().year }} · {{ car().mileage | number }} كم</p>
        <strong class="my-[18px] block text-[22px] font-bold">{{ car().price | number }} جنيه</strong>
        <button class="inline-block w-full cursor-pointer rounded-lg border border-[#12624d] bg-white px-5 py-2.5 text-[#12624d] hover:bg-[#e1ebe3]" type="button" [attr.aria-pressed]="favorite()" (click)="favoriteToggle.emit(car().id)">{{ favorite() ? 'إزالة من المفضلة' : 'أضف للمفضلة' }}</button>
      </div>
    </article>`,
})
export class CarCard {
  readonly car = input.required<Car>();
  readonly favorite = input(false);
  readonly favoriteToggle = output<string>();
}
