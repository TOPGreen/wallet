import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Purchase} from '../../../shared/interfaces/Purchase';

@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrls: ['./purchase-add.component.scss']
})
export class PurchaseAddComponent implements OnInit {
  readonly priceControlName = 'price';

  @Output()
  add = new EventEmitter<Purchase>();

  // FormBuilder
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    [this.priceControlName]: new FormControl(100, [
      Validators.required, Validators.min(1), Validators.max(200000), Validators.pattern(/^\d+$/)
    ]),
    date: new FormControl(),
    comment: new FormControl('')
  });

  constructor() {
  }

  get priceControl(): FormControl {
    return this.form.get(this.priceControlName) as FormControl;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.add.emit(this.form.value);
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
