import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './modules/users/users.module'

import { isProduction } from '@/helper/environment'

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: isProduction
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
