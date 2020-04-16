import {Observable} from 'rxjs';
import {Purchase} from './Purchase';
import {InjectionToken} from '@angular/core';

export const IPurchasesApiServiceToken = new InjectionToken('IPurchasesApiServiceToken');

export interface IPurchasesApiService {
  getAll(): Observable<Purchase[]>;

  add(entity: Purchase): Observable<void>;

  delete(id: number): Observable<void>;

  edit(entity: Purchase): Observable<void>;
}
