type VariationProps = {
    initPrice: number;
    endPrice: number;
}

export const Variation = ({initPrice, endPrice}: VariationProps) => {
    let isEqual = endPrice === initPrice;
    const isPositive = (endPrice > initPrice);
    const diff =  Math.abs(endPrice - initPrice);
    if (diff <= 0.10) {
        isEqual = true;
    }
    let variationAvg = 0;
    if (!isEqual) {
        const aux = isPositive ? (endPrice - initPrice) : Math.abs(endPrice - initPrice);
        variationAvg = aux * 100 / initPrice;
    }

    isEqual = variationAvg === 0;

    if (isEqual) {
        return <div className='bg-gray-500 w-12 rounded-md text-gray-200'>0%</div>
    }

  return (<>
        {
            isPositive  && <div className='bg-green-600 justify-center w-17 rounded-md text-gray-200 flex gap-1'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                </div>
                <span>{variationAvg.toFixed(2)}%</span>
                </div>
        }
        
        {
            !isPositive  && 
                <div className='bg-red-600 rounded-md w-17 text-gray-200 flex gap-1'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                        </svg>
                    </div>
                    <span>{- variationAvg.toFixed(2)}%</span>
                </div>
        }
        </>)
}




