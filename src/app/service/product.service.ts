import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  name: string;
  price: number;
  imagemUrl: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {

  private API_PRIVADA = 'http://localhost:8080/products';
  private API_PUBLICA = 'http://localhost:8080/productsPublico';

  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  // 🔓 LISTA PÚBLICA (SEM TOKEN)
  loadPublicProducts() {
    this.http
      .get<Product[]>(`${this.API_PUBLICA}/list`)
      .subscribe(products => {
        this.productsSubject.next(products);
      });
  }

  // 🔒 LISTA PRIVADA (COM TOKEN)
  loadPrivateProducts() {
    this.http
      .get<Product[]>(this.API_PRIVADA)
      .subscribe(products => {
        this.productsSubject.next(products);
      });
  }

  addProduct(product: Product) {
    this.http
      .post(`${this.API_PRIVADA}/add_products`, product)
      .subscribe(() => {
        this.loadPrivateProducts();
      });
  }
}
