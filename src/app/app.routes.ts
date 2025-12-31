import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ProductListComponent } from './page/product/product-list.component';
import { authGuard } from './core/guards/auth-guard';
import { TelaInicial } from './page/tela-inicial/tela-inicial';
import { AddUsuario } from './shared/add-usuario/add-usuario';

export const routes: Routes = [
  { path: '', component: TelaInicial },
  { path: 'login', component: LoginComponent },
  { path: 'products',component: ProductListComponent,canActivate: [authGuard] },
  { path: 'AddUsuario',component: AddUsuario,canActivate: [authGuard] },
  { path: '**',  redirectTo: '' }
];