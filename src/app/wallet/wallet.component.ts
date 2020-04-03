import { Component, OnInit } from '@angular/core';

export interface Purchase {
  title: string;
  price: number;
}

const data: Purchase[] = [
  {
    title: 'Проезд на метро',
    price: 40
  },
  {
    title: 'Iphone XXL',
    price: 100500
  },
  {
    title: 'Доширак (острый)',
    price: 123
  },
  {
    title: 'Доширак',
    price: 100
  }
];

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  purchases: Purchase[] = [];
  isAddPurchaseVisible = false;
  summary = 0;

  constructor() { }

  ngOnInit(): void {
    this.purchases = data;
    this.updateSum();
  }

  onClick() {
    this.isAddPurchaseVisible = !this.isAddPurchaseVisible;
  }

  onAdd(purchase: Purchase) {
    this.purchases.push(purchase);
    this.onClick();
    this.updateSum();
  }

  private updateSum() {
    this.summary = this.purchases.reduce((sum, p) => Number(p.price) + sum, 0);
  }

}
