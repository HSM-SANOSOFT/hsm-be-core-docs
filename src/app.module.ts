import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DocumentosRecibidosModule } from './documentos_recibidos/documetos-recibidos.module';

@Module({
  imports: [DatabaseModule, DocumentosRecibidosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
