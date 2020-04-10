import {Component, OnInit} from '@angular/core';
import {Purchase} from '../../shared/interfaces/Purchase';
import {PurchasesService} from './purchases.service';

const data: Purchase[] = [
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
];

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
    this.purchasesService.setPurchases(data);
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
