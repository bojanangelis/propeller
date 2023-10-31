import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { GET_ALL_USERS_GQL } from '../graphql/queries/get-all-users.query';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterModule, HttpClientModule, CommonModule],
  selector: 'propeller-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };

  users: any[] = [];
  error: any;
  loading: boolean = true;

  constructor(private apollo: Apollo, private cartService: CartService) {}

  loadAllUsers() {
    this.apollo
      .watchQuery({
        query: GET_ALL_USERS_GQL,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.loading = false;
        this.error = error;
        this.users = data.users;
      });
  }
  // this.loadAllUsers();
  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
