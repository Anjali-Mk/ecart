import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return (
    <div className='min-h-80 bg-violet-900 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]'>
        <div className='p-3'>
        <h1 className='text-white text-4xl'><FontAwesomeIcon icon={faCartShopping} style={{color: "#f3f1f1",}} /> Ecart</h1>
        <p className='text-white pt-7 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam dolorum vel molestias necessitatibus. Ullam voluptates eaque deserunt, voluptatem, quod iusto quidem laudantium ad similique quibusdam non qui mollitia id!</p>
        </div>

        <div className=' p-3 text-white'>
            <h1 className='text-4xl'>Links</h1>
        <div className='p-3'>
            <p className='mt-4'><a href="">Home</a></p>
            <p className='mt-3'><a href="">Wishlist</a></p>
            <p className='mt-3'><a href="">Cart</a></p>
        </div>
        </div>

        <div className=' p-3 text-white'>
        <h1 className='text-4xl'>Guides</h1>
          <div className='p-3'>
            <p className='mt-4'><a href="">React</a></p>
            <p className='mt-3'><a href="">React Bootstrap</a></p>
            <p className='mt-3'><a href="">Bootswatch</a></p>
        </div>
        </div>

        <div className=' p-2 text-white'>
        <h1 className='text-4xl ms-2'>Contact us</h1>
        <input className='m-3 rounded p-2' type="text" placeholder='Email id' />
        <button className='btn bg-orange-600 rounded py-2 px-2'>Subscribe</button>
        <div className='flex justify-between text-3xl pt-3 md:pe-44 ps-3 mt-5'>
        <button><FontAwesomeIcon icon={faTwitter} style={{color: "#f4f7fa",}} /></button>        
        <button><FontAwesomeIcon icon={faLinkedinIn} style={{color: "#fafafa",}} /></button>       
        <button><FontAwesomeIcon icon={faFacebook} style={{color: "#fcfcfd",}} /></button>      
        <button><FontAwesomeIcon icon={faInstagram} style={{color: "#f9fafb",}} /></button>       
        </div>
        </div>





      
    </div>
  )
}

export default Footer
