import { ChangeDetectionStrategy, Component, input } from '@angular/core';
@Component({
  selector: 'app-empty-state', changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section class="mt-6 rounded-xl border border-[#dce3df] bg-white p-8"><h2 class="my-3 text-[22px] font-bold">{{ heading() }}</h2><p class="my-4 text-[#52645d]">{{ description() }}</p><ng-content /></section>`,
})
export class EmptyState {
  readonly heading = input.required<string>();
  readonly description = input.required<string>();
}
