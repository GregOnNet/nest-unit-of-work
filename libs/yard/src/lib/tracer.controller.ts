import { BaseController } from '@logisto/common';
import { Tracer } from '@logisto/entity';
import { EntityManager } from '@mikro-orm/mongodb';
import { Controller, Post } from '@nestjs/common';

@Controller('tracer')
export class TracerController extends BaseController {
  constructor(em: EntityManager) {
    super(em);
  }

  @Post()
  create() {
    const tracer = new Tracer();

    this.em.create(Tracer, tracer);

    return this.ok();
  }
}
