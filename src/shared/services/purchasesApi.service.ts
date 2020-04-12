import {IPurchasesApiService} from '../interfaces/IPurchasesApiService';
import {Purchase} from '../interfaces/Purchase';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const host = 'http://tfs';

@Injectable()
export class PurchasesApiService implements IPurchasesApiService {
  constructor(private httpClient: HttpClient) {
  }

  add(entity: Purchase): Observable<void> {
    return this.httpClient.post<void>(`${host}`, entity);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${host}/${id}`);
  }

  getAll(): Observable<Purchase[]> {
    return this.httpClient.get<Purchase[]>(`${host}`);
  }

  editByid(id: number, entity: Purchase): Observable<void> {
    return this.httpClient.put<void>(`${host}/${id}`, entity);
  }
}
