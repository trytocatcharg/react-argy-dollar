import { useEffect, useState } from "react";
import { CurrencyModel } from "../models/currency-backend.model";

export default function useDollar() {

    const [dollar, setDollar] = useState([] as CurrencyModel[]);
    const url = 'https://dolar-api-three.vercel.app/dolar';

    useEffect(() => {
        fetch(url)
          .then( e => e.json())
          .then(e => {

            const value = e.data.panel.map(element => {
              let fecha: Date = element.lastUpdate;
              if (element.fecha) {
                if (String(element.fecha).includes(' - ')) {
                  const [fechaPart, horaPart] = element.fecha.split(" - ");
                  const [dia, mes, anio] = fechaPart.split("/");
                  const [hora, minutos] = horaPart.split(":");
  
                    fecha = new Date(Number(anio), Number(mes) - 1, Number(dia), Number(hora), Number(minutos));
                } else {
                  fecha = element.fecha;
                }
              }

              return {
                titulo: element.titulo,
                compra: element.compra.replace(',', '.') as number,
                venta: element.venta.replace(',', '.') as number,
                cierre: element.cierre.replace(',', '.') as number,
                updatedAt: fecha
              }  as CurrencyModel
            }); 

            setTimeout(() => {
                setDollar(value);
            }, 1000);
            });
          }, []);


          return {dollar, setDollar}
}