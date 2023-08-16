'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon, BuildingOfficeIcon, HomeModernIcon, BuildingStorefrontIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"
import Link from 'next/link'
import getNearby from '../libs/getNearby'
import LoadingSpinner from './LoadingSpinner'

export default function Tab() {
  const [data, setData] = useState([]) 
  const [isLoading, setIsLoading] = useState(false)
  const [tabActive, setTabActive] = useState('0')

  const tabSemuaHandler = () => {
    setTabActive('0')
  }
  const tabFasilitasHandler = () => {
    setTabActive('1')
  }
  const tabHotelHandler = () => {
    setTabActive('2')
  }
  const tabMallHandler = () => {
    setTabActive('3')
  }
  const tabRsHandler = () => {
    setTabActive('4')
  }
  const tabRumahHandler = () => {
    setTabActive('5')
  }

  useEffect(() => {
    setIsLoading(true)
    fetch('http://127.0.0.1:8000/api/nearby')
      .then(response => response.json())
      .then(data => {
        setData(data.data.nearby)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <div className="md:col-span-2 text-sm font-medium text-center text-[#124C83] border-b border-[#DEE2E6]">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <a href="#" onClick={tabSemuaHandler} className={tabActive === '0' ? "flex py-2 px-4 border-b-2 rounded-t-lg text-[#124C83] border-[#124C83] active" : "flex py-2 px-4 border-b-2 border-transparent rounded-t-lg"}>
              <MagnifyingGlassIcon className="w-4 font-bold mr-2" />
              <span>Semua</span>
            </a>
          </li>
          <li className="mr-2">
            <a href="#" onClick={tabFasilitasHandler} className={tabActive === '1' ? "flex py-2 px-4 border-b-2 rounded-t-lg text-[#124C83] border-[#124C83] active" : "flex py-2 px-4 border-b-2 border-transparent rounded-t-lg"}>
              <StarIcon className="w-4 mr-2" />
              <span>Fasilitas dan Rekreasi</span>
            </a>
          </li>
          <li className="mr-2">
            <a href="#" onClick={tabHotelHandler} className={tabActive === '2' ? "flex py-2 px-4 border-b-2 rounded-t-lg text-[#124C83] border-[#124C83] active" : "flex py-2 px-4 border-b-2 border-transparent rounded-t-lg"}>
              <BuildingOffice2Icon className="w-4 mr-2" />
              <span>Hotel</span>
            </a>
          </li>
          <li className="mr-2">
            <a href="#" onClick={tabMallHandler} className={tabActive === '3' ? "flex py-2 px-4 border-b-2 rounded-t-lg text-[#124C83] border-[#124C83] active" : "flex py-2 px-4 border-b-2 border-transparent rounded-t-lg"}>
              <BuildingStorefrontIcon className="w-4 mr-2" />
              <span>Mall</span>
            </a>
          </li>
          <li className="mr-2">
            <a href="#" onClick={tabRsHandler} className={tabActive === '4' ? "flex py-2 px-4 border-b-2 rounded-t-lg text-[#124C83] border-[#124C83] active" : "flex py-2 px-4 border-b-2 border-transparent rounded-t-lg"}>
              <BuildingOfficeIcon className="w-4 mr-2" />
              <span>Rumah Sakit</span>
            </a>
          </li>
          <li className="mr-2">
            <a href="#" onClick={tabRumahHandler} className={tabActive === '5' ? "flex py-2 px-4 border-b-2 rounded-t-lg text-[#124C83] border-[#124C83] active" : "flex py-2 px-4 border-b-2 border-transparent rounded-t-lg"}>
              <HomeModernIcon className="w-4 mr-2" />
              <span>Rumah Residensial</span>
            </a>
          </li>
        </ul>
      </div>
      {isLoading ? (
        <div className='flex justify-center w-full p-0 m-0'>
          <LoadingSpinner />
        </div>
      ) : (
        tabActive === '0' ? data.map(item => {
        return (
          <>
            <div className="p-6 m-2 border border-[#2F8BE6] rounded-md" key={item.id}>
              <h1 className="font-medium text-xl mb-3">{item.name}</h1>
              <div className="flex justify-start w-full mb-3">
                <div className="relative w-80 md:h-14 lg:h-20 xl:h-28 2xl:h-36 h-16 mr-5">
                  <Image
                    src={`http://127.0.0.1:8000/${item.image}`}
                    fill='true'
                    alt="tsm"
                    className="absolute top-0 right-0 object-contain md:object-cover"
                  />
                </div>
                <div className="font-normal">
                  <p className="text-base mb-4">{item.description}</p>
                  <p className="text-sm text-[#124c83]">{item.location}</p>
                </div>
              </div>
              <Link href={item.maps} className="float-right mr-3 bg-[#D5F1FD] text-[#124C83] rounded-md text-sm py-1.5 px-2.5 font-medium">Go To Place</Link>
            </div>
          </>
        )
      }) : data.filter(item => item.kategori == tabActive).map(item => {
        return (
          <>
            <div className="p-6 m-2 border border-[#2F8BE6] rounded-md" key={item.id}>
              <h1 className="font-medium text-xl mb-3">{item.name}</h1>
              <div className="flex justify-start w-full mb-3">
                <div className="relative w-80 md:h-14 lg:h-20 xl:h-28 2xl:h-36 h-16 mr-5">
                  <Image
                    src={`http://127.0.0.1:8000/${item.image}`}
                    fill='true'
                    alt="tsm"
                    className="absolute top-0 right-0 object-contain md:object-cover"
                  />
                </div>
                <div className="font-normal">
                  <p className="text-base mb-4">{item.description}</p>
                  <p className="text-sm text-[#124c83]">{item.location}</p>
                </div>
              </div>
              <Link href={item.maps} className="float-right mr-3 bg-[#D5F1FD] text-[#124C83] rounded-md text-sm py-1.5 px-2.5 font-medium">Go To Place</Link>
            </div>
          </>
        )
      })
      )}
    </>
  )
}