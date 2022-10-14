import React from 'react'
import "./Mobileviewdrawer.css"

function Mobileviewdrawer() {
    const mobiled = ()=>{
       const a = document.querySelector("#mobiledrawer");
        a.classList.toggle("anim");
    }
  return (
    <div id='mobiledrawer' className="container  md:hidden fixed z-50 bg-white transition-all ease-out duration-200 -left-[800px] top-0 bottom-0 w-[80vw] h-screen ">
        <div className="flex justify-center">
            <div className=" flex flex-col">
                
                    <div className="flex relative bg-orange-500 w-[80vw] h-[200px] justify-center items-center ">
                            <div className='absolute flex right-0 top-0 rounded h-5 hover:scale-105 transition-transform  mx-2 p-3 ' onClick={mobiled} ><i class="fa-solid fa-xmark fa-xl"></i></div>
                            <div className="container bg-yellow-500 h-[5rem] w-[5rem] justify-center items-center text-center align-middle flex rounded-full">
                                    <i className="  fa-solid fa-user fa-2xl"></i>
                            </div>
                    </div>

                    <div className="flex relative justify-start px-2 ">
                        <ul className='flex-col text-sm w-[10rem] font-serif capitalize'>
                            <li className='p-2  rounded-l hover:bg-gray-300 pr-5 flex group'>Furniture
                            <ul className='flex-col hidden absolute group-hover:flex top-0 bg-gray-300 px-3 mx-2 -right-1'>
                                <li className='p-1 py-2'>Sofas and Recliners</li>
                                <li className='p-1 py-2'>Seating</li>
                                <li className='p-1 py-2'>Chairs</li>
                                <li className='p-1 py-2'>Beds</li>
                                <li className='p-1 py-2'>Cabinetry</li>
                                <li className='p-1 py-2'>Tables</li>
                                <li className='p-1 py-2'>Dining</li>
                                <li className='p-1 py-2'>Kids and Teens</li>
                                <li className='p-1 py-2'>Home office</li>
                                <li className='p-1 py-2'>Sofa chairs</li>
                                <li className='p-1 py-2'>Entertainment</li>
                                <li className='p-1 py-2'>outdoor</li>
                                <li className='p-1 py-2'>Bar furniture</li>


                            </ul>
                            </li>
                            <li className='p-1 py-2 rounded-l hover:bg-gray-300 pr-5 flex group'>Storage
                            <ul className='flex-col hidden absolute group-hover:flex top-0 bg-gray-300 px-3 mx-2 -right-1'>
                            <li className='p-1 py-2'>Sofas and Recliners</li>
                                <li className='p-1 py-2'>Seating</li>
                                <li className='p-1 py-2'>Chairs</li>
                                <li className='p-1 py-2'>Beds</li>
                                <li className='p-1 py-2'>Cabinetry</li>
                                <li className='p-1 py-2'>Tables</li>
                                <li className='p-1 py-2'>Dining</li>
                                <li className='p-1 py-2'>Kids and Teens</li>
                                <li className='p-1 py-2'>Home office</li>
                                <li className='p-1 py-2'>Sofa chairs</li>
                                <li className='p-1 py-2'>Entertainment</li>
                                <li className='p-1 py-2'>outdoor</li>
                                <li className='p-1 py-2'>Bar furniture</li>


                            </ul>
                            </li>
                            <li className='p-1 py-2 rounded-l hover:bg-gray-300 pr-5 flex group'>Beds&Mattresses
                            <ul className='flex-col hidden absolute group-hover:flex top-0 bg-gray-300 px-3 mx-2 -right-1'>
                            <li className='p-1 py-2'>Sofas and Recliners</li>
                            <li className='p-1 py-2'>Sofas and Recliners</li>
                                <li className='p-1 py-2'>Seating</li>
                                <li className='p-1 py-2'>Chairs</li>
                                <li className='p-1 py-2'>Beds</li>
                                <li className='p-1 py-2'>Cabinetry</li>
                                <li className='p-1 py-2'>Tables</li>
                                <li className='p-1 py-2'>Dining</li>
                                <li className='p-1 py-2'>Kids and Teens</li>
                                <li className='p-1 py-2'>Home office</li>
                                <li className='p-1 py-2'>Sofa chairs</li>
                                <li className='p-1 py-2'>Entertainment</li>
                                <li className='p-1 py-2'>outdoor</li>
                                <li className='p-1 py-2'>Bar furniture</li>


                            </ul>
                            </li>
                            <li className='p-1 py-2 rounded-l hover:bg-gray-300 pr-5 flex group'>Dining& Bar
                            <ul className='flex-col hidden absolute group-hover:flex top-0 bg-gray-300 px-3 mx-2 -right-1'>
                            <li className='p-1 py-2'>Sofas and Recliners</li>
                                <li className='p-1 py-2'>Seating</li>
                                <li className='p-1 py-2'>Chairs</li>
                                <li className='p-1 py-2'>Beds</li>
                                <li className='p-1 py-2'>Cabinetry</li>
                                <li className='p-1 py-2'>Tables</li>
                                <li className='p-1 py-2'>Dining</li>
                                <li className='p-1 py-2'>Kids and Teens</li>
                                <li className='p-1 py-2'>Home office</li>
                                <li className='p-1 py-2'>Sofa chairs</li>
                                <li className='p-1 py-2'>Entertainment</li>
                                <li className='p-1 py-2'>outdoor</li>
                                <li className='p-1 py-2'>Bar furniture</li>


                            </ul>
                            </li>
                            <li className='p-1 py-2 rounded-l hover:bg-gray-300 pr-5 flex group'>sofas&Recliners
                            <ul className='flex-col hidden absolute group-hover:flex top-0 bg-gray-300 px-3 mx-2 -right-1'>
                            <li className='p-1 py-2'>Sofas and Recliners</li>
                                <li className='p-1 py-2'>Seating</li>
                                <li className='p-1 py-2'>Chairs</li>
                                <li className='p-1 py-2'>Beds</li>
                                <li className='p-1 py-2'>Cabinetry</li>
                                <li className='p-1 py-2'>Tables</li>
                                <li className='p-1 py-2'>Dining</li>
                                <li className='p-1 py-2'>Kids and Teens</li>
                                <li className='p-1 py-2'>Home office</li>
                                <li className='p-1 py-2'>Sofa chairs</li>
                                <li className='p-1 py-2'>Entertainment</li>
                                <li className='p-1 py-2'>outdoor</li>
                                <li className='p-1 py-2'>Bar furniture</li>


                            </ul>
                            </li>
                            <li className='p-1 py-2 rounded-l hover:bg-gray-300 pr-5 flex group'>WallAccents
                            <ul className='flex-col hidden absolute group-hover:flex top-0 bg-gray-300 px-3 mx-2 -right-1'>
                            <li className='p-1 py-2'>Sofas and Recliners</li>
                                <li className='p-1 py-2'>Seating</li>
                                <li className='p-1 py-2'>Chairs</li>
                                <li className='p-1 py-2'>Beds</li>
                                <li className='p-1 py-2'>Cabinetry</li>
                                <li className='p-1 py-2'>Tables</li>
                                <li className='p-1 py-2'>Dining</li>
                                <li className='p-1 py-2'>Kids and Teens</li>
                                <li className='p-1 py-2'>Home office</li>
                                <li className='p-1 py-2'>Sofa chairs</li>
                                <li className='p-1 py-2'>Entertainment</li>
                                <li className='p-1 py-2'>outdoor</li>
                                <li className='p-1 py-2'>Bar furniture</li>


                            </ul>
                            </li>
                            <li className='p-1 py-2 rounded-l hover:bg-gray-300 pr-5 flex group'>Decor
                            <ul className='flex-col hidden absolute group-hover:flex top-0 bg-gray-300 px-3 mx-2 -right-1'>
                            <li className='p-1 py-2'>Sofas and Recliners</li>
                                <li className='p-1 py-2'>Seating</li>
                                <li className='p-1 py-2'>Chairs</li>
                                <li className='p-1 py-2'>Beds</li>
                                <li className='p-1 py-2'>Cabinetry</li>
                                <li className='p-1 py-2'>Tables</li>
                                <li className='p-1 py-2'>Dining</li>
                                <li className='p-1 py-2'>Kids and Teens</li>
                                <li className='p-1 py-2'>Home office</li>
                                <li className='p-1 py-2'>Sofa chairs</li>
                                <li className='p-1 py-2'>Entertainment</li>
                                <li className='p-1 py-2'>outdoor</li>
                                <li className='p-1 py-2'>Bar furniture</li>


                            </ul>
                            </li>
                            <li className='p-1 py-2 rounded-l hover:bg-gray-300 pr-5 flex group'>Lighting
                            <ul className='flex-col hidden absolute group-hover:flex top-0 bg-gray-300 px-3 mx-2 -right-1'>
                            <li className='p-1 py-2'>Sofas and Recliners</li>
                                <li className='p-1 py-2'>Seating</li>
                                <li className='p-1 py-2'>Chairs</li>
                                <li className='p-1 py-2'>Beds</li>
                                <li className='p-1 py-2'>Cabinetry</li>
                                <li className='p-1 py-2'>Tables</li>
                                <li className='p-1 py-2'>Dining</li>
                                <li className='p-1 py-2'>Kids and Teens</li>
                                <li className='p-1 py-2'>Home office</li>
                                <li className='p-1 py-2'>Sofa chairs</li>
                                <li className='p-1 py-2'>Entertainment</li>
                                <li className='p-1 py-2'>outdoor</li>
                                <li className='p-1 py-2'>Bar furniture</li>


                            </ul>
                            </li>
                            <li className='p-1 py-2  rounded-l hover:bg-gray-300 pr-5 flex group'>Furnishings
                            <ul className='flex-col hidden absolute group-hover:flex top-0 bg-gray-300 px-3 mx-2 -right-1'>
                            <li className='p-1 py-2'>Sofas and Recliners</li>
                                <li className='p-1 py-2'>Seating</li>
                                <li className='p-1 py-2'>Chairs</li>
                                <li className='p-1 py-2'>Beds</li>
                                <li className='p-1 py-2'>Cabinetry</li>
                                <li className='p-1 py-2'>Tables</li>
                                <li className='p-1 py-2'>Dining</li>
                                <li className='p-1 py-2'>Kids and Teens</li>
                                <li className='p-1 py-2'>Home office</li>
                                <li className='p-1 py-2'>Sofa chairs</li>
                                <li className='p-1 py-2'>Entertainment</li>
                                <li className='p-1 py-2'>outdoor</li>
                                <li className='p-1 py-2'>Bar furniture</li>


                            </ul>
                            </li>
                            <li className='p-1 py-2 rounded-l hover:bg-gray-300 pr-5 flex group'>Carpets
                            <ul className='flex-col hidden absolute group-hover:flex top-0 bg-gray-300 px-3 mx-2 -right-1'>
                            <li className='p-1 py-2'>Sofas and Recliners</li>
                                <li className='p-1 py-2'>Seating</li>
                                <li className='p-1 py-2'>Chairs</li>
                                <li className='p-1 py-2'>Beds</li>
                                <li className='p-1 py-2'>Cabinetry</li>
                                <li className='p-1 py-2'>Tables</li>
                                <li className='p-1 py-2'>Dining</li>
                                <li className='p-1 py-2'>Kids and Teens</li>
                                <li className='p-1 py-2'>Home office</li>
                                <li className='p-1 py-2'>Sofa chairs</li>
                                <li className='p-1 py-2'>Entertainment</li>
                                <li className='p-1 py-2'>outdoor</li>
                                <li className='p-1 py-2'>Bar furniture</li>


                            </ul>
                            </li>
                            <li className='p-1 py-2 rounded-l hover:bg-gray-300 pr-5 flex group'>Appliances
                            <ul className='flex-col hidden absolute group-hover:flex top-0 bg-gray-300 px-3 mx-2 -right-1'>
                            <li className='p-1 py-2'>Sofas and Recliners</li>
                                <li className='p-1 py-2'>Seating</li>
                                <li className='p-1 py-2'>Chairs</li>
                                <li className='p-1 py-2'>Beds</li>
                                <li className='p-1 py-2'>Cabinetry</li>
                                <li className='p-1 py-2'>Tables</li>
                                <li className='p-1 py-2'>Dining</li>
                                <li className='p-1 py-2'>Kids and Teens</li>
                                <li className='p-1 py-2'>Home office</li>
                                <li className='p-1 py-2'>Sofa chairs</li>
                                <li className='p-1 py-2'>Entertainment</li>
                                <li className='p-1 py-2'>outdoor</li>
                                <li className='p-1 py-2'>Bar furniture</li>


                            </ul>
                            </li>
                            <li className='p-1 py-2 rounded-l hover:bg-gray-300 pr-5 flex group'>Garden&Outdoor
                            <ul className='flex-col hidden absolute group-hover:flex top-0 bg-gray-300 px-3 mx-2 -right-1'>
                            <li className='p-1 py-2'>Sofas and Recliners</li>
                                <li className='p-1 py-2'>Seating</li>
                                <li className='p-1 py-2'>Chairs</li>
                                <li className='p-1 py-2'>Beds</li>
                                <li className='p-1 py-2'>Cabinetry</li>
                                <li className='p-1 py-2'>Tables</li>
                                <li className='p-1 py-2'>Dining</li>
                                <li className='p-1 py-2'>Kids and Teens</li>
                                <li className='p-1 py-2'>Home office</li>
                                <li className='p-1 py-2'>Sofa chairs</li>
                                <li className='p-1 py-2'>Entertainment</li>
                                <li className='p-1 py-2'>outdoor</li>
                                <li className='p-1 py-2'>Bar furniture</li>


                            </ul>
                            </li>
                        </ul>
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default Mobileviewdrawer