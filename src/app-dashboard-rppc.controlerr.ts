import { folio, folios, bitacora, imagesByFolioDoc, imageById, newResults } from './api/data-rppc';
import { SearchOptionsDto } from './shared/dtos/search-options.dto';
import { BadRequestException, Controller, Get, InternalServerErrorException, Put, Query } from "@nestjs/common";
import { Response } from 'express';


@Controller('dashboard-rppc')
export class DashboardRppcController {

    isBlocked: boolean = false;
    isSellado: boolean = false;

    @Get('documento/dashboard/contenido-observaciones')
    getContenidoObservaciones(@Query() params: SearchOptionsDto) {
            return {
                totalRango: 1233,
                totalAnterior: 0
            }
    }

    @Get('documento/dashboard/incidencias-observaciones')
    getContenidoIncidenciasObservaciones(@Query() params: SearchOptionsDto, res: Response) {
        return {
            totalRango: 112,
            totalAnterior: 0
        }
    }

    @Get('documento/dashboard/documentos-libros-bloqueados')
    getContenidoDocsBloqueados(@Query() params: SearchOptionsDto, res: Response) {
        return {
            totalRango: 234,
            totalAnterior: 0
        }
    }

    @Get('documento/dashboard/documentos-imagenes-sellados')
    getContenidoSellados(@Query() params: SearchOptionsDto, res: Response) {
        return {
            totalRango: 355,
            totalAnterior: 0
        }
    }


    @Get('documento/dashboard/documentos-impresos-descargados')
    getContenidoImpresosDescargados(@Query() params: SearchOptionsDto, res: Response) {
        return {
            totalRango: 4632,
            totalAnterior: 0
        }
    }

    @Get('documento/dashboard/folios-ids-consultados')
    getContenidoIdsConsultados(@Query() params: SearchOptionsDto, res: Response) {
        return {
            totalRango: 1432,
            totalAnterior: 0
        }
    }

    @Get('documento/dashboard/libros-documentos-consultados')
    getContenidoLibrosConsultados(@Query() params: SearchOptionsDto, res: Response) {
        return {
            totalRango: 3433,
            totalAnterior: 0
        }
    }

    @Get('documento/actividad/busqueda-folio')
    getBusquedaFolio(@Query() params: SearchOptionsDto) {
        if(params.folio === '02P1C0097400') {
            return {
                content: [
                    newResults.content[0]
                ], 
                numberOfElements: 1,
                "last": false,
                "number": 0,
                "size": 10,
                "totalElements": 879,
                "totalPages": 22,
            }
        } else if(params.folio === 'XXXXXX') {
            return {content: [], numberOfElements: 0}
        } else if(params.folio === 'ERR') {
            throw new BadRequestException('Error');
        }
        return newResults;
    }

    @Get('log-acceso/search')
    searchBitacora(@Query() params: SearchOptionsDto) {
        return bitacora;
    }

    @Get('documento/actividad/lista-imagenes-folio')
    getImages(@Query() params: any) {
        return imagesByFolioDoc;
    }

    @Get('/documento/actividad/folio-imagen')
    getImageB64(@Query() params: any) {
        return this.returnImage(params.alfrescoId)
    }

    @Get('documento/actividad/:libro/cierre/:doc') 
    getIsBlocked() {
        if(this.isBlocked) {
            return {
                    "id": 90156250,
                    "libro": "02P1C0097400",
                    "docto": "0161",
                    "activo": "1",
                    "tipoSello": 0,
                    "nuRegPub": 123,
                    "feCap": 1682533404000,
                    "detalle": "bloqueo",
                    "folio": 0,
                    "feCie": null
                }
        }
        throw new BadRequestException('error')
    }

    @Put('documento/actividad/:libro/bloqueo')  
    blockDocument() {
        this.isBlocked = true;
        return {
            "id": 90156250,
            "libro": "02P1C0097400",
            "docto": "0161",
            "activo": "1",
            "tipoSello": 0,
            "nuRegPub": 123,
            "feCap": 1682533404000,
            "detalle": "bloqueo",
            "folio": 0,
            "feCie": null
        }
    } 

    @Put('documento/actividad/:libro/desbloqueo')
    unblockDoc() {
        this.isBlocked = false;
    }

