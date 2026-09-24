import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmptyState } from '../../shared/ui/empty-state';
@Component({
  selector: 'app-account', imports: [EmptyState], changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1 class="my-4 text-[clamp(28px,4vw,44px)] leading-[1.45] font-bold">حسابي</h1><app-empty-state class="col-span-full" heading="الحسابات — قريباً" description="تسجيل الدخول وبيانات الحساب هيتضافوا بعد اختيار وربط خدمة المصادقة. مفيش تسجيل دخول فعلي في النسخة الحالية." />`,
})
export class Account {}
