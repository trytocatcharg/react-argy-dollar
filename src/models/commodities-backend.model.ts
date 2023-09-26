export interface CommoditiesModel {
    commoditie: string;
    fecha_consulta: Date;
    data: {
        fecha: Date,
        venta: number,
        ultimo: number,
        variacion: string,
        valor: number
    },
    actual: {
        valor_actual: number,
        variacion: string,
        fecha_valor: Date
    }
}