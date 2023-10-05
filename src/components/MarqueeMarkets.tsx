import "./MarqueeMarkets.css";
import Marquee from "react-fast-marquee";
import { useCommodities } from "../hooks/useCommodities";

export const MarqueeMarkets = () => {
 
  const {data, error, status} = useCommodities();



  
  if (status === 'error' || error) return <div>error</div>

  return (
    <Marquee direction="left" gradient={true} 
        gradientWidth={'80px'} 
        gradientColor="rgba(248, 251, 253, 1), rgba(248, 251, 253, 0)" 
        speed={70} className="!overflow-x-clip pt-4 bg-gray-50">

{
  (status === 'idle' || status === 'loading') && <>
    {
      <div className="flex gap-12">
      {  [...Array(9)].map((_i,index) =>
        <div role="status" key={index} className="animate-pulse bg-gray-50 pt-2 flex gap-3">
              <div className="h-5 w-17 bg-gray-300 rounded-full dark:bg-gray-700 "></div>
              <div className="h-5 w-10 bg-gray-300 rounded-full dark:bg-gray-700 "></div>
              <div className="h-5 w-16 bg-gray-300 rounded-full dark:bg-gray-700 "></div>
            </div>
          )
      }
      </div>
    }
  </>
}
{ status === 'success' &&
      <div className="flex gap-16">
        {data!.map((e, i) => {
            return (
                <div key={e.value} className={`h-3 gap-2 flex flex-row justify-around  ${i === 0 ? 'ml-13': ''}`}>
                  <div className="text-base font-bold" key={e.commoditie} >{e.commoditie}</div>
                  <div className="font-semibold">{e.value }</div>

                  { 
                  Number(e.variation) === 0 ? 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>
                  : Number(e.variation) > 0
                    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                    </svg>
                  
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                  </svg>
                  }
                  {
                  Number(e.variation)  === 0 
                    ? <div >{e.variation + '%'}</div>
                    : <div className={`${Number(e.variation) > 0 ? 'text-green-500' : 'text-red-500' }`}>{e.variation + '%'}</div>
                  }
                </div>
              )
          })
        }
      </div>}
    </Marquee>
  )
}
