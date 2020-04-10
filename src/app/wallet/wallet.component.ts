import { Component, OnInit } from '@angular/core';

export interface Purchase {
  title: string;
  price: number;
  date: Date;
  comment: string;
}

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
  purchases: Purchase[] = [];
  isAddPurchaseVisible = false;
  summary = 0;
  currentIndex = -1;

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

  onPurchaseClick(index: number) {
    this.currentIndex = this.currentIndex === index
      ? -1
      : index;
  }

  private updateSum() {
    this.summary = this.purchases.reduce((sum, p) => Number(p.price) + sum, 0);
  }

}
