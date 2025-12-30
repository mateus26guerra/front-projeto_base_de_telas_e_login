import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private API = 'http://localhost:8080/products';

  private productsSubject = new BehaviorSubject<any[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadProducts(); // 🔥 carrega ao iniciar
  }

  private loadProducts() {
    this.http.get<any[]>(this.API).subscribe({
      next: products => this.productsSubject.next(products),
      error: err => console.error('Erro ao carregar produtos', err)
    });
  }

  addProduct(product: { name: string; price: number }) {
    return this.http.post(`${this.API}/add_products`, product).subscribe({
      next: () => this.loadProducts(), // 🔄 atualiza lista
      error: err => console.error('Erro ao adicionar produto', err)
    });
  }
}
