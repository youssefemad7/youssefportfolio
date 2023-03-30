import React from 'react'
import { faHouse, faUser, faBriefcase, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import './App.css';


const Sidenav = () => {
  return (
<div className='sidenav'>
  
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ms-500 ">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0  sidenav  " aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50  bg-black">
      <ul className="space-y-2 font-medium">
         <li className='sidenav1'>
           
            <Link to="/">   
        <FontAwesomeIcon icon={faHouse}  className='icon2'/>
        <h2>Home</h2>
         </Link>
         </li>
         <li className='sidenav1'>
         <Link to='/About'>   
       <FontAwesomeIcon icon={faUser}  className='icon2'/>
       <h3>About</h3>

      </Link>
         </li>
       
        
         <li className='sidenav1'>
         <Link to='/portfolio'>
       <FontAwesomeIcon icon={faBriefcase}  className='icon2'/>
       <h4>portfolio</h4>

      </Link>
         </li>
         <li className='sidenav1'>
         <Link to='/contact'>
       <FontAwesomeIcon icon={faEnvelopeOpen}  className='icon2'/>
       <h5>contact</h5>

      </Link>
         </li>
      </ul>
   </div>
</aside>



</div> 
 )
}

export default Sidenav;