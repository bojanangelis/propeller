import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { GET_ALL_PRODUCTS_GQL } from '../../graphql/queries/get-all-products.query'
import { Observable, catchError, map, throwError } from 'rxjs'
import { Product } from '@propeller/api/generated/generated-prisma-types'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private apollo: Apollo) {}

  fetchProducts(): Observable<Product[]> {
    return this.apollo
      .watchQuery<any>({
        query: GET_ALL_PRODUCTS_GQL,
        context: {
          withCredentials: true
        }
      })
      .valueChanges.pipe(
        map((result) => result.data.products),
        catchError((error) => {
          console.error('Products fetching failed', error)
          return throwError(() => new Error('Products fetching failed'))
        })
      )
  }
}
