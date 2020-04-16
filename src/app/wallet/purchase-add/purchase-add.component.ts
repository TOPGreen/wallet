import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Purchase} from '../../../shared/interfaces/Purchase';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrls: ['./purchase-add.component.scss']
})
export class PurchaseAddComponent implements OnInit, OnChanges {
  readonly priceControlName = 'price';

  @Output()
  add = new EventEmitter<Purchase>();

  @Output()
  edit = new EventEmitter<Purchase>();

  @Input()
  editIndex: number;

  @Input()
  currentPurchase: Purchase;

  // FormBuilder
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    [this.priceControlName]: new FormControl(100, [
      Validators.required, Validators.min(1), Validators.max(200000), Validators.pattern(/^\d+$/)
    ]),
    date: new FormControl(),
    comment: new FormControl('')
  });

  constructor(private datePipe: DatePipe) {
  }

  get priceControl(): FormControl {
    return this.form.get(this.priceControlName) as FormControl;
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.currentPurchase) {
      const date = this.currentPurchase.date ? this.currentPurchase.date : new Date(Date.now());

      this.form.patchValue(
        {
          title: this.currentPurchase.title,
          price: this.currentPurchase.price,
          date: this.datePipe.transform(date, 'yyyy-MM-dd'),
          comment: this.currentPurchase.comment
        }
      );
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const result = this.form.value;
    result.date = result.date ? result.date : new Date(Date.now());

    if (this.currentPurchase) {
      // this.currentPurchase.title = result.title;
      // this.currentPurchase.price = result.price;
      // this.currentPurchase.date = result.title;
      // this.currentPurchase.comment = result.comment;
      this.edit.emit(Object.assign(this.currentPurchase, result), );
      return;
    }
    this.add.emit(result);
  }

  getError(controlName: string): string {
    const control = this.form.get(controlName);
    const errors = control.errors;

    if (!errors) {
      return '';
    }

    if (errors.min) {
      return `минимальное значение - ${errors.min.min}`;
    }

  }

}
