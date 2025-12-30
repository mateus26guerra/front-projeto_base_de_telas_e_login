import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ProductListComponent } from './page/product/product-list.component';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
   {
    path: 'products',
    component: ProductListComponent,
    canActivate: [authGuard]
  }
];