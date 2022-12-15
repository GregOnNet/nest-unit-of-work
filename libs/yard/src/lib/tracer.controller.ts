import { BaseController } from '@logisto/common';
import { EntityManager } from '@mikro-orm/mongodb';
import { Controller, Post } from '@nestjs/common';
import { Tracer } from './entities';

@Controller('tracer')
export class TracerController extends BaseController {
  constructor(em: EntityManager) {
    super(em);
  }

  @Post()
  async create() {
    const tracer = new Tracer();

    this.em.create(Tracer, tracer);

    return this.ok();
  }
}
