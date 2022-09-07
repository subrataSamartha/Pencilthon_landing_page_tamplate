import React from 'react'
import { useLocation } from 'react-router-dom';
const Footer = () => {
      // get location
      const loc = useLocation();
      const url = loc.pathname;
  return (
    <div className='w-full relative'>
        {url === "/" && (
        <button
        
        className="absolute top-4 right-4 group md:p-4 p-3 text-red-primary rounded-md md:m-2 shadow-white-3 bg-gradient-to-tl from-white to-gray-box bg-white transition-all duration-300 ease-in hover:from-transparent hover:to-transparent hover:bg-red-primary hover:-translate-y-1  hover:text-white"
      >
          Edit
        </button>
      )}
<footer class="p-4 md:px-12 md:py-10 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
    
    <span class="text-sm text-gray-500 sm:text-center">© 2022 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
   
</footer>

    </div>
  )
}

export default Footer