"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function TarifSlides(data) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? data.data.data.infotarif.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.data.data.infotarif.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const slidelist = data.data.data.infotarif

  useEffect(() => {
    setTimeout(() => {
      nextSlide()
    }, 5000)
  })

  return (
    <div className='w-full p-6 rounded-md bg-white shadow-md'>
      <h1 className="text-xl text-center font-medium text-[#17102F]">{slidelist[currentIndex].gerbang}</h1>
      <h1 className="text-xl text-center text-[#17102F]">{slidelist[currentIndex].ruas}</h1>
      <div className="flex justify-center flex-col">
        <div className="relative h-60 group">
          <Image
            src={`http://127.0.0.1:8000/${slidelist[currentIndex].image}`}
            fill='true'
            alt="slide-media-thumbnail"
            className="absolute top-0 right-0 object-cover rounded-md shadow-md"
          />
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer left-1 ">
            <ChevronLeftIcon className="w-6 h-6 text-white font-extrabold" onClick={prevSlide} />
          </div>
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer right-1 ">
            <ChevronRightIcon className="w-6 h-6 text-white font-extrabold" onClick={nextSlide} />
          </div>
        </div>
        <div className="w-full overflow-x-auto">
                <table className="w-full text-black table-auto text-left">
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
                      <th className="p-1">{slidelist[currentIndex].ruas}</th>
                      <td className="p-1">{slidelist[currentIndex].golongan1}</td>
                      <td className="p-1">{slidelist[currentIndex].golongan2}</td>
                      <td className="p-1">{slidelist[currentIndex].golongan3}</td>
                      <td className="p-1">{slidelist[currentIndex].golongan4}</td>
                      <td className="p-1">{slidelist[currentIndex].golongan5}</td>
                    </tr>
                    <tr className="border-t border-[#E0E0E0]">
                      <th className="p-1">{slidelist[currentIndex].total}</th>
                      <td className="p-1">{slidelist[currentIndex].total1}</td>
                      <td className="p-1">{slidelist[currentIndex].total2}</td>
                      <td className="p-1">{slidelist[currentIndex].total3}</td>
                      <td className="p-1">{slidelist[currentIndex].total4}</td>
                      <td className="p-1">{slidelist[currentIndex].total5}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
      </div>
      
    </div>
  )
}
