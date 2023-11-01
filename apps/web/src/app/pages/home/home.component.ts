import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatGridListModule } from '@angular/material/grid-list'
import { AppHeaderComponentComponent } from '../components/app-header-component/app-header-component.component'
import { FiltersComponent } from '../components/filters/filters.component'
import { ProductBoxComponent } from '../components/product-box/product-box.component'
import { Product } from '../../models/product.model'
import { CartService } from '../../services/cart.service'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { Apollo } from 'apollo-angular'
import { User } from '@propeller/api/generated/generated-prisma-types'
import { GET_ALL_USERS_GQL } from 'apps/web/src/graphql/queries/get-all-users.query'
import { map } from 'rxjs'

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 }

@Component({
  selector: 'propeller-home',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatGridListModule,
    AppHeaderComponentComponent,
    FiltersComponent,
    ProductBoxComponent,
    MatSnackBarModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // products: Product[] = [];

  cols = 3
  rowHeight = ROWS_HEIGHT[this.cols]
  category: string | undefined
  constructor(private cartService: CartService) {}

  onColumsViewChange(newColsNum: number): void {
    this.cols = newColsNum
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
