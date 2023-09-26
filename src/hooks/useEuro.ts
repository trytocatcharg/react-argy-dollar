import { useEffect, useState } from "react";
import { CurrencyModel } from "../models/currency-backend.model";

export default function useEuro() {
    const [euro, setEuro] = useState([] as CurrencyModel[]);
    const url = 'https://dolar-api-three.vercel.app/euros';

    useEffect(() => {
        fetch(url)
          .then( e => e.json())
          .then(e => {
            const euroValues = e.data.map(element => {
              return {
                titulo: element.titulo,
                compra: element.compra as number,
                venta: element.venta as number,
                cierre: element.cierre as number,
                updatedAt: element.updatedAt
              }  as CurrencyModel
            }); 

            setTimeout(() => {
              setEuro(euroValues);
            }, 1000);
            });
          }, []);


    return {euro}
}