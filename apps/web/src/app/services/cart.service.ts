import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private _snackBar: MatSnackBar, private router: Router) {}

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart) itemInCart.quantity += 1;
    else items.push(item);

    this.cart.next({ items });
    const snackBarRef = this._snackBar.open(
      '1 item added to cart.',
      'View Cart',
      { duration: 3000 }
    );

    snackBarRef.onAction().subscribe(() => {
      this.router.navigate(['/cart']);
    });
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  onClearCart(): void {
    this.cart.next({ items: [] });
    const snackBarRefClearCart = this._snackBar.open(
      'Cart is cleared',
      'Close',
      { duration: 3000 }
    );
    snackBarRefClearCart.onAction().subscribe(() => {
      snackBarRefClearCart.dismiss();
    });
  }

  removeFromCart(item: CartItem, updateCart = true): CartItem[] {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );
    if (updateCart) {
      this.cart.next({ items: filteredItems });
      const snackBarRefClearOneItemCart = this._snackBar.open(
        '1 item removed from cart.',
        'Close',
        { duration: 3000 }
      );
      snackBarRefClearOneItemCart.onAction().subscribe(() => {
        snackBarRefClearOneItemCart.dismiss();
      });
    }
    return filteredItems;
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval!: CartItem;

    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }

      return _item;
    });

    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }

    this.cart.next({ items: filteredItems });
    this._snackBar.open('1 item removed from cart.', 'Ok', {
      duration: 3000,
    });
  }
}
