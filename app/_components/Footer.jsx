'use client'
import Image from "next/image"

const Footer = () => {
  return (
    <div className="bg-[#f7f7f8] w-full px-10 py-7 bottom-0">
      <div className="flex flex-col items-center md:justify-between md:flex-row outline-1 border border-[#2F8BE6] rounded-md p-6">
        <div className="">
          <Image
            src='/logo-mun.png'
            width={150}
            height={80}
            alt="logo-mun"
          />
        </div>

        <div className="text-center">
          <p className="text-[#adadad]"><span>Copyright &copy; 2022 &nbsp;</span><a className="text-blue-700" href="https://www.margautamanusantara.com/" id="mun" target="_blank">Margautama Nusantara</a><span>, All rights reserved.</span></p>
          <p ><a className="text-blue-700" href="https://www.margautamanusantara.com/termofuse" id="termofuse" target="_blank">Term of Use</a> | <a className="text-blue-700" href="https://www.margautamanusantara.com/privacypolicy" id="privacypolicy" target="_blank">Privacy Policy</a></p>
        </div>

        <div className="">
          <Image
            src='/logo-sgs.png'
            width={150}
            height={120}
            alt="logo-sgs"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer