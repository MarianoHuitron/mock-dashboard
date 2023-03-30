import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigurationDashboard } from './api/config.types';
import { DASH_USER, DB_WIDGETS, DEFAULT_WIDGETS, WidgetsByDashboard } from './api/data';

@Injectable()
export class AppService {

  dashByUser = DASH_USER;
  widgetsList = DEFAULT_WIDGETS;
  widgetsListDetails = DB_WIDGETS;

  getHello(): string {
    return 'Hello World!';
  }



  getDashboardsByUser() {
    return this.dashByUser;
  }    
 
  //  
  update(id: number, body: ConfigurationDashboard) {
    const dash = this.dashByUser.find(dashboard => dashboard.idDashboard === id);
    if(!dash) {
      throw new NotFoundException(`No se encontró dashboard con id ${id}`);
    } 

    const widgets = body.widgets;

    if(widgets.some(w => (w.idDashboardWidget === null || w.idDashboardWidget === undefined))) {

      widgets.map(w => {
        if(!w.idDashboardWidget) {
          w.idDashboardWidget = WidgetsByDashboard.length + 1;
        }
        return w;
      })


    } else {
      this.dashByUser = this.dashByUser.map(d => {
        if(d.idDashboard === dash.idDashboard) {
          d.widgets = widgets;
        }
        return d;
      })
    }

    dash.widgets = widgets;
    return dash;


  }

  getWidgets() {
    return this.widgetsList;
  }

  getWidgetById(id: number) {
    const widget = this.widgetsListDetails.find(w => w.id === id);

    if(!widget) {
      throw new NotFoundException(`No se encontró widget con id ${id}`);
    }

    return widget;
  }


  getTicketsPorStatus() {

    return {
      series: [20, 30, 10, 40],
      labels: ['Nuevo', 'En progreso', 'Pausado', 'Resuelto'],
      colors: ['#ff7979', '#7ed6df', '#30336b', '#f0932b'],
      total: 135
    };

  }
}
