import { WidgetTypes } from "./config.types";


export interface Widget {
    id?: number;
    name: string;
    description?: string;
    image?: string;
    type: WidgetTypes
}

export interface WidgetDetails extends Widget {

    config?: WidgetSettings;
}

export interface WidgetSettings {
    title: string;
    subtitle?: string;
    footerText?: string;
    classColor?: string;
    data: {
        url: string;
        external: boolean;
        secure: boolean;
        method: 'POST' | 'GET'
        params?: {[key: string]: any};
        extraHeaders?: {[key: string]: any};
    },
    extractFn?: {
        property?: string;
        count: boolean;
    },
    table?: { // SOlo para Tablas
        columns: {
            key: string;
            label: string;
            font: string;
            colorProp?: string;
            colorMode?: 'dot' | 'chip' | 'font';
        }[];
        customBtn?: {
            text: string;
            action: string;
            useRouter: boolean;
        }
    },
    chart?: {
        colors: {
            fromKey?: boolean;
            random?: boolean;
            key?: string;
            values?: string[];
        };
        series: {
            keyProp: string;
        };
        labels: {
            fromKey: boolean;
            keyProp?: string;
            values?: string[]; 
        };
        total?: {
            keyProp: string;
        };
        extraInfo?: {
            [key: string]: any;
        }

    }
}


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
    }
]


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
            footerText: '',
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
        
    }
]

/**
 * Grafica Versus
 * - title
 * - labels -> string[]
 * - series {
 *  - Nombre
 *  - tipo -> line, column
 *  - color -> string
 * }[]
 */ // 4h

//  {
//     nombre: 'New Issues',
//     data: {
//         lunes: {
//             order: 0,
//             value: 12 
//         }
//     }
//  }

/**
  * TASK DISTRIBUTION 
  * series {
  *     - nombre
  *     - color
  * } // 4h
*/


/**
 * Card simple 2h
 * title, label, 
 */


//Lista -  3h

// Visitors - 5h


// Conversions - 4h

// Visitors vs Page Views - 5h

// Vs Donut - 3h

//Previous Statements - 4h

// Account balance - 5h


// Tabla 1 - 5h
// Tabla 2 - 2h
// List2 - 4h

// Tab budget Budget- 5h

// Weekly Expenses - 2h

// 57 hrs sin filtros
