import Image from "next/image"
import Link from "next/link"

const Media = () => {
  return (
    <div className="text-[#3A354F] grid grid-cols-1 lg:grid-cols-2 gap-3 bg-[#f7f7f8] w-full py-6 px-4 sm:px-10">
      <div className="lg:col-span-2">
        <h1 className="font-medium text-2xl ">Artikel | <span className="text-sm italic text-[#BDBDBD]">Article</span></h1>
      </div>
      <div className="bg-white rounded-md shadow-lg grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full sm:h-full relative h-60">
          <Image
            src='/hceu7901 (1).JPG'
            fill='true'
            alt="thumbnail"
            className="absolute rounded-l-md top-0 left-0 object-cover"
          />
        </div>
        <div className="w-full sm:h-full p-6">
          <p className="text-[#124c83] text-xs mb-4">2023-04-14 14:59:55</p>
          <h4 className="text-xl font-medium mb-4 tracking-wide">PT Makassar Metro Network dan PT Jalan Tol Seksi Empat beri Santunan Ke Panti Asuhan</h4>
          <p>Makassar April 2023, PT Makassar Metro Network dan Lorem ipsum dolor sit amet consectetur adipisicing elit. <Link href="/media/3" className="text-[#124c83] tracking-wide">. . . Selengkapnya</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Media