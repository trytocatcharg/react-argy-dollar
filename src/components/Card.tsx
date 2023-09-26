import './Card.css';
import { Variation } from './Variation';
import { TimeAgo } from './TimeAgo';
import { useState } from 'react';
import { currencyDescription } from '../data/currency-description';

type Dollar = {
    name: string,
    compra: number;
    venta: number;
    cierre: number;
    updatedAt: Date;
    children: string | JSX.Element
}

enum cardSideEnum {
  FRONT,
  BACK
}

const format = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: "code"
  })
    .format(value)
    .replace("USD", "$")
    .trim();
}

function Card({name, compra, venta,cierre, updatedAt, children}: Dollar) {
  const [cardSide, setCardSide] = useState(cardSideEnum.FRONT);
  const [animation, setAnimation] = useState(true);
  const buyFormatted = format(compra);
  const sellFormatted = format(compra);


  setTimeout(() => {
    setAnimation(false);  
  }, 2000);
  
  
  function handleClick(): void {
    setAnimation(true);
    setCardSide((prev) => {
      return prev === cardSideEnum.FRONT ? cardSideEnum.BACK : cardSideEnum.FRONT;
    });
    
  }

  const handleBackClick = () => {
    handleClick();
  } 


    return (
        <>
          {
            cardSide === cardSideEnum.FRONT &&
              <div 
              className={`bg-gray-50 flex justify-center items-center animate-duration-[2000ms] ${animation ? 'animate-rotate-y': ''}`}>
            <div className="h-56 w-72 absolute flex justify-center items-center">
              {children}
          </div>
            <div
              className="
                h-56
                mx-4
                w-5/6
                bg-gray-800 
                rounded-3xl
                shadow-md
                sm:w-80 sm:mx-0
              "
            >
              <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
                <h2 className="text-white text-2xl">{name}</h2>
                <div onClick={() => handleClick()} className='hover:cursor-pointer z-50'>
                  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                </div>
              </div>

              <div
                className="
                  bg-white
                  h-1/2
                  w-full
                  rounded-3xl
                  flex flex-col
                  justify-around
                  items-center
                "
              >
                <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-gray-500 text-xl font-bold">SELL</h1>
                    <h1 className="text-gray-600 text-xl font-bold">{sellFormatted}</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-gray-500 text-xs">BUY</h1>
                    <h1 className="text-gray-600 text-sm">{buyFormatted}</h1>
                  </div>
                </div>
                <div className="w-full h-1/2 flex flex-col justify-center items-center">
                  <Variation initPrice={cierre} endPrice={venta}></Variation>
                  <TimeAgo date={updatedAt} />
                </div>
              </div>
            </div>
              </div>
          }

          {
              cardSide === cardSideEnum.BACK &&

              <div 
              className={`bg-gray-50 flex justify-center items-center animate-duration-[2000ms] ${animation ? 'animate-rotate-y': ''}`}>
            <div className="h-56 w-72 absolute flex justify-center items-center">
              
          </div>
            <div
              className="
                h-56
                mx-4
                w-5/6
                bg-gray-800 
                rounded-3xl
                shadow-md
                sm:w-80 sm:mx-0
              "
            >
              <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
              <h2 className="text-white text-2xl">Description</h2>
                <div onClick={() => handleBackClick()} className='hover:cursor-pointer z-50'>
                  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                </div>
              </div>

              <div
                className="
                  bg-white
                  h-1/2
                  w-full
                  rounded-3xl
                  flex flex-col
                  justify-around
                  items-center
                "
              >
                <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
                <span className='text-xxs'>
                  {currencyDescription.find(e => e.currency.toLowerCase() === name.toLowerCase())?.description}
                </span>
                </div>
                
              </div>
            </div>
              </div>

          }
        </>      
      )
}

export default Card