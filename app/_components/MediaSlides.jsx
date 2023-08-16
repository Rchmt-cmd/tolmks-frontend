"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function MediaSlides(data) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? data.data.data.media.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.data.data.media.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const slidelist = data.data.data.media

  useEffect(() => {
    setTimeout(() => {
      nextSlide()
    }, 5000)
  })

  return (
    <div className='w-full p-6 rounded-md border-[#2F8BE6] border'>
      <h1 className="text-xl font-medium mb-6 text-[#17102F]">Artikel</h1>
      <div className="flex justify-center flex-col">
        <div className="relative h-60 group mb-4">
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
        <button className="py-1 px-5 bg-gradient-to-r rounded-md shadow-md from-[#5732B9] to-[#5FABEE]">{slidelist[currentIndex].title}</button>
      </div>
      
    </div>
  )
}
