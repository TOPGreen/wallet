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
    this.purchaseApiService.add(purchase).subscribe(() => {
      this.purchases.push(purchase);
      this.updateSum();
    });
  }

  deletePurchase(index: number) {
    const id = this.purchases[index].id;

    this.purchaseApiService.delete(id).subscribe(() => {
      this.purchases.splice(index, 1);
      this.updateSum();
    });
  }

  editPurchase(index: number, purchase: Purchase) {
    const id = this.purchases[index].id;

    this.purchaseApiService.editByid(id, purchase).subscribe(() => {
      this.purchases[index] = purchase;
      this.updateSum();
    });
  }

  private updateSum() {
    this.summary = this.purchases.reduce((sum, p) => Number(p.price) + sum, 0);
  }
}
