import { Module } from '@nestjs/common';
import { TracerController } from './tracer.controller';

@Module({
  controllers: [TracerController],
})
export class YardModule {}
