import dynamic from "next/dynamic"

const Tab = dynamic(() => import("../../_components/Tab"))

export default function Nearby() {
  return (
    <div className='text-[#3A354F] grid grid-cols-1 gap-1 bg-[#f7f7f8] w-full py-6 px-4 md:px-10'>
      <div className='mb-3'>
        <h1 className="font-medium text-2xl mb-3">Lokasi Terdekat | <span className="text-sm italic text-[#BDBDBD]">Nearby Location</span></h1>
      </div>
      <div className="mb-3 bg-white rounded-md shadow-lg p-6 grid md:grid-cols-2 grid-cols-1 gap-3">        
        <Tab />
      </div>
    </div>
  )
}