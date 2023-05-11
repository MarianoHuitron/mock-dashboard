import { Module } from '@nestjs/common';
import { DashboardRppcController } from './app-dashboard-rppc.controlerr';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiveUpdatesCapacitorModule } from './live-updates-capacitor/live-updates-capacitor.module';

@Module({
  imports: [LiveUpdatesCapacitorModule],
  controllers: [AppController, DashboardRppcController],
  providers: [AppService],
})
export class AppModule {}
