import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmptyState } from '../shared/ui/empty-state';
@Component({
  selector: 'app-not-found', imports: [EmptyState, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1 class="my-4 text-[clamp(28px,4vw,44px)] leading-[1.45] font-bold">الصفحة مش موجودة</h1><app-empty-state class="col-span-full" heading="راجع الرابط وجرب تاني" description="ممكن ترجع وتشوف العربيات المتاحة."><a class="text-[#12624d] underline underline-offset-[5px]" routerLink="/cars">شوف العربيات</a></app-empty-state>`,
})
export class NotFound {}
