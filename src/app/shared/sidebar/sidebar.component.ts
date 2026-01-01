import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {

  showLogoutModal = false;

  constructor(public authService: AuthService) {}

  abrirLogout() {
    this.showLogoutModal = true;
  }

  cancelarLogout() {
    this.showLogoutModal = false;
  }

  confirmarLogout() {
    this.authService.logout();
    location.href = '/';
  }
}
