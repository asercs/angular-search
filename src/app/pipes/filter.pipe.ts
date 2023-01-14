import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../models/product";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
  }

}
