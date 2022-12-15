import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Tracer } from './entities';
import { TracerController } from './tracer.controller';

@Module({
  imports: [MikroOrmModule.forFeature([Tracer])],
  controllers: [TracerController],
})
export class YardModule {}
