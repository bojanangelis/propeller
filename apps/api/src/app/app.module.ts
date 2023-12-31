import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { UserModule } from './user/user.module'
import { AuthenticationModule } from './authentication/authentication.module'
import * as path from 'node:path'
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius'
import { ProductModule } from './product/product.module'

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: path.join(__dirname, './autogenerated-schema.gql'),
      graphiql: true
    }),
    UserModule,
    AuthenticationModule,
    ProductModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
