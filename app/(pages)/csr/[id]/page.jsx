import getMediaDetails from "@/app/libs/getMediaDetails"
import Image from "next/image"

export default async function Page({params}) {
  const csrData = await getMediaDetails(params.id)
  
  return (
    <div className="text-[#3A354F] bg-[#f7f7f8] w-full py-4 px-4 sm:px-10">
      <div className="bg-white rounded-md shadow-md p-6">
        <div className="relative w-full h-[150vh] mb-4">
          <Image
            src={`${process.env.HOSTNAME}/${csrData.data.media.image}`}
            fill='true'
            alt="thumbnail"
            className="absolute top-0 left-0 object-cover"
          />
        </div>
        <div className="text-[#17102F]">
          <p className="text-[#124c83] text-sm mb-4 font-normal">{csrData.data.media.created_at}</p>
          <h3 className="font-medium text-xl mb-4">{csrData.data.media.title}</h3>
          <p className="mb-4 font-normal text-base">{csrData.data.media.konten}</p>
        </div>
      </div>
    </div>
  )
}

