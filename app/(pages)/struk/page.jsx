import Image from "next/image"
import { CreditCardIcon } from "@heroicons/react/24/outline"

const Struk = () => {
  return (
    <div className="text-[#3A354F] grid grid-cols-1 gap-5 bg-[#f7f7f8] w-full py-6 sm:px-10 px-2">    
      <div className="bg-white rounded-md shadow-md p-2 md:p-6 sm:h-[25vh] md:h-[34vh] xl:h-[50vh] 2xl:h-[85vh] h-[15vh]">
        <div className="relative w-full h-full">
          <Image
            src='/Spanduk.png'
            fill='true'
            alt="hero_img"
            className="absolute rounded-md top-0 left-0 object-fill"
          />
        </div>
      </div>
      <div>
        <h1 className="font-medium text-2xl ">Data Struk | Jalan Tol Makassar</h1>
      </div>
      <div className="bg-white rounded-md shadow-md p-6">
        <form action="">
          <div className="flex flex-row w-full mb-4">
            <input type="text" name="" id="" placeholder="Masukkan nomor kartu" className="py-1.5 px-3 border rounded-s-md w-full border-[#E0E0E0]" />
            <div className="bg-[#E9ECEF] py-1.5 px-3 flex rounded-e-md">
              <CreditCardIcon className="w-5"/>
            </div>
          </div>
          <button className="border hover:bg-[#2183E4] hover:text-white focus:border-[#975AFF] border-[#2F8BE6] text-[#2F8BE6] rounded-md py-1.5 px-5">Cari Struk</button>
        </form>
      </div>
      <div className="bg-white rounded-md shadow-md p-6">
      </div>
    </div>
  )
}

export default Struk