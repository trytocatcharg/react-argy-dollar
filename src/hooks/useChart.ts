import { useState, useEffect } from "react";


export type DataChart = {
    status: 'ok'| 'ko' | 'loading'
    values?:  DataChartValue[]
  }

export type DataChartValue = {
  date: Date,
  value: number
}
  
export default function useChart () {
    const [dataChart, setDataChart] = useState<DataChart>({} as DataChart);
    const url = 'https://dolar-api-three.vercel.app/usd-blue-chart';
    
    useEffect(() => {
          setDataChart({ status: 'loading' });
          fetch(url)
            .then(e => e.json())
            .then(e => {
                  const maxLength = e.data[0].values.length;
                  setDataChart( {
                      status: maxLength > 0 ? 'ok': 'ko',
                      values: e.data[0].values.filter((_e, index) => {
                      const retrieveFirstLastAndFiveMultiple = index === 0 || (index % 5 == 0 && maxLength !== index) || (maxLength - 1) === index;
                            return (retrieveFirstLastAndFiveMultiple)
                                }).map((i) => {
                                  const myDate = new Date(i[0]);
                                  const day = myDate.toLocaleString('default', { day: '2-digit' });
                                  const month = myDate.toLocaleString('default', { month: 'short' });
                                  return {
                                    date: day + ' ' + month,
                                    value: i[1],
                                  }
                                })
                      }
                  )
              })
            .catch(() => {
              setDataChart({ status: 'ko' });
            })
        }, []);




    return dataChart;
}