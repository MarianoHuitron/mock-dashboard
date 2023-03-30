import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiveUpdatesCapacitorModule } from './live-updates-capacitor/live-updates-capacitor.module';

@Module({
  imports: [LiveUpdatesCapacitorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
