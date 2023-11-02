import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Apollo } from 'apollo-angular'
import { ActivatedRoute } from '@angular/router'
import { Product } from '@propeller/api/generated/generated-prisma-types'
import { GET_PRODUCT_BY_ID } from 'apps/web/src/graphql/queries/get-product-by-id.query'
import { MatButtonModule } from '@angular/material/button'
import { CartService } from '../../services/cart.service'
@Component({
  selector: 'propeller-product-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  data: Product | null | undefined
  loading = true
  error: any

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  onAddToCart(): void {
    if (this.data)
      this.cartService.addToCart({
        product: this.data?.images?.[0].img ?? '',
        name: this.data.name,
        price: this.data.price,
        quantity: 1,
        id: this.data.id
      })
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id')

      if (productId) {
        this.apollo
          .query({
            query: GET_PRODUCT_BY_ID,
            variables: {
              where: { id: productId }
            }
          })
          .subscribe({
            next: ({ data }: any) => {
              console.log(data?.product?.images?.[0]?.img)
              this.data = data?.product
              this.loading = false
            },
            error: (error) => {
              console.error('Error loading product', error)
              this.loading = false
              this.error = error
            }
          })
      }
    })
  }
}
