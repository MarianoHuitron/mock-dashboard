import { ConfigurationDashboard, WidgetsConfigDashboard, WidgetTypes } from "./config.types";
import { Widget, WidgetDetails } from "./widget.types";


export const DB_WIDGETS : WidgetDetails[] = [
    {
        id: 1,
        name: 'Tarjeta de bienvenida',
        description: 'Muestra una tarjeta con mensaje de bienvenida al usuario de la sesión',
        type: WidgetTypes.WELCOME_CARD
    },
    {
        id: 2,
        name: 'Tickets pendientes',
        description: 'Muestra el número de tickets pendientes',
        type: WidgetTypes.CUSTOM_CARD_1,
        config: {
            title: 'Pendientes',
            subtitle: 'Tickets',
            footerText: 'Por atender',
            classColor: 'red',
            data: {
                url: '/tickets/find',
                external: false,
                secure: true,
                method: 'POST',
                params: { 
                    openTickets: false,
                    size: 1,
                    orderColumn: 'createdDate',
                    orderType: 'desc',
                    statusList: ['Asignado', 'Nuevo', 'Pausado', 'En progreso']
                }
            },
            extractFn: {
                property: 'totalElements',
                count: false
            }
        },
        
    },
    {
        id: 3,
        name: 'Tickets finalizados',
        description: 'Muestra el número de tickets finalizados',
        type: WidgetTypes.CUSTOM_CARD_1,
        config: {
            title: 'Finalizados',
            subtitle: 'Tickets',
            footerText: '',
            classColor: 'green',
            data: {
                url: '/tickets/find',
                external: false,
                secure: true,
                method: 'POST',
                params: { 
                    openTickets: false,
                    size: 1,
                    orderColumn: 'createdDate',
                    orderType: 'desc',
                    statusList: ['Resuelto', 'Cerrado']
                }
            },
            extractFn: {
                property: 'totalElements',
                count: false
            }
        },
        
    },
    {
        id: 4,
        name: 'Usuarios Registrados',
        description: 'Muestra el número de usuarios registrados',
        type: WidgetTypes.CUSTOM_CARD_1,
        config: {
            title: 'Usuarios Registrados',
            subtitle: 'Usuarios',
            footerText: '',
            classColor: 'green',
            data: {
                url: '/users/list',
                external: false,
                secure: true,
                method: 'POST',
                params: { 
                    openTickets: false,
                    size: 1,
                    orderColumn: 'name',
                    orderType: 'desc',
                }
            },
            extractFn: {
                property: 'totalElements',
                count: false
            }
        },
        
    },
    {
        id: 5,
        name: 'Tabla de tickets',
        description: 'Muestra tabla de tickets',
        type: WidgetTypes.CUSTOM_TABLE_1,
        config: {
            title: 'Tickets recientes',
            subtitle: '',
            footerText: '',
            classColor: '',
            data: {
                url: '/tickets/find',
                external: false,
                secure: true,
                method: 'POST',
                params: { 
                    openTickets: false,
                    size: 10,
                    orderColumn: 'idTicket',
                    orderType: 'desc',
                }
            },
            extractFn: {
                property: 'content',
                count: false
            },
            table: {
                columns: [
                    {key: 'summary', label: 'Nombre', font: 'font-normal'},
                    {key: 'folio', label: 'Folio', font: 'font-semibold'},
                    {key: 'customerData.nameComplete', label: 'Cliente', font: 'font-normal'},
                    {key: 'ticketCategory.categoryName', label: 'Categoría', font: 'font-normal', colorProp: 'ticketCategory.color', colorMode: 'font'},
                    {key: 'ticketStatusValue', label: 'Estatus', font: 'font-normal'},
                ],
                customBtn: {
                    text: 'Ver todos',
                    action: '/tickets',
                    useRouter: true
                }
            }
        },
    },
    {
        id: 6,
        name: 'Pie Chart',
        description: '',
        type: WidgetTypes.PIE_CHART,
        config: {
            title: 'Tickets por estatus',
            data: {
                url: 'http://localhost:3000/v1/api/dashboard/metric/ticketsByStatus',
                external: true,
                secure: false,
                method: 'GET',
            },
            chart: {
                colors: {
                    fromKey: true,
                    random: false,
                    key: 'colors',
                    values: ['#ff7979', '#7ed6df', '#30336b', '#f0932b']
                },
                series: {
                    keyProp: 'series'
                },
                labels: {
                    keyProp: 'labels',
                    fromKey: true,
                    values: ['Nuevo', 'En progreso', 'Pendientes', 'Finalizados']
                },
                total: {
                    keyProp: 'total'
                }
            }
        }
    },
    {
        id: 7,
        name: 'Radar Chart',
        description: '',
        type: WidgetTypes.RADAR_CHART,
        config: {
            title: 'Ejemplo Chart',
            data: {
                url: 'http://localhost:3000/v1/api/dashboard/metric/ticketsByStatus',
                external: true,
                secure: false,
                method: 'GET',
            },
            chart: {
                colors: {
                    fromKey: true,
                    random: false,
                    key: 'colors',
                    values: ['#ff7979', '#7ed6df', '#30336b', '#f0932b']
                },
                labels: {
                    keyProp: 'labels',
                    fromKey: true,
                    values: ['Nuevo', 'En progreso', 'Pendientes', 'Finalizados']
                },
                series: {
                    keyProp: 'series'
                },
                extraInfo: {
                    completados: {
                        keyProp: 'completed',
                        label: 'Completados',
                    }
                }
            }
        }
    }
];

