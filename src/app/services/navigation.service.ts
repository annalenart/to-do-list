import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Categories } from '../utils/models/nav';
import { NavigationProviderService } from './navigation-provider.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  categories$ = new ReplaySubject<Categories>(1);

  refreshSub$ = new BehaviorSubject(undefined);

  constructor(private navProvider: NavigationProviderService) {
    this.refreshSub$.pipe(
      switchMap(() => this.navProvider.getCategories()
      )
    ).subscribe((categories: Categories) => this.categories$.next(categories));
  }

  refreshCategories() {
    this.refreshSub$.next(undefined);
  }

  getCategories(): Observable<Categories> {
    return this.categories$.asObservable();
  }
}
