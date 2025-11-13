import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white py-10'>
      <div className='max-w-6xl mx-auto px-6'>
        <p className='text-center'>
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
        </div>
  )
}

export default Footer