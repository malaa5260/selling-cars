import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmptyState } from '../../shared/ui/empty-state';
@Component({
  selector: 'app-sell-car', imports: [EmptyState], changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1 class="my-4 text-[clamp(28px,4vw,44px)] leading-[1.45] font-bold">بيع عربيتك</h1><app-empty-state class="col-span-full" heading="إضافة إعلان — قريباً" description="هنا هتضيف بيانات العربية والصور والسعر. نشر الإعلانات محتاج ربط الحسابات وخدمة الإعلانات أولاً." />`,
})
export class SellCar {}
