import {IPurchasesApiService} from '../interfaces/IPurchasesApiService';
import {Purchase} from '../interfaces/Purchase';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class PurchasesApiMockService implements IPurchasesApiService {
  add(entity: Purchase): Observable<void> {
    return undefined;
  }

  delete(id: number): Observable<void> {
    return undefined;
  }

  getAll(): Observable<Purchase[]> {
    return of([
      {
        title: 'Проезд на метро',
        price: 40,
        date: new Date(),
        comment: ''
      },
      {
        title: 'Iphone XXL',
        price: 100500,
        date: new Date(),
        comment: ''
      },
      {
        title: 'Доширак (острый)',
        price: 123,
        date: new Date(),
        comment: ''
      },
      {
        title: 'Доширак',
        price: 100,
        date: new Date(),
        comment: ''
      }
    ]);
  }
}
