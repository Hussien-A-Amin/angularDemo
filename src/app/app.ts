import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert';
import { Shop } from './components/shop/shop';
import { Order } from './components/order/order';
import { SwalWrapper } from './components/swal-wrapper/swal-wrapper';
@Component({
  selector: 'app-root',
  imports: [Header,Footer,RouterOutlet,SwalWrapper],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecomerce');
}
