import { WidgetDetails } from "./widget.types";

export enum WidgetTypes {
    WELCOME_CARD = 'WELCOME_CARD',
    CUSTOM_CARD_1 = 'CUSTOM_CARD_1',
    CUSTOM_TABLE_1 = 'CUSTOM_TABLE_1',
    PIE_CHART = 'PIE_CHART',
    RADAR_CHART = 'RADAR_CHART',
}

export const MIN_CORDS_BY_WIDGET = {
    WELCOME_CARD: {cols: 3, rows: 1, x: 0, y: 0},
    CUSTOM_CARD_1: {cols: 1, rows: 1, x: 0, y: 0},
    RADAR_CHART: {cols: 1, rows: 1, x: 0, y: 0}
}



export interface ConfigurationDashboard {
    tabs?: TabsDashboard[];
    widgets: WidgetsConfigDashboard[];
    dashboardName: string;
    dashboardDescription?: string;
    idDashboard: number;
    profiles?: any[];
    groups?: any[];
    permissions?: string[];
    users?: any[];
}

export interface WidgetsConfigDashboard {
    idDashboard: number;
    idDashboardWidget?: number;
    type?: WidgetTypes;
    tabId?: number;
    // coords?: DashboardCoords;
    idWidget?: number;
    item?: WidgetDetails;
    cols: number;
    rows: number;
    x: number;
    y: number;
    [prop: string]: any;
}

export interface TabsDashboard {
    label: string;
    id: number;
}


export interface DashboardCoords {
    cols: number;
    rows: number;
    x: number;
    y: number;
    [prop: string]: any;
}

export const DASHBOARD: ConfigurationDashboard = {
    dashboardName: 'Dashboard Administrador',
    idDashboard: 1,
    tabs: [],
    widgets: []
}


/**
 *  DASHBOARD
 * - idDashboard
 * - dashboardName
 * - createdDate
 * - profile
 * - permission
 * - groups
 * - user
 */
