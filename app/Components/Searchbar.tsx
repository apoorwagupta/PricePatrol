"use client"
import React from 'react'

// client side rendered component
// interacitve component, use client
const Searchbar = () => {
  const handleSubmit=()=>{} 
  return (
    <form
      className='flex flex-wrap gap-4 mt-12'
      onSubmit={handleSubmit}
    >  
      <input type='text' placeholder='Enter product link'
      className='searchbar-input'/>
      
    </form>
  )
}

export default Searchbar