export const DEFAULT_WIDGETS: Widget[] = [
    {
        id: 1,
        name: 'Tarjeta de bienvenida',
        description: 'Muestra una tarjeta con mensaje de bienvenida al usuario de la sesión',
        type: WidgetTypes.WELCOME_CARD
    },
    {
        id: 2,
        name: 'Tickets pendientes',
        description: 'Muestra el número de tickets pendientes',
        type: WidgetTypes.CUSTOM_CARD_1
    },
    {
        id: 3,
        name: 'Tickets finalizados',
        description: 'Muestra el número de tickets finalizados',
        type: WidgetTypes.CUSTOM_CARD_1
    },
    {
        id: 4,
        name: 'Usuarios registrados',
        description: 'Muestra el número de usuarios registrados en la aplicación',
        type: WidgetTypes.CUSTOM_CARD_1
    },
    {
        id: 5,
        name: 'Tabla de tickets',
        description: 'Muestra tabla de tickets recientes',
        type: WidgetTypes.CUSTOM_TABLE_1,
    },
    {
        id: 6,
        name: 'Pie Chart',
        description: '',
        type: WidgetTypes.WELCOME_CARD
    },
    {
        id: 7,
        name: 'Radar Chart',
        description: '',
        type: WidgetTypes.RADAR_CHART
    }
]

export interface WidgetsByDash {

}

export const WidgetsByDashboard: WidgetsConfigDashboard[] = [
    {
        idDashboard: 1,
        idDashboardWidget: 1,
        idWidget: DB_WIDGETS[0].id,
        item: DB_WIDGETS[0],
        cols: 2,
        rows: 1,
        x: 0,
        y: 0
    },
    {
        idDashboard: 1,
        idDashboardWidget: 2,
        idWidget: DB_WIDGETS[1].id,
        item: DB_WIDGETS[1],
        cols: 1,
        rows: 1,
        x: 0,
        y: 1
      },
      {
        idDashboard: 1,
        idDashboardWidget: 3,
        idWidget: DB_WIDGETS[2].id,
        item: DB_WIDGETS[2],
        cols: 1,
        rows: 1,
        x: 1,
        y: 1
      },
      {
        idDashboard: 2,
        idDashboardWidget: 4,
        idWidget: DB_WIDGETS[1].id,
        item: DB_WIDGETS[1],
        cols: 1,
        rows: 1,
        x: 0,
        y: 0
    },
    {
        idDashboard: 2,
        idDashboardWidget: 5,
        idWidget: DB_WIDGETS[2].id,
        item: DB_WIDGETS[2],
        cols: 1,
        rows: 1,
        x: 1,
        y: 0
    },
    {
        idDashboard: 2,
        idDashboardWidget: 6,
        idWidget: DB_WIDGETS[3].id,
        item: DB_WIDGETS[3],
        cols: 2,
        rows: 1,
        x: 0,
        y: 1
    },
]


export const DASH_USER: ConfigurationDashboard[] = [
    {
        idDashboard: 1,
        dashboardName: 'Dashboard Admin',
        dashboardDescription: 'Dashboard diseñado para administrador del sistema',
        groups: [

        ],
        profiles: [

        ],
        users: [

        ],
        widgets: WidgetsByDashboard.filter(dw => dw.idDashboard === 1)
    },
    {
        idDashboard: 2,
        dashboardName: 'Dashboard agente',
        dashboardDescription: 'Dashboard diseñado para un agente',
        groups: [

        ],
        profiles: [

        ],
        users: [

        ],
        widgets: WidgetsByDashboard.filter(dw => dw.idDashboard === 2)
    }
]

// "cols": 9227110,
// "description": "adipisicing ut",
// "idWidget": -75045980,
// "name": "nisi dolore laboris",
// "rows": -44323166,
// "type": "in ut",
// "x": 7937614,
// "y": -60647393,
// "config": {},
// "active": false