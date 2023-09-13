import getProfilUser from "@/app/libs/getProfilUser"
import Image from "next/image"
import { redirect } from "next/navigation"

export default async function ProfilUser() {
  // const profilUserData = await getProfilUser()

  return (
    <div className="text-[#3A354F] grid grid-cols-4 gap-5 bg-[#f7f7f8] w-full py-3 sm:px-10 px-2">    
      <div className="bg-white flex flex-col col-span-4 rounded-md shadow-md h-96">
        <div className="relative w-full h-full">
          <Image
            src='/profile-image.jpg'
            fill='true'
            alt="banner"
            className="absolute h-auto max-w-[100%] min-h-[150px] top-0 left-0 rounded-t-md object-cover"
          />
          <Image
            src='/kartu.jpg'
            width={160}
            height={100}
            alt="banner"
            className="rounded-md absolute -bottom-10 left-6 shadow-md"
          />
          <div className="absolute bottom-6 left-52 text-xl text-white font-medium">
            <h1>Tugas Akhir Test</h1>
          </div>
        </div>
        <div className="p-6 pl-52">
          <button className="bg-[#D5F1FD] text-[#124c83] hover:bg-[#975AFF] hover:text-white py-1.5 px-5 rounded-md">Edit Profile</button>
        </div>
      </div>
      <div className="bg-white rounded-md shadow-md p-6">
        <div className="flex justify-between mb-3 align-center">
          <h1 className="text-xl font-medium">About</h1>
          <div className="flex justify-center flex-col cursor-pointer p-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 128 512"><path fill="#000000" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
          </div>
        </div>
        <div>
          <p className="text-base">gatot subroto</p>
          <p className="text-base">tugasakhirtest@test.com</p>
          <p className="text-base">083152501285</p>
        </div>
      </div>
      <div className="bg-white col-span-2 rounded-md shadow-md p-6">
        <div className="flex justify-between mb-3 align-center">
          <h1 className="text-xl font-medium">Kartu Anda</h1>
          <div className="flex justify-center flex-col cursor-pointer p-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path fill="#000000" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
          </div>
        </div>
        <div className="w-full">
          <ul className="w-full">
            <li className="border-x flex justify-between border-b first:border-t py-3 border-t-0 first:rounded-t-md last:rounded-b-md px-5 border-[#E0E0E0] border-collapse">
              <div>982374982789273</div>
              <div className="bg-[#2F8BE6] text-xs rounded-md py-1.5 px-2.5 text-white font-medium">0</div>
            </li>
            <li className="border-x flex justify-between border-b first:border-t py-3 border-t-0 first:rounded-t-md last:rounded-b-md px-5 border-[#E0E0E0] border-collapse">
              <div>982374982789273</div>
              <div className="bg-[#2F8BE6] text-xs rounded-md py-1.5 px-2.5 text-white font-medium">0</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#975AFF] rounded-md shadow-md p-6 flex justify-between">
        <div className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
        </div>
        <div>
          <h1 className="text-xl font-medium mb-3 text-white">Total Transaksi 0</h1>
          <p className="text-white font-normal text-xs">Perbanyak transaksi untuk mendapat berbagai penawaran menarik kami.</p>
        </div>
      </div>
    </div>
  )
  // if (profilUserData) {
  // }else{
  //   redirect('/')
  // }
  
}