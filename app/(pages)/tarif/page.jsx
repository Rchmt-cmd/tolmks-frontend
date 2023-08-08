import getTarif from "@/app/libs/getTarif"
import Image from "next/image"

export default async function Tarif() {
  const tarifData = await getTarif()
  console.log(tarifData);

  return (
    <div className="text-[#3A354F] grid grid-cols-1 lg:grid-cols-2 gap-5 bg-[#f7f7f8] w-full py-6 px-4 sm:px-10">
      <div className="lg:col-span-2">
        <h1 className="font-medium text-2xl ">Informasi Tarif | <span className="text-sm italic text-[#BDBDBD]">Tariff Information</span></h1>
      </div>
      {tarifData.data.tarif.map(item => {
        return (
          <>
            <div className="bg-white shadow-md rounded-md">
              <div className="px-6 pt-6">
                <h1 className="text-xl mb-1 font-medium">{item.gerbang}</h1>
                <h1 className="text-xl mb-1 font-light">{item.arah}</h1>
              </div>
              <div className="relative h-[40vh]">
                <Image
                  src={`http://127.0.0.1:8000/${item.image}`}
                  fill='true'
                  alt="parangloe"
                  className="absolute rounded-md top-0 left-0 object-cover"
                />
              </div>
              <div className="w-full p-6 overflow-x-auto">
                <table className="w-full table-auto text-left">
                  <thead className="border-t border-b-2 border-[#E0E0E0]">
                    <tr>
                      <th className="p-1">Tarif</th>
                      <th className="p-1">Gol 1</th>
                      <th className="p-1">Gol 2</th>
                      <th className="p-1">Gol 3</th>
                      <th className="p-1">Gol 4</th>
                      <th className="p-1">Gol 5</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[#E0E0E0]">
                      <th className="p-1">{item.ruas}</th>
                      <td className="p-1">{item.golongan1}</td>
                      <td className="p-1">{item.golongan2}</td>
                      <td className="p-1">{item.golongan3}</td>
                      <td className="p-1">{item.golongan4}</td>
                      <td className="p-1">{item.golongan5}</td>
                    </tr>
                    <tr className="border-t border-[#E0E0E0]">
                      <th className="p-1">{item.total}</th>
                      <td className="p-1">{item.total1}</td>
                      <td className="p-1">{item.total2}</td>
                      <td className="p-1">{item.total3}</td>
                      <td className="p-1">{item.total4}</td>
                      <td className="p-1">{item.total5}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}
