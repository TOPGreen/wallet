import {Inject, Injectable} from '@angular/core';
import {Purchase} from '../../shared/interfaces/Purchase';
import {IPurchasesApiService, IPurchasesApiServiceToken} from '../../shared/interfaces/IPurchasesApiService';

@Injectable()
export class PurchasesService {
  private purchases: Purchase[] = [];
  private summary = 0;

  constructor(
    @Inject(IPurchasesApiServiceToken)
    private purchaseApiService: IPurchasesApiService
  ) {
  }

  get walletPurchases(): Purchase[] {
    return this.purchases;
  }

  get walletSummary(): number {
    return this.summary;
  }

  initialize() {
    this.purchaseApiService.getAll().subscribe(data => {
      this.setPurchases(data);
    });
  }

  setPurchases(purchases: Purchase[]) {
    this.purchases = purchases;
    this.updateSum();
  }

  addPurchase(purchase: Purchase) {
    this.purchases.push(purchase);
    this.updateSum();
  }

  deletePurchase(index: number) {
    this.purchases.splice(index, 1);
  }

  private updateSum() {
    this.summary = this.purchases.reduce((sum, p) => Number(p.price) + sum, 0);
  }
}
