/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import cookieParser from 'cookie-parser'
import { AppModule } from './app/app.module'
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify'
import fastifyCookie from '@fastify/cookie'
import cors from '@fastify/cors'
import Fastify from 'fastify'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      skipMissingProperties: true
      // forbidUnknownValues: true,
      // exceptionFactory: (errors: ValidationError[]) => {
      //   const errorrsMessages = errors.map((error) => Object.values(error.constraints))
      //   return new BadRequestException(errorrsMessages)
      // }
    })
  )
  app.register(fastifyCookie, { secret: process.env.COOKIE_SECRET })
  // app.enableCors({ origin: true })
  app.enableCors({
    origin: true,
    credentials: true
  })

  const globalPrefix = 'graphiql'
  app.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT || 3000
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

bootstrap()
