import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import {
  CreateOneProductArgs,
  DeleteOneProductArgs,
  FindUniqueProductArgs,
  UpdateOneProductArgs
} from '@propeller/api/generated/generated-prisma-types'
import { PrismaService } from '@propeller/data-access-db'

const include: Prisma.ProductInclude = {
  images: true,
  category: true
}

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOneProductArgs: CreateOneProductArgs) {
    return this.prisma.product.create({
      data: createOneProductArgs.data,
      include
    })
  }

  findAll() {
    return this.prisma.product.findMany({ include })
  }

  findOne(findUniqueProductArgs: FindUniqueProductArgs) {
    return this.prisma.product.findUnique({
      where: findUniqueProductArgs.where,
      include
    })
  }

  update(updateOneProductArgs: UpdateOneProductArgs) {
    return this.prisma.product.update({
      where: updateOneProductArgs.where,
      data: updateOneProductArgs.data,
      include
    })
  }

  remove(deleteOneProductArgs: DeleteOneProductArgs) {
    return this.prisma.product.delete({
      where: deleteOneProductArgs.where
    })
  }
}
