import { useQuery } from "react-query";
import { CommoditiesModel } from "../models/commodities-backend.model";

export const useCommodities = () => {
    const url = 'https://dolar-api-three.vercel.app/commodities';

    const fetCommodities = async () => {
        const e = await fetch(url);
          const e_1 = await e.json();
          const output = e_1.data.map(element => {
            return {
              commoditie: element.commoditie,
              value: element.data?.ultimo || element.data?.valor || element.actual?.valor_actual,
              variation: element.data?.variacion.replace('%', '').replace(',', '.') || element.actual?.variacion.replace('%', '').replace(',', '.')
            }  as CommoditiesModel
          });
          
          await new Promise((resolve) => { setTimeout(resolve, 3000);})
          return output as CommoditiesModel[]
        }
    
    const {data, error, status, } = useQuery(['commodities'], fetCommodities, {staleTime: 3000});
    return { data, error, status };
}