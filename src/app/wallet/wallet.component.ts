import {Component, OnInit} from '@angular/core';
import {Purchase} from '../../shared/interfaces/Purchase';
import {PurchasesService} from './purchases.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  isAddPurchaseVisible = false;
  currentIndex = -1;
  currentPurchase = null;

  constructor(private purchasesService: PurchasesService) {
  }

  get purchases(): Purchase[] {
    return this.purchasesService.walletPurchases;
  }

  get summary(): number {
    return this.purchasesService.walletSummary;
  }

  ngOnInit(): void {
    this.purchasesService.initialize();
  }

  onClick() {
    this.isAddPurchaseVisible = !this.isAddPurchaseVisible;
    this.currentPurchase = null;
  }

  onAdd(purchase: Purchase) {
    this.purchasesService.addPurchase(purchase);
    this.onClick();
  }

  onEdit(purchase: Purchase) {
    this.purchasesService.editPurchase(purchase.id, purchase);
  }


  onPurchaseClick(index: number) {
    this.currentIndex = this.currentIndex === index
      ? -1
      : index;
  }

  onPurchaseDelete(index: number) {
    this.purchasesService.deletePurchase(index);
  }

  onPurchaseEdit(index: number, purchase: Purchase) {
    this.isAddPurchaseVisible = true;
    purchase.id = index;
    this.currentPurchase = purchase;
  }
}
