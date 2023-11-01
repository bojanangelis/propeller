import { Injectable } from '@nestjs/common'
import { LoginInput } from './dto/create-authentication.input'
import { User } from '@propeller/api/generated/generated-prisma-types'
import { UserService } from '../user/user.service'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UserService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({ where: { email } })
    if (!user) return null
    console.log(user)
    console.log(password)
    const x = password === user.password
    console.log(x)
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return null

    return user
  }

  login(user: User) {
    console.log(user)
    return {
      access_token: this.jwtService.sign({
        username: user.name,
        sub: user.id
      }),
      user
    }
  }

  async signup(signUpInput: LoginInput) {
    const { email, password: plainPassword } = signUpInput
    const password = await bcrypt.hash(plainPassword, 10)
    return this.userService.create({ data: { email, password: password } })
  }
}
