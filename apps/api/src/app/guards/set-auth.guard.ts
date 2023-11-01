import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { JwtService } from '@nestjs/jwt'
import { GqlExecutionContext } from '@nestjs/graphql'

const domain = process.env.WEB_APP_HOST
const jwtExpiresSecond = process.env.JWT_EXPIRES_SECONDS

const HTTP_ONLY_COOKIE = {
  maxAge: Number(jwtExpiresSecond) * 1000, // in milliseconds
  httpOnly: true,
  domain
}

@Injectable()
export class SetAuthGuard extends AuthGuard('local') {
  constructor(private jwtService: JwtService) {
    super()
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    const { req, res } = ctx.getContext()
    req.body = ctx.getArgs().loginInput
    return req
  }

  handleRequest(err, user, info, context, status) {
    const ctx = GqlExecutionContext.create(context)
    const { res } = ctx.getContext()

    if (err || !user || info) {
      throw err || new UnauthorizedException()
    }

    const jwtExpiresMs = Number(jwtExpiresSecond) * 1000
    const tokenExpires = Date.now() + jwtExpiresMs
    const accessToken = this.jwtService.sign({ sub: user.id })

    res.cookie('token', accessToken, HTTP_ONLY_COOKIE)
    res.cookie('token-expires', tokenExpires.toString())

    return user
  }
}
