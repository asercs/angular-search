import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../serives/products.service";
import {ModalService} from "../../serives/modal.service";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent {
  constructor(private productsService: ProductsService, private modalService: ModalService) { }

  form = new FormGroup(
    {
      title: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    }
  )

  get error() {
    return this.form.controls.title as FormControl
  }

  submit() {
    console.log(this.form.value)
    this.productsService.create({
      title: this.form.value.title as string,
      price: 200,
      description: 'test',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      category: 'test',
      rating: {
        rate: 4.5,
        count: 100
      }
      }
    ).subscribe(()=> this.modalService.close())
  }

}
