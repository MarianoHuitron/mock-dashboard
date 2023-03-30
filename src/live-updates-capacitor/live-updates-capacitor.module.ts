import { Module } from '@nestjs/common';
import { LiveUpdatesCapacitorService } from './live-updates-capacitor.service';
import { LiveUpdatesCapacitorController } from './live-updates-capacitor.controller';

@Module({
  controllers: [LiveUpdatesCapacitorController],
  providers: [LiveUpdatesCapacitorService]
})
export class LiveUpdatesCapacitorModule {}
