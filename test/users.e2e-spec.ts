import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { DataSource, getConnection } from 'typeorm';

describe('UserModule (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    const dataSource: DataSource = new DataSource({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
    const connection: DataSource = await dataSource.initialize();
    await connection.dropDatabase();
    await connection.destroy();
    await app.close();
  });

  it.todo('createAccount');
  it.todo('userProfile');
  it.todo('login');
  it.todo('me');
  it.todo('editProfile');
  it.todo('verifyEmail');
});
