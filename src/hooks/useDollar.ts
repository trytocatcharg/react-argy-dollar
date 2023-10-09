import { CurrencyModel } from "../models/currency-backend.model";
import { useQuery } from "react-query";

export default function useDollar() {

    const url = 'https://dolar-api-three.vercel.app/dolar';


    const fetchDolar = async () => {
      const e = await fetch(url);
        const e_1 = await e.json();
       const output = e_1.data.panel.map(element => {
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
            updatedAt: fecha,
            showChart: (element.titulo === 'Dólar Blue')
          } as CurrencyModel;
        });
        await new Promise((resolve) => { setTimeout(resolve, 3000);})
        return output as CurrencyModel[];
      }

    
    const {data, error, status, } = useQuery(['dollar'], fetchDolar, {staleTime: 3000});
    return { data, error, status }
}