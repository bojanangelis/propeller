import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Cart, CartItem } from '../../models/cart.model'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { RouterLink } from '@angular/router'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { CartService } from '../../services/cart.service'
import { HttpClient } from '@angular/common/http'
// import { loadStripe } from '@stripe/stripe-js' WIP

@Component({
  selector: 'propeller-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: []
  }
  dataSource: Array<CartItem> = []
  displayedColumns: Array<string> = ['product', 'name', 'price', 'quantity', 'total', 'action']

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    this.dataSource = this.cart.items
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart
      this.dataSource = _cart.items
    })
  }

  onRemoveQuantity(element: CartItem): void {
    this.cartService.removeQuantity(element)
  }

  onAddQuantity(element: CartItem): void {
    this.cartService.addToCart(element)
  }

  onClearCart() {
    this.cartService.onClearCart()
  }

  onRemoveFromCart(element: CartItem): void {
    this.cartService.removeFromCart(element)
  }

  onCheckout() {}
  // onCheckout(): void {
  //   this.http
  //     .post('http://localhost:4242/checkout', {
  //       items: this.cart.items
  //     })
  //     .subscribe(async (res: any) => {
  //       let stripe = await loadStripe(process.env['STRIPE_PUBLIC_KEY']!)
  //       stripe?.redirectToCheckout({
  //         sessionId: res.id
  //       })
  //     })
  // }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items)
  }
}
