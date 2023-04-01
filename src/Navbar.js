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
    
    
     
    <div class=" navlinks">
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