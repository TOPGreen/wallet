import {Component, Input, OnInit} from '@angular/core';
import {Purchase} from '../wallet.component';

@Component({
  selector: 'app-purchase-preview',
  templateUrl: './purchase-preview.component.html',
  styleUrls: ['./purchase-preview.component.scss']
})
export class PurchasePreviewComponent implements OnInit {
  @Input()
  purchase: Purchase;

  constructor() {
  }

  ngOnInit(): void {
  }

}
