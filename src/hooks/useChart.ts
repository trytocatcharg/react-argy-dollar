import { useState, useEffect } from "react";


export type DataChart = {
    date: Date,
    value: number
  }
  
export default function useChart () {
    const [dataChart, setDataChart] = useState([] as DataChart[]);
    const url = 'https://dolar-api-three.vercel.app/usd-blue-chart';
    
    useEffect(() => {
          fetch(url)
            .then(e => e.json())
            .then(e => setDataChart(
                            e.data[0].values.filter((_e, index) => {
                              return (index === 0 || index % 5 == 0)
                            }).map((i) => {
                              const myDate = new Date(i[0]);
                              const day = myDate.toLocaleString('default', { day: '2-digit' });
                              const month = myDate.toLocaleString('default', { month: 'short' });
                              return {
                                date: day + ' ' + month,
                                value: i[1]
                              }
                            })
                        ));
        }, []);




    return dataChart;
}