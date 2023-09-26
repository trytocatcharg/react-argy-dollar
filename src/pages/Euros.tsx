import Card from '../components/Card';
import { CardSkeleton } from '../components/CardSkeleton';
import useEuro from '../hooks/useEuro';

export default function Euros() {
    const {euro} = useEuro();

  return (
  <main className="flex-grow p-4 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        
      {
            !euro ||
            euro.length === 0 && <>
                  <div className="p-1">
                      <CardSkeleton></CardSkeleton>
                  </div>
                  <div className="p-1">
                      <CardSkeleton></CardSkeleton>
                  </div>
                  <div className="p-1">
                      <CardSkeleton></CardSkeleton>
                  </div>
                  <div className="p-1">
                      <CardSkeleton></CardSkeleton>
                  </div>
            </>           
          }

        {
        euro.map(e => {
          return (<div className="p-1" key={e.titulo}>
            <Card 
              name={e.titulo} 
              venta={e.venta} 
              compra={e.compra}
              cierre={e.cierre}
              updatedAt={e.updatedAt}
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="h-14 z-10 bg-slate-50 rounded-xl border-solid border-2 border-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              </Card>
          </div>)
        })
        }
    </div>
  </main>);
}
