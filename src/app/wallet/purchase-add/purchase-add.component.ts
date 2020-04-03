import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Purchase} from '../wallet.component';

@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrls: ['./purchase-add.component.scss']
})
export class PurchaseAddComponent implements OnInit {
  @Output()
  add = new EventEmitter<Purchase>();

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    price: new FormControl(100)
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.add.emit(this.form.value);
  }

}
