import React from 'react'
import logo from '../assets/img_header_logo.png'

export default function NavBar() {
  return (
    
    <div class=" flex gap-20 mt-10 right-6 bg-gray-100 height-50" >
      <img src={logo} alt="img" width='150px' height='20px'class='ml-14' />
    
     <ol class='text-bold ml-40 mt-3 font-serif font-bold'>Home</ol>
     <ol class=' mt-3 font-serif font-bold'>Listing</ol>
     <ol class=' mt-3 font-serif font-bold'>Agents</ol>
     <ol class=' mt-3 font-serif font-bold'>Property</ol>
     <ol class=' mt-3 font-serif font-bold'>Blog</ol>
     <div class='p-3 ml-6 font-mono'>
      SIGN IN 
     </div>
     <div class='p-3 font-mono bg-black text-white rounded h-1/2'>
       LOG IN 
     </div>
    </div>

  )
}
