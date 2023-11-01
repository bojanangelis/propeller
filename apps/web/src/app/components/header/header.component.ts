import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule } from '@angular/material/badge'
import { MatMenuModule } from '@angular/material/menu'
import { Router, RouterLink } from '@angular/router'
import { Cart, CartItem } from '../../models/cart.model'
import { CartService } from '../../services/cart.service'
import { MatButtonModule } from '@angular/material/button'
import { AccountService } from '../../services/account.service'

@Component({
  selector: 'propeller-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private cartService: CartService,
    private accountService: AccountService,
    private router: Router
  ) {}
  private _cart: Cart = { items: [] }
  isLoggedIn$ = this.accountService.isLoggedIn()

  signOut(): void {
    this.accountService.logout().subscribe(() => {
      this.router.navigate(['/login'])
    })
  }
  itemsQuantity = 0
  @Input()
  get cart(): Cart {
    return this._cart
  }

  set cart(cart: Cart) {
    this._cart = cart
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items)
  }

  onClearCart() {
    this.cartService.onClearCart()
  }
}
