import React from 'react'
import { useLocation } from 'react-router-dom';
const Navbar = () => {
        // get location
        const loc = useLocation();
        const url = loc.pathname;
  return (
    <div>
        
<nav class="bg-body-color px-2 sm:px-4 py-6  w-full z-20 relative top-0 left-0 border-b border-gray-200 ">
{url === "/" && (
        <button
        
        className="absolute top-4 right-4 group md:p-4 p-3 text-red-primary rounded-md md:m-2 shadow-white-3 bg-gradient-to-tl from-white to-gray-box bg-white transition-all duration-300 ease-in hover:from-transparent hover:to-transparent hover:bg-red-primary hover:-translate-y-1  hover:text-white"
      >
          Edit
        </button>
      )}
  <div class="container md:px-10  flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-metal-black">Katei Zeher</span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="md:px-8 px-4 py-2.5 font-medium  m-1 transition-all duration-300 ease-in  text-red-primary rounded-md md:m-2 shadow-white-3 bg-gradient-to-tl from-white to-gray-box bg-white hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white">Login</button>
  </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar