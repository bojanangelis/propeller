import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql'
import { AuthenticationService } from './authentication.service'
import { LoginInput } from './dto/create-authentication.input'
import { User } from '@propeller/api/generated/generated-prisma-types'
import { UseGuards } from '@nestjs/common'
import { IUserContext } from '../guards/types'
import { GqlAuthGuard } from '../guards/jwt-auth.guard'

@Resolver(() => User)
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  login(
    @Args('loginInput')
    loginInput: LoginInput,
    @Context() context: IUserContext
  ) {
    const { user } = context
    return this.authenticationService.login(user)
  }

  @Mutation(() => User)
  signUp(
    @Args('signUpInput')
    signUpInput: LoginInput
  ) {
    return this.authenticationService.signup(signUpInput)
  }
}
