import { Body, Controller, Post } from '@nestjs/common';
import { CheckAppVersionDto } from './dto/check-version-dto';
import { LiveUpdatesCapacitorService } from './live-updates-capacitor.service';

@Controller('app')
export class LiveUpdatesCapacitorController {
  constructor(private readonly liveUpdatesCapacitorService: LiveUpdatesCapacitorService) {}

  @Post('check-version')
  checkAppVersion(@Body() body: CheckAppVersionDto) {
    return this.liveUpdatesCapacitorService.checkAppVersion(body);
  }

}
