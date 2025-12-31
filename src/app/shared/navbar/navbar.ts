import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule], // 👈 ADICIONA CommonModule
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public authService: AuthService) {} // 👈 PUBLIC para usar no template

  logout() {
    this.authService.logout();
    location.href = '/'; // 👈 vai pra home (lista pública)
  }
}