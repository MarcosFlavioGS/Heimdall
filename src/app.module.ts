import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './modules/users/users.module'

import { MongooseModule } from '@nestjs/mongoose'

import { isProduction } from '@/helper/environment'
import { RepositoryConfigProvider } from './repository.config.provider'

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: isProduction
    }),
    MongooseModule.forRootAsync({
      useClass: RepositoryConfigProvider
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
