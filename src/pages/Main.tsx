import Card from "../components/Card";
import { CardSkeleton } from "../components/CardSkeleton";
import useDollar from "../hooks/useDollar";


  function Main() {
    const {data, error, status} = useDollar();


    return (
      <main className="flex-grow p-4 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {
            (status === 'loading' || status === 'idle') && <>
                {
                  [...Array(8)].map((_i, index) => 
                    <div className="p-1" key={index}>
                        <CardSkeleton></CardSkeleton>
                    </div>
                  )
                }
            </>           
          }

          {
            (error || status === 'error') &&  <div>error</div>
          }
          
          {
            status === 'success' && data!.map(e => {
              return (<div className="p-1" key={e.titulo}>
                <Card 
                  name={e.titulo} 
                  venta={e.venta} 
                  compra={e.compra}
                  cierre={e.cierre}
                  updatedAt={e.updatedAt}
                  showChart= {e.showChart}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="h-14 z-10 bg-slate-50 rounded-xl border-solid border-2 border-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                  </Card>
              </div>)
          })
          }
      </div>
    </main>
    )
  }
  
  export default Main