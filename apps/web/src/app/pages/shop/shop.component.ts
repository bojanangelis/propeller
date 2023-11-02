import { Component, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatGridListModule } from '@angular/material/grid-list'
import { AppHeaderComponentComponent } from '../components/app-header-component/app-header-component.component'
import { FiltersComponent } from '../components/filters/filters.component'
import { ProductBoxComponent } from '../components/product-box/product-box.component'
import { CartService } from '../../services/cart.service'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { StoreService } from '../../services/store.service'
import { Product } from '@propeller/api/generated/generated-prisma-types'

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
  templateUrl: './shop.component.html'
})
export class HomeComponent implements OnInit {
  cols = 3
  rowHeight = ROWS_HEIGHT[this.cols]
  category: string | undefined
  products: Product[] | undefined = []

  constructor(private cartService: CartService, private storeService: StoreService) {}

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.storeService.fetchProducts().subscribe(
      (products) => {
        this.products = products
        console.log(this.products)
      },
      (error) => console.error('Error fetching products:', error)
    )
  }

  onColumsViewChange(newColsNum: number): void {
    this.cols = newColsNum
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory
  }
  onAddToCart(product: Product): void {
    console.log(product)
    this.cartService.addToCart({
      product: product.name,
      name: product.name,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
