import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ConfigurationDashboard } from './api/config.types';
import { AppService } from './app.service';

@Controller('dashboard')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Put(':id')
  updateDash(@Param('id') id: string, @Body() body: ConfigurationDashboard) {
    return this.appService.update(+id, body);
  }

  @Get('byUser')
  GetByUser() {
    return this.appService.getDashboardsByUser();
  }

  @Get('widgets')
  getWidgets() {
    return this.appService.getWidgets()
  }

  @Get('metric/ticketsByStatus') 
  getMetricTicketByStatus() {
    return this.appService.getTicketsPorStatus();
  }

  @Get('widgets/:id')
  getWidgetById(@Param('id') id: string) {
    return this.appService.getWidgetById(+id);
  }

}
