/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import cookieParser from 'cookie-parser'

import { AppModule } from './app/app.module'
import { ValidationError } from 'class-validator'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
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
  app.enableCors({ origin: true })
  app.use(cookieParser())

  const globalPrefix = 'graphql'
  app.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT || 3000
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

bootstrap()
