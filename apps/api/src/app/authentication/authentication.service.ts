import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'

import * as bcrypt from 'bcrypt'
import { User } from '@prisma/client'
import { LoginInput } from './dto/authentication.input.dto'
import { UserCreateInput } from '@propeller/api/generated/generated-prisma-types'
import { SignUpInput } from './dto/create-user-auth.input.dto'

@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({ where: { email } })
    if (!user) return null

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return null

    return user
  }

  login(user: User) {
    return user
  }

  async signUp(signUpInput: SignUpInput) {
    const { email, password: plainPassword, name, address, role } = signUpInput
    const password = await bcrypt.hash(plainPassword, 10)
    console.log(signUpInput)
    return this.userService.create({ data: { email, password, name, address, role } })
  }
}
