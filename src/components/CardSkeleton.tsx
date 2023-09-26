
export const CardSkeleton = () => {
  return (
    <div className="bg-gray-50 flex justify-center items-center">
      <div className="h-56 w-72 absolute flex justify-center items-center ">
        <div className="w-12 bg-gray-300 h-12 rounded-full "/>
     </div>
      <div
        className="
          
          h-56
          mx-4
          w-5/6
          bg-gray-50
          rounded-3xl
          shadow-md
          sm:w-80 sm:mx-0
          animate-pulse animate-infinite
          border"
      >
        <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5  animate-pulse animate-infinite">
            <div className="w-35 bg-gray-300 h-6 rounded-md "></div>
        </div>

        <div
          className="
            bg-gray-200
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
            <div className="w-8 bg-gray-300 h-6 rounded-md "/>
            </div>
            <div className="flex flex-col justify-center items-center">
            <div className="w-8 bg-gray-300 h-6 rounded-md "/>
            </div>
          </div>
          <div className="w-full h-1/2 flex flex-col justify-center items-center">
            <div className="w-8 bg-gray-300 h-6 rounded-md "/>
          </div>
        </div>
      </div>
    </div>
  )
}
