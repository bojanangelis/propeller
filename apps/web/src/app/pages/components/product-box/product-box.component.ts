import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { Product } from '@propeller/api/generated/generated-prisma-types'
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'propeller-product-box',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, RouterLink],
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false
  @Input() product: Product | undefined
  @Output() addToCart = new EventEmitter()
  constructor(private router: Router) {}
  onAddToCart(): void {
    console.log('clicked')
    this.addToCart.emit(this.product)
  }
  onCardClick() {
    if (this.product && this.product.id) {
      this.router.navigate(['/products', this.product.id])
    }
  }
}
