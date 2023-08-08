import getCsr from "@/app/libs/getCsr"
import Image from "next/image"
import Link from "next/link"

export default async function Csr() {
  const csrData = await getCsr()

  return (
    <div className="text-[#3A354F] grid grid-cols-1 lg:grid-cols-2 gap-3 bg-[#f7f7f8] w-full py-6 px-4 sm:px-10">
      <div className="lg:col-span-2">
        <h1 className="font-medium text-2xl ">Tanggung Jawab Sosial Perusahaan | <span className="text-sm italic text-[#BDBDBD]">Corporate Social Responsibility</span></h1>
      </div>
      {csrData.data.csr.map(item => {
        return (
          <>
            <div className="bg-white rounded-md shadow-lg grid grid-cols-1 sm:grid-cols-2">
              <div className="w-full sm:h-full relative h-60">
                <Image
                  src={`http://127.0.0.1:8000/${item.image}`}
                  fill='true'
                  alt="thumbnail"
                  className="absolute rounded-l-md top-0 left-0 object-cover"
                />
              </div>
              <div className="w-full sm:h-full p-6">
                <p className="text-[#124c83] text-xs mb-4">{item.created_at}</p>
                <h4 className="text-xl font-medium mb-4 tracking-wide">{item.title}</h4>
                <p>{item.konten.slice(0,80)}<Link href={`/csr/${item.id}`} className="text-[#124c83] tracking-wide">. . . Selengkapnya</Link></p>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}
