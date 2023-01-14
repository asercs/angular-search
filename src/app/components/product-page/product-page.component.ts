import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {Observable, tap} from "rxjs";
import {ProductsService} from "../../serives/products.service";
import {ModalService} from "../../serives/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  products: IProduct[] = []
  loading: boolean = false
  products$!: Observable<IProduct[]>
  term: string = ''

  constructor(private productsService: ProductsService, public modalService: ModalService) { }

  ngOnInit(): void {
    this.loading = true

    this.products$ = this.productsService.getAll().pipe(tap(() => this.loading = false))

  }
}
