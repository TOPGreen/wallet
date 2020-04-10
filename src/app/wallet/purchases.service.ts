import {Injectable} from '@angular/core';
import {Purchase} from '../../shared/interfaces/Purchase';

@Injectable()
export class PurchasesService {
  private purchases: Purchase[] = [];
  private summary = 0;

  get walletPurchases(): Purchase[] {
    return this.purchases;
  }

  get walletSummary(): number {
    return this.summary;
  }

  setPurchases(purchases: Purchase[]) {
    this.purchases = purchases;
    this.updateSum();
  }

  addPurchase(purchase: Purchase) {
    this.purchases.push(purchase);
    this.updateSum();
  }

  private updateSum() {
    this.summary = this.purchases.reduce((sum, p) => Number(p.price) + sum, 0);
  }
}