    @Get('documento/actividad/:folio/sellado/:docto/imagen/:pagina')
    obtenerSello() {
        if(this.isSellado) {
            return {
                "id": 90156601,
                "libro": "01F1F0001940",
                "docto": "00010",
                "pagina": "0004",
                "activo": "1",
                "nuRegPub": 123,
                "feCap": 1682702956000,
                "folio": 0, 
                "feCie": null,
                "posX": 0,
                "posY": 0,
                "detalle": "sellado: libro:01F1F0001940 - docto:00010 - pagina: 0004",
                "tipoSello": 0
            }
        } else {
            throw new BadRequestException('')

        }
    }


    @Put('documento/actividad/:libro/sellado/bloqueo')
    sellar() {
        this.isSellado = true;
        return {
            "id": 90156600,
            "libro": "01F1F0001940",
            "docto": "00010",
            "pagina": "0004",
            "activo": "1",
            "nuRegPub": 123,
            "feCap": 1682698933296,
            "folio": 0,
            "feCie": null,
            "posX": 0,
            "posY": 0,
            "detalle": "sellado: libro:01F1F0001940 - docto:00010 - pagina: 0004",
            "tipoSello": 0
        }
    }

    @Put('documento/actividad/:libro/sellado/desbloqueo') 
    quitarSello() {
        if(!this.isSellado) {
            throw new InternalServerErrorException('Error');
        }

        this.isSellado = false;
    }

    @Get('documento/actividad/incidencias')
    searchIncidences() {
        return {
            "content": [
                {
                    "bitKey": 1793,
                    "libro": "01P1C0039800",
                    "documento": 8,
                    "catalogo": 28,
                    "comentario": "EN LA HOJA DE REGISTRO MARCA UNOS FOLIOS Y NO SON LOS QUE ESTAN FISICAMENTE.",
                    "usuarioIns": 194,
                    "fechaIns": 1177390800000,
                    "horaIns": "18:55:25",
                    "usuarioAct": 194,
                    "fechaAct": 1177390800000,
                    "horaAct": "18:55:25",
                    "cerrado": "N",
                    "frevision": 1177390800000,
                    "fdigitalizacion": 1173160800000
                },
                {
                    "bitKey": 1795,
                    "libro": "01P1C0039800",
                    "documento": 8,
                    "catalogo": 28,
                    "comentario": "LA HOJA DE REGISTRO MARCA UNOS FOLIOS Y NO SON LOS QUE ESTAN FISICAMENTE.",
                    "usuarioIns": 194,
                    "fechaIns": 1177390800000,
                    "horaIns": "18:56:55",
                    "usuarioAct": 194,
                    "fechaAct": 1177390800000,
                    "horaAct": "18:56:55",
                    "cerrado": "N",
                    "frevision": 1177390800000,
                    "fdigitalizacion": 1173160800000
                }
            ],
            "first": true,
            "last": true,
            "number": 0,
            "numberOfElements": 2,
            "size": 10,
            "totalElements": 2,
            "totalPages": 1,
            "sort": [
                {
                    "direction": "ASC",
                    "property": "catalogo",
                    "ignoreCase": false,
                    "nullHandling": "NATIVE",
                    "ascending": true,
                    "descending": false
                }
            ]
        }
    }

    @Get('users/locateByEmployee/:id')
    getEmployee() {
        return {"idUserApp":234,"username":"rarellano","email":"","password":null,"createdDate":1674256107408,"name":"Romario Arellano","status":"ACTIVO","extra1":null,"extra2":null,"extra3":null,"extra4":null,"extra5":null,"userGeofenceViewList":[],"profileId":27,"groupList":[],"imageProfile":null,"connectionStatus":null,"profileName":"Agente","groups":[],"idUsersAssigned":[],"infoUsers":[],"viewInScheduleViewList":[],"extraConfiguration":{"dum":{"ne":940},"iam":[],"nvm":null},"userGeofenceAlertViewList":[],"idOrg":"42d18ea4-7386-11ea-bc55-0242ac130003","tipoUsuario":null,"projectionViewInScheduleView":[]}
    }

    returnImage(param: string) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(imageById[param])
            }, 1000);
        })
    }
} 

