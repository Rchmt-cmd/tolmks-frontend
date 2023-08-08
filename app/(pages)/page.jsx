import { DocumentTextIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import dynamic from "next/dynamic"

const Slides = dynamic(() => import('../_components/Slides'), { 
  ssr: false,
  loading: () => <p>Loading</p>
})



const Home = () => {
  return (
    <>
      <div className="grid grid-cols-11 gap-4 px-36 py-4 w-full bg-[#F7F7F8]">
        <div className=" text-white h-full col-span-11">
          <Slides />
        </div>
        <div className="bg-slate-950 text-white h-full col-span-5 row-span-2">2</div>
        <Link href="/struk" className="bg-[#B90008] block text-white col-span-6 p-3 rounded-md shadow-xl text-center">
          <DocumentTextIcon className="w-6 text-3xl block mx-auto text-white mb-4" />
          <h4 className="text-2xl">Cetak Struk</h4>
        </Link>
        <span className="bg-white text-center text-[#17102F] rounded-md shadow-xl flex flex-col justify-center p-5 col-span-2">
          <h4 className="text-lg font-semibold">Instagram</h4>
          <div className="block mx-auto my-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </div>
          <p className="text-base text-[#B1AFB9]">@infotolmakassar</p>
        </span>
        <span className="bg-white text-center text-[#17102F] rounded-md shadow-xl flex flex-col justify-center p-5 col-span-2">
          <h4 className="text-lg font-semibold">Twitter</h4>
          <div className="block mx-auto my-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </div>
          <p className="text-base text-[#B1AFB9]">@infotolmakassar</p>
        </span>
        <span className="bg-white text-center text-[#17102F] rounded-md flex flex-col justify-center p-5 col-span-2 shadow-xl">
          <h4 className="text-lg font-semibold">Phone</h4>
          <div className="block mx-auto my-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <p className="text-base text-[#B1AFB9]">1500722</p>
        </span>
        <div className="bg-slate-950 text-white h-full col-span-5">7</div>
        <div className="bg-slate-950 text-white h-full col-span-6">8</div>
      </div>
    </>
  )
}

export default Home

{/* <div className="grid grid-rows-4 gap-4 grid-flow-col px-36 py-4 w-full bg-[#F7F7F8]">
        <div className="bg-slate-950 text-white h-full col-span-6">1</div>
        <div className="bg-slate-950 text-white row-span-2 col-span-3 h-full"></div>
        <div className="bg-slate-950 text-white h-full col-span-3">3</div>
        <a href="#" className="bg-[#B90008] block text-white col-span-3 p-3 rounded-md shadow-xl text-center">
          <DocumentTextIcon className="w-6 text-3xl block mx-auto text-white mb-4" />
          <h4 className="text-2xl">Cetak Struk</h4>
        </a>
        <a href="#" className="bg-white text-center text-[#17102F] rounded-md shadow-xl flex flex-col justify-center px-5">
          <h4 className="text-lg font-semibold">Instagram</h4>
          <div className="block mx-auto my-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </div>
          <p className="text-base text-[#B1AFB9]">@infotolmakassar</p>
        </a>
        <div className="bg-slate-950 text-white col-span-3">6</div>
        <a href="#" className="bg-white text-center text-[#17102F] rounded-md shadow-xl flex flex-col justify-center px-5">
          <h4 className="text-lg font-semibold">Twitter</h4>
          <div className="block mx-auto my-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </div>
          <p className="text-base text-[#B1AFB9]">@infotolmakassar</p>
        </a>
        <a href="#" className="bg-white text-center text-[#17102F] rounded-md flex flex-col justify-center px-5 shadow-xl">
          <h4 className="text-lg font-semibold">Phone</h4>
          <div className="block mx-auto my-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <p className="text-base text-[#B1AFB9]">1500722</p>
        </a>
      </div> */}