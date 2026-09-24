import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmptyState } from '../../shared/ui/empty-state';
@Component({
  selector: 'app-my-listings', imports: [EmptyState], changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1 class="my-4 text-[clamp(28px,4vw,44px)] leading-[1.45] font-bold">إعلاناتي</h1><app-empty-state class="col-span-full" heading="إدارة إعلاناتك — قريباً" description="بعد ربط الحسابات، هتقدر تشوف إعلاناتك وتعدلها وتتابع حالتها من هنا." />`,
})
export class MyListings {}
