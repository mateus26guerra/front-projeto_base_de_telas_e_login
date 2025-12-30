import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { ProductService, Product } from '../../service/product.service';

@Component({
  selector: 'app-lista-de-produto',
  imports: [CommonModule],
  templateUrl: './lista-de-produto.html',
  styleUrl: './lista-de-produto.css',
})
export class ListaDeProduto {

  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.products$;
    this.productService.loadPublicProducts();
  }
}
