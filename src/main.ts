import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  app.use(
    ['/docs', '/docs-json'],
    basicAuth({
      challenge: true,
      users: {
        andreaslydemann: '3ed4rf#ED€RF',
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Todo API Staging')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory: (controllerKey, methodKey) => methodKey,
  });

  SwaggerModule.setup('/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(process.env.PORT || 4000);
}

bootstrap();
