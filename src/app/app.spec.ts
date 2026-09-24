import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { CarsStore } from './features/cars/data-access/cars-store';

describe('Selling Cars navigation and state', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideRouter(routes)] }));

  it('filters cars and shares favorite state between lazy routes', async () => {
    const harness = await RouterTestingHarness.create('/cars');
    const input = harness.routeNativeElement!.querySelector('input')!;
    input.value = '  TOYOTA  ';
    input.dispatchEvent(new Event('input'));
    harness.detectChanges();
    expect(harness.routeNativeElement!.querySelectorAll('app-car-card')).toHaveLength(1);
    harness.routeNativeElement!.querySelector<HTMLButtonElement>('app-car-card button')!.click();
    await harness.navigateByUrl('/favorites');
    expect(harness.routeNativeElement!.textContent).toContain('Corolla');
    harness.routeNativeElement!.querySelector<HTMLButtonElement>('app-car-card button')!.click();
    harness.detectChanges();
    expect(harness.routeNativeElement!.querySelectorAll('app-car-card')).toHaveLength(0);
  });

  it('updates reused detail routes and handles a missing car', async () => {
    const harness = await RouterTestingHarness.create('/cars/demo-toyota');
    expect(harness.routeNativeElement!.querySelector('h1')!.textContent).toContain('Corolla');
    await harness.navigateByUrl('/cars/demo-kia');
    expect(harness.routeNativeElement!.querySelector('h1')!.textContent).toContain('Sportage');
    await harness.navigateByUrl('/cars/missing');
    expect(harness.routeNativeElement!.textContent).toContain('العربية مش موجودة');
  });

  it('loads all foundation pages and the fallback route', async () => {
    const harness = await RouterTestingHarness.create('/');
    expect(harness.routeNativeElement!.querySelector('input')).toBeTruthy();
    for (const path of ['/sell-car', '/my-listings', '/account', '/unknown']) {
      await harness.navigateByUrl(path);
      expect(harness.routeNativeElement!.querySelector('h1')).toBeTruthy();
    }
  });

  it('ignores unknown favorite IDs', () => {
    const store = TestBed.inject(CarsStore);
    store.toggleFavorite('missing');
    expect(store.favorites()).toEqual([]);
  });
});
