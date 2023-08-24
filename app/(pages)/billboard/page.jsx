import React from 'react'
import dynamic from 'next/dynamic';

const Billboard = () => {
  const BillboardMap = dynamic(() => import("../../_components/BillboardMap"), {
    loading: () => "Loading...",
    ssr: false
  });
  return (
    <div className='text-[#3A354F] grid grid-cols-1 gap-1 bg-[#f7f7f8] w-full py-6 px-6 md:px-10'>
      <div className='mb-3'>
        <h1 className="font-medium text-2xl ">Billboard</h1>
      </div>
      <div className='rounded-md bg-white shadow-md relative h-96 w-full'>
        <BillboardMap />
      </div>
    </div>
  )
}

export default Billboard