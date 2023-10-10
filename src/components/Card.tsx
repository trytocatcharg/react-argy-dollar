import { Variation } from './Variation';
import { TimeAgo } from './TimeAgo';
import { useState } from 'react';
import { currencyDescription } from '../data/currency-description';
import Modal from 'react-modal';
import Chart from './Chart';

type Dollar = {
    name: string,
    compra: number;
    venta: number;
    cierre: number;
    updatedAt: Date;
    showChart?: boolean;
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

function Card({name, compra, venta,cierre, updatedAt, children, showChart = false}: Dollar) {
  const [cardSide, setCardSide] = useState(cardSideEnum.FRONT);
  const [animation, setAnimation] = useState(true);
  const buyFormatted = format(compra);
  const sellFormatted = format(venta);

  const [modalIsOpen,setModalIsOpen] = useState(false);

  const handleSetModalIsOpen =(open: boolean)=>{

    setModalIsOpen(open);
  }

  setTimeout(() => {
    setAnimation(false);  
  }, 3000);
  
  
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
              className={`bg-gray-50 flex justify-center items-center ${animation ? 'animate-rotate-y animate-duration-[2500ms]': ''}`}>
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
              <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5 gap-2 content-center">
                {
                 (!animation && showChart) && 
                 <div onClick={() => handleSetModalIsOpen(true)} className='hover:cursor-pointer z-50'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                 </div>
                }
              
                <h2 className="text-white text-2xl mr-auto">{name}</h2>
                {
                  !animation  &&
                    <div onClick={() => handleClick()} className='hover:cursor-pointer z-50'>
                      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                      </svg>
                    </div>
                }
                
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
              className={`bg-gray-50 flex justify-center items-center ${animation ? 'animate-rotate-y animate-duration-[2500ms]': ''}`}>
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
              {
                  !animation  &&
                    <div onClick={() => handleBackClick()} className='hover:cursor-pointer z-50'>
                      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                      </svg>
                    </div>
              }
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

            <Modal 
              isOpen={modalIsOpen} 
              appElement={document.getElementById("root")}
              style={{
                zIndex:1000
              }}>
                <button 
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800"
                onClick={() => handleSetModalIsOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <Chart></Chart>
            </Modal>
        </>      
      )
}

export default Card