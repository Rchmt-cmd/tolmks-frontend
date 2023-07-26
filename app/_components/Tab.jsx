'use client'
import React from 'react'
import { MagnifyingGlassIcon, BuildingOfficeIcon, HomeModernIcon, BuildingStorefrontIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"

const Tab = () => {
  return (
    <>
      <ul class="flex flex-wrap -mb-px">
                <li class="mr-2">
                    <a href="#" class="flex py-2 px-4 border-b-2 border-transparent rounded-t-lg">
                      <MagnifyingGlassIcon className="w-4 font-bold mr-2" />
                      <span>Semua</span>
                    </a>
                </li>
                <li class="mr-2">
                    <a href="#" class="flex py-2 px-4 text-[#124C83] border-b-2 border-[#124C83] rounded-t-lg active" aria-current="page">
                      <StarIcon className="w-4 mr-2" />
                      <span>Fasilitas dan Rekreasi</span>
                    </a>
                </li>
                <li class="mr-2">
                    <a href="#" class="flex py-2 px-4 border-b-2 border-transparent rounded-t-lg">
                      <BuildingOffice2Icon className="w-4 mr-2" />
                      <span>Hotel</span>
                    </a>
                </li>
                <li class="mr-2">
                    <a href="#" class="flex py-2 px-4 border-b-2 border-transparent rounded-t-lg">
                      <BuildingStorefrontIcon className="w-4 mr-2" />
                      <span>Mall</span>
                    </a>
                </li>
                <li class="mr-2">
                    <a href="#" class="flex py-2 px-4 border-b-2 border-transparent rounded-t-lg">   
                      <BuildingOfficeIcon className="w-4 mr-2" />
                      <span>Rumah Sakit</span>
                    </a>
                </li>
                <li class="mr-2">
                    <a href="#" class="flex py-2 px-4 border-b-2 border-transparent rounded-t-lg">
                      <HomeModernIcon className="w-4 mr-2" />  
                      <span>Rumah Residensial</span>
                    </a>
                </li>
            </ul>
    </>
  )
}

export default Tab