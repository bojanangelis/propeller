import { Injectable } from '@nestjs/common';
import { PrismaService } from '@propeller/data-access-db';
import {
  CreateOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
} from '@propeller/api/generated/generated-prisma-types';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findOne(findUserArgs: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(findUserArgs);
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  create(userCreateArgs: CreateOneUserArgs) {
    return this.prisma.user.create(userCreateArgs);
  }

  update(userUpdateInput: UpdateOneUserArgs) {
    return this.prisma.user.update(userUpdateInput);
  }

  remove(removeUserArgs: FindUniqueUserArgs) {
    return this.prisma.user.delete(removeUserArgs);
  }
}
