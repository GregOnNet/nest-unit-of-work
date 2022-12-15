import { Entity, PrimaryKey } from '@mikro-orm/core';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';
import { defineConfig, ObjectId } from '@mikro-orm/mongodb';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Global, Module } from '@nestjs/common';

@Entity()
class NoopEntity {
  @PrimaryKey()
  _id: ObjectId;
}

const mikroOrmMongoDBOptions = defineConfig({
  entities: [NoopEntity],
  // https://mikro-orm.io/docs/logging#highlighters
  highlighter: new MongoHighlighter(),
  clientUrl: 'mongodb://localhost:27017',
  user: 'root',
  password: 'example',
  dbName: 'logisto',
});

@Global()
@Module({
  imports: [
    MikroOrmModule.forRoot({
      ...mikroOrmMongoDBOptions,
      autoLoadEntities: true,
    }),
  ],
})
export class PersistenceSetupModule {}
