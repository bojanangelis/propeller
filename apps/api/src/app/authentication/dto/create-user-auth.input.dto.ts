import { InputType, PickType } from '@nestjs/graphql'
import { UserCreateInput } from '@propeller/api/generated/generated-prisma-types'

@InputType()
export class SignUpInput extends PickType(UserCreateInput, ['email', 'password', 'name']) {}
