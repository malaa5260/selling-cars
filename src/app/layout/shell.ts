import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-shell', imports: [RouterLink, RouterLinkActive, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="absolute -top-[100px] z-10 bg-white p-3 text-[#12624d] underline underline-offset-[5px] focus:top-0" href="#main">انتقل للمحتوى</a>
    <header class="flex items-center justify-between gap-6 border-b border-[#dce3df] bg-white px-[max(5vw,20px)] py-[22px] max-[850px]:flex-col max-[850px]:items-start">
      <a class="text-2xl leading-[1.7] font-extrabold text-[#12624d] no-underline" routerLink="/cars">Selling Cars<span class="block text-xs leading-[1.7] font-normal text-[#586660]">عربيتك الجاية هنا</span></a>
      <nav class="flex flex-wrap items-center gap-6 max-[850px]:gap-4 max-[560px]:gap-3 max-[560px]:text-sm max-[560px]:leading-[1.7]" aria-label="القائمة الرئيسية">
        <a class="font-semibold text-[#12624d] underline-offset-[5px]" routerLink="/cars" routerLinkActive="underline decoration-2" ariaCurrentWhenActive="page">العربيات</a>
        <a class="font-semibold text-[#12624d] underline-offset-[5px]" routerLink="/favorites" routerLinkActive="underline decoration-2" ariaCurrentWhenActive="page">المفضلة</a>
        <a class="font-semibold text-[#12624d] underline-offset-[5px]" routerLink="/my-listings" routerLinkActive="underline decoration-2" ariaCurrentWhenActive="page">إعلاناتي</a>
        <a class="font-semibold text-[#12624d] underline-offset-[5px]" routerLink="/account" routerLinkActive="underline decoration-2" ariaCurrentWhenActive="page">حسابي</a>
        <a class="inline-block cursor-pointer rounded-lg border border-[#12624d] bg-[#12624d] px-5 py-2.5 text-white hover:bg-[#0a4c3a] font-semibold underline-offset-[5px]" routerLink="/sell-car" routerLinkActive="underline decoration-2" ariaCurrentWhenActive="page">بيع عربيتك</a>
      </nav>
    </header>
    <main class="mx-auto min-h-[75vh] max-w-[1200px] px-6 pt-9 pb-16 max-[560px]:px-4 max-[560px]:py-6" id="main" tabindex="-1"><router-outlet /></main>
    <footer class="border-t border-[#dce3df] p-6 text-center text-[13px] text-[#52645d]">نسخة مبدئية · العربيات المعروضة بيانات تجريبية، مش إعلانات حقيقية.</footer>
  `,
})
export class Shell {}
