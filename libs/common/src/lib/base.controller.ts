import { EntityManager } from '@mikro-orm/mongodb';

export class BaseController {
  constructor(protected readonly em: EntityManager) {}

  ok(): Promise<void> {
    return this.em.flush();
  }
}
