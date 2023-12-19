import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-apartment',
  templateUrl: './save-apartment.component.html',
  styleUrls: ['./save-apartment.component.scss'],
})
export class SaveApartmentComponent implements OnInit {
  myForm = new FormGroup({
    apartmentCode: new FormControl(null, [
      Validators.required,
      Validators.min(3),
    ]),
    address: new FormControl(null, Validators.required),
    purchaseDate: new FormControl(null, Validators.required),
    purchaseAmount: new FormControl(null, Validators.required),
    expenses: new FormControl(null, Validators.required),
    saleAmount: new FormControl(null, Validators.required),
    netAmount: new FormControl(null, Validators.required),
    saleDate: new FormControl(null, Validators.required),
  }); // Form Group: Form

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.myForm.get('apartmentCode'));
  }
}
