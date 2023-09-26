import SwiperCore from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./MarqueeMarkets.css";
import { Autoplay, Parallax } from "swiper/modules";

export const MarqueeMarkets = () => {


  const SwiperConfig: SwiperProps = {
    speed: 9000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: false
    },
    loop: true,
    slidesPerView: "auto",
    watchSlidesProgress: true,
  };

  SwiperCore.use([Autoplay, Parallax]);

 
  // const [commodities, setCommodities] = useState([] as CommoditiesModel[]);
  // const url = 'https://dolar-api-three.vercel.app/commodities';

  // useEffect(() => {
  //   fetch(url)
  //     .then( e => e.json())
  //     .then(e => {
  //       const value = e.data.panel.map(element => {
          
  //         let fecha: Date = element.data.fecha;
  //               if (String(element.fecha).includes(' - ')) {
  //                 const [fechaPart, horaPart] = element.fecha.split(" - ");
  //                 const [dia, mes, anio] = fechaPart.split("/");
  //                 const [hora, minutos] = horaPart.split(":");
  
  //                   fecha = new Date(Number(anio), Number(mes) - 1, Number(dia), Number(hora), Number(minutos));
  //               }

  //         return {
  //           commoditie: element.commoditie,
  //           fecha_consulta: new Date(element.fecha_consulta),
  //           data: {
  //             fecha: fecha,
  //             venta: element.data.venta,
  //             ultimo: element.data.ultimo,
  //             valor: element.data.valor,
  //             variacion: element.data.varicion
  //           }
         
  //         }  as CommoditiesModel
  //       }); 

  //       setTimeout(() => {
  //         setCommodities(value);
  //       }, 1000);
  //       });
  //     }, []);

  return (

     <Swiper {...SwiperConfig} className="!bg-gray-50">
    <SwiperSlide className="!bg-gray-50">Slide 1</SwiperSlide>
    <SwiperSlide className="!bg-gray-50">Slide 2</SwiperSlide>
    <SwiperSlide className="!bg-gray-50">Slide 3</SwiperSlide>
    <SwiperSlide className="!bg-gray-50">Slide 4</SwiperSlide>
    <SwiperSlide className="!bg-gray-50">Slide 5</SwiperSlide>
    <SwiperSlide className="!bg-gray-50">Slide 6</SwiperSlide>
  </Swiper>

    // <div className="bg-gray-50 relative flex overflow-x-hidden overflow-y-hidden">
    //         <div className="py-3 animate-marquee whitespace-nowrap">
    //           <span className="mx-4 text-4xl">Marquee Item 1</span>
    //           <span className="mx-4 text-4xl">Marquee Item 2</span>
    //           <span className="mx-4 text-4xl">Marquee Item 3</span>
    //           <span className="mx-4 text-4xl">Marquee Item 4</span>
    //           <span className="mx-4 text-4xl">Marquee Item 5</span>
    //         </div>

    //         <div className="absolute top-0 py-3 animate-marquee2 whitespace-nowrap">
    //           <span className="mx-4 text-4xl">Marquee Item 1</span>
    //           <span className="mx-4 text-4xl">Marquee Item 2</span>
    //           <span className="mx-4 text-4xl">Marquee Item 3</span>
    //           <span className="mx-4 text-4xl">Marquee Item 4</span>
    //           <span className="mx-4 text-4xl">Marquee Item 5</span>
    //         </div>
    // </div>
  )
}
