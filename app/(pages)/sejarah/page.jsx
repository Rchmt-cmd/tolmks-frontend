import getSejarah from "@/app/libs/getSejarah"

export default async function Sejarah() {
    const sejarahData = await getSejarah()

    const formatDate = (inputDate) => {
        // Create a Date object from the input string
        const date = new Date(inputDate);

        // Define an array of month names
        const monthNames = [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];

        // Extract day, month, and year from the Date object
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        // Format the date as "DD Month YYYY"
        const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

        return formattedDate;
    }

    const getYear = (inputDate) => {
        const date = new Date(inputDate)

        return date.getFullYear()
    }

    return (
        <div className="text-[#3A354F] grid grid-cols-1 gap-1 bg-[#f7f7f8] w-full py-6 sm:px-6 px-2">    
        <div className='mb-3'>
            <h1 className="font-medium text-2xl ">Sejarah Perusahaan | <span className="text-sm italic text-[#BDBDBD]">Business Milestone</span></h1>
        </div>   
        <div className="py-5 w-11/12 sm:w-10/12 mx-auto">
            <ol class="text-gray-500 border-l-2 border-[#E0E0E0]">
                <li class="ml-11 relative mb-10 p-6">
                    <span class="top-0 text-sm italic absolute flex items-center justify-center px-2.5 py-1.5 font-extrabold text-white bg-[#124C83] rounded-md -left-16 rin1-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                    </span>
                </li>
                {sejarahData.data.sejarah.map(item => {
                    return (
                        <>
                            <li class="relative mb-10 bg-white rounded-lg shadow-lg p-6 ml-11">            
                                <span class="text-sm italic absolute flex items-center justify-center w-10 h-10 bg-[#EFDEFF] rounded-full -left-16 top-0 ring-white">{getYear(item.tanggal)}</span>
                                <h3 class="font-medium text-xl pb-1 leading-tight border-b">{formatDate(item.tanggal)}</h3>
                                <p class="text-base py-2">{item.judul_indo}</p>
                            </li>
                        </>
                    )
                })}
                <li class="ml-11 relative mb-10 p-6">
                    <span class="text-sm italic absolute flex items-center justify-center w-6 h-7 font-extrabold text-white bg-[#124C83] rounded-md -left-14 rin1-white">
                        .
                    </span>
                </li>
            </ol>
        </div>     

        </div>
    )
}