import Image from "next/image"

const CallCenter = () => {
  return (
    <div className="text-[#3A354F] grid grid-cols-1 gap-5 bg-[#f7f7f8] w-full py-6 sm:px-10 px-2">    
      <div>
        <h1 className="font-medium text-2xl ">Pusat Panggilan 1500722 | <span className="text-sm italic text-[#BDBDBD]">Call Center 1500722</span></h1>
      </div>
      <div className="bg-white rounded-md shadow-md relative 2xl:h-[120vh] xl:h-[80vh] md:h-[65vh] sm:h-[50vh] h-[30vh]">
        <Image
          src='/img_3056.JPG'
          fill='true'
          alt="hero_img"
          className="absolute rounded-md top-0 left-0 sm:object-cover object-contain"
        />
      </div>
      <div className="bg-white rounded-md shadow-md p-6">
        <ul>
          <li>1. Peraturan Menteri Pekerjaan Umum Republik Indonesia Nomor 16/PRT/M/2014. Tentang Standar Pelayanan Minimal Jalan Tol.</li>
          <li>2. Peraturan Menteri pekerjaan Umum No. 27/PRT/M/2008 pasal 1 (1) Jalan Tol adalah jalan Umum yg merupakan bagian sistem jaringan jalan dan sebagai jalan Nasional yg penggunaannya diwajibkan membayar tol.</li>
        </ul>
      </div>
      <div className="bg-white rounded-md shadow-md p-6">
        <h1 className="text-xl font-medium">Layanan Jalan Tol</h1>
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="text-center h-60 w-60 md:h-48 md:w-48 flex flex-col mx-auto md:mx-0">
            <div className="relative w-full h-full"> 
              <Image
                src='/imgbin_police_car_patrol_police_officer_png.png'
                fill='true'
                alt="police-car"
                className="absolute rounded-md top-0 left-0 object-cover"
              />
            </div>
            <p className="block">Patroli</p>
          </div>
          <div className="text-center h-60 w-60 md:h-48 md:w-48 flex flex-col mx-auto md:mx-0">
            <div className="relative w-full h-full"> 
              <Image
                src='/imgbin_car_door_tow_truck_towing_computer_icons_png.png'
                fill='true'
                alt="derek-car"
                className="absolute rounded-md top-0 left-0 object-cover"
              />
            </div>
            <p className="block">Derek</p>
          </div>
          <div className="text-center h-60 w-60 md:h-48 md:w-48 flex flex-col mx-auto md:mx-0">
            <div className="relative w-full h-full"> 
              <Image
                src='/lovepik_com_401471043_emergency_rescue_silhouette_after_the_earthquake.png'
                fill='true'
                alt="rescue-car"
                className="absolute rounded-md top-0 left-0 object-cover"
              />
            </div>
            <p className="block">Rescue</p>
          </div>
          <div className="text-center h-60 w-60 md:h-48 md:w-48 flex flex-col mx-auto md:mx-0">
            <div className="relative w-full h-full"> 
              <Image
                src='/pngtree_vector_ambulance_icon_3989771.png'
                fill='true'
                alt="ambulance-car"
                className="absolute rounded-md top-0 left-0 object-cover"
              />
            </div>
            <p className="block">Ambulans</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallCenter