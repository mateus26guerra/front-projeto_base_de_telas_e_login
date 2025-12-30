import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  products$!: Observable<any[]>; // 👈 só declara

  name = '';
  price!: number;

  constructor(private productService: ProductService) {
    // 👇 agora SIM, o service já existe
    this.products$ = this.productService.products$;
  }

  addProduct() {
    this.productService.addProduct({
      name: this.name,
      price: this.price
    });

    this.name = '';
    this.price = 0;
  }
}
