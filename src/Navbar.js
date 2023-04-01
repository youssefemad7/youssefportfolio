import React from 'react'
import { faHouse, faUser, faBriefcase, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  return (
    <div className='navbar1'>
      

      <nav class=" border-gray-200 dark:bg-gray-900 navv">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-5">
    
    
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 mb-4 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto navlinks" id="navbar-default">
    <ul class="font-medium flex flex-col    md:p-5   rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>

        <Link to="/">   
        <FontAwesomeIcon icon={faHouse}  className='icon2 '/>
        <h2 className='h2nav'>Home</h2>
         </Link>     
            </li>
        <li>

        <Link to='/About'>   
       <FontAwesomeIcon icon={faUser}  className='icon2'/>
       <h2 className='h2nav'>About</h2>

      </Link>    
            </li>
        
        <li>

        <Link to='/portfolio'>
       <FontAwesomeIcon icon={faBriefcase}  className='icon2'/>
       <h2 className='h2nav'>portfolio</h2>

      </Link> 
           </li>
        <li>

        <Link to='/contact'>
       <FontAwesomeIcon icon={faEnvelopeOpen}  className='icon2'/>
       <h2 className='h2nav'>contact</h2>

      </Link>
                </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar