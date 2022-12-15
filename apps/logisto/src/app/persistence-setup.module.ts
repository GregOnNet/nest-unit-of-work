import { Tracer } from '@logisto/entity';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';
import { defineConfig } from '@mikro-orm/mongodb';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Global, Module } from '@nestjs/common';

const mikroOrmMongoDBOptions = defineConfig({
  entities: [Tracer],
  // https://mikro-orm.io/docs/logging#highlighters
  highlighter: new MongoHighlighter(),
  clientUrl: 'mongodb://localhost:27017',
  user: 'root',
  password: 'example',
  dbName: 'logisto',
});

@Global()
@Module({
  imports: [MikroOrmModule.forRoot(mikroOrmMongoDBOptions)],
})
export class PersistenceSetupModule {}
