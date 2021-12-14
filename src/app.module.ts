import { Module } from '@nestjs/common'
import { AppController } from './app.controller'

import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { UserModule } from './user/user.module'

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/schema.gql')
        }),
        UserModule
    ],
    controllers: [AppController]
})
export class AppModule {}
