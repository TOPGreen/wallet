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
        id: 1,
        title: 'Проезд на метро',
        price: 40,
        date: new Date(),
        comment: ''
      },
      {
        id: 2,
        title: 'Iphone XXL',
        price: 100500,
        date: new Date(),
        comment: ''
      },
      {
        id: 3,
        title: 'Доширак (острый)',
        price: 123,
        date: new Date(),
        comment: ''
      },
      {
        id: 4,
        title: 'Доширак',
        price: 100,
        date: new Date(),
        comment: ''
      }
    ]);
  }

  edit(entity: Purchase): Observable<void> {
    return undefined;
  }
}
