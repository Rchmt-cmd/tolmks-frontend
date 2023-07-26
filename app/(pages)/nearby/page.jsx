import Image from "next/image"
import Tab from "../../_components/Tab"

const Nearby = () => {
  return (
    <div className='text-[#3A354F] grid grid-cols-1 gap-1 bg-[#f7f7f8] w-full py-6 px-4 md:px-10'>
      <div className='mb-3'>
        <h1 className="font-medium text-2xl mb-3">Lokasi Terdekat | <span className="text-sm italic text-[#BDBDBD]">Nearby Location</span></h1>
      </div>
      <div className="mb-3 bg-white rounded-md shadow-lg p-6 grid md:grid-cols-2 grid-cols-1 gap-3">        
        <div class="md:col-span-2 text-sm font-medium text-center text-[#124C83] border-b border-[#DEE2E6]">
            <Tab />
        </div>
        <div className="p-6 m-2 border border-[#2F8BE6] rounded-md">
          <h1 className="font-medium text-xl mb-3">Trans Studio Makassar</h1>
          <div className="flex justify-start w-full mb-3">
            <div className="relative w-80 md:h-14 lg:h-20 xl:h-28 2xl:h-36 h-16 mr-5">
              <Image
                src='/tsm.jpg'
                fill='true'
                alt="tsm"
                className="absolute top-0 right-0 object-contain md:object-cover"
              />
            </div>
            <div className="font-normal">
              <p className="text-base mb-4">Mal perbelanjaan dengan toko pakaian, supermarket, restoran & bioskop.</p>
              <p className="text-sm text-[#124c83]">Makassar</p>
            </div>
          </div>
          <button className="float-right mr-3 bg-[#D5F1FD] text-[#124C83] rounded-md text-sm py-1.5 px-2.5 font-medium">Go To Place</button>
        </div>
        <div className="p-6 m-2 border border-[#2F8BE6] rounded-md">
          <h1 className="font-medium text-xl mb-3">Trans Studio Makassar</h1>
          <div className="flex justify-start w-full mb-3">
            <div className="relative w-80 md:h-14 lg:h-20 xl:h-28 2xl:h-36 h-16 mr-5">
              <Image
                src='/tsm.jpg'
                fill='true'
                alt="tsm"
                className="absolute top-0 right-0 object-contain md:object-cover"
              />
            </div>
            <div className="font-normal">
              <p className="text-base mb-4">Mal perbelanjaan dengan toko pakaian, supermarket, restoran & bioskop.</p>
              <p className="text-sm text-[#124c83]">Makassar</p>
            </div>
          </div>
          <button className="float-right mr-3 bg-[#D5F1FD] text-[#124C83] rounded-md text-sm py-1.5 px-2.5 font-medium">Go To Place</button>
        </div>
      </div>
    </div>
  )
}

export default Nearby