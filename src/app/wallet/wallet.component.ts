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
  }

  onAdd(purchase: Purchase) {
    this.purchasesService.addPurchase(purchase);
    this.onClick();
  }

  onPurchaseClick(index: number) {
    this.currentIndex = this.currentIndex === index
      ? -1
      : index;
  }
}
