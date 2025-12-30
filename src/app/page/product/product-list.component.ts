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

  products$: Observable<any[]>;

  name = '';
  price!: number;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll();
  }

  addProduct() {
    const product = {
      name: this.name,
      price: this.price
    };

    this.productService.addProduct(product).subscribe({
      next: () => {
        alert('Produto adicionado com sucesso!');
        this.products$ = this.productService.getAll(); // 🔄 recarrega lista
        this.name = '';
        this.price = 0;
      },
      error: () => alert('Erro ao adicionar produto')
    });
  }
}
