import { YardModule } from '@logisto/yard';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersistenceSetupModule } from './persistence-setup.module';

@Module({
  imports: [PersistenceSetupModule, YardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
