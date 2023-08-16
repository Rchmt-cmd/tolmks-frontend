"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react"
import Image from "next/image";
const BannerSlides = (slides) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.slides.data.banner.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.slides.data.banner.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  const slidelist = slides.slides.data.banner
  console.log(slidelist.length);

  // const slides = [
  //   {
  //     url: '/1.png',
  //   },
  //   {
  //     url: '/tol_layang_2.png',
  //   },
  //   {
  //     url: '/tol_layang3.png',
  //   },

  //   {
  //     url: '/tol_layang4.png',
  //   },
  //   {
  //     url: '/brk_large_custom.JPG',
  //   },
  // ];

  useEffect(() => {
    setTimeout(() => {
      nextSlide()
    }, 5000)
  })

  

  return (
    <div className='w-full h-[90vh] max-h-[1440px] relative group'>
      <Image
                src={`http://127.0.0.1:8000/${slidelist[currentIndex].image}`}
                fill='true'
                alt="slide"
                priority={true}
                className="absolute top-0 right-0 object-cover rounded-lg duration-500"
            />
      <div className="absolute hidden group-hover:block top-[50%] -translate-x-0 p-1 rounded-full hover:bg-white/20 translate-y-[-50%] cursor-pointer left-5 ">
        <ChevronLeftIcon className="w-10 h-10 text-white/20 font-extrabold" onClick={prevSlide} />
      </div>
      <div className="absolute hidden group-hover:block top-[50%] -translate-x-0 p-1 rounded-full hover:bg-white/20 translate-y-[-50%] cursor-pointer right-5 ">
        <ChevronRightIcon className="w-10 h-10 text-white/20 font-extrabold" onClick={nextSlide} />
      </div>
      <div className='absolute hidden group-hover:flex justify-between bottom-[5%] -translate-x-0 right-[50%]'>
        {slidelist.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer mx-1 text-white'
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="0.2em" viewBox="0 0 512 512"><path fill="#fff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BannerSlides