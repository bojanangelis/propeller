import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ProductService } from './product.service'
import {
  CreateOneProductArgs,
  DeleteOneProductArgs,
  FindUniqueProductArgs,
  Product,
  ProductWhereUniqueInput,
  UpdateOneProductArgs
} from '@propeller/api/generated/generated-prisma-types'

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  createProduct(@Args() createOneProductArgs: CreateOneProductArgs) {
    return this.productService.create(createOneProductArgs)
  }

  @Query(() => [Product])
  products() {
    return this.productService.findAll()
  }

  @Query(() => Product, { name: 'product' })
  product(@Args('where') productWhereUniqueInput: ProductWhereUniqueInput) {
    return this.productService.findOne(productWhereUniqueInput)
  }

  @Mutation(() => Product)
  updateProduct(@Args() updateOneProductArgs: UpdateOneProductArgs) {
    return this.productService.update(updateOneProductArgs)
  }

  @Mutation(() => Product)
  removeProduct(@Args() deleteOneProductArgs: DeleteOneProductArgs) {
    return this.productService.remove(deleteOneProductArgs)
  }
}
