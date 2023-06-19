import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import Logo from './Logo.jpg'
function Nav() {
  return (
    <div className='navbar'>
        <section className='Logo'><img src={Logo} height={80} width={100} alt="" /></section>
        <section className='nav-iteams'>
           <Link className='link' to='/'> <section className='forhover home'>Home</section></Link>
           <Link className='link' to='/Plants'> <section className='forhover'>Plants</section></Link>
           <Link className='link' to='Vegtables'> <section className='forhover'>Vegtables</section></Link>
           <Link className='link' to='/fruits'> <section className='forhover'>Fruits</section></Link>

           <section className="search">
          <input type="text" placeholder='enter a name'/>
        </section>
     
           
        </section>
    
        <section className="icone">
      
        <a href="https://www.facebook.com/">   <i class="fa-brands fa-facebook-f fa-xl" ></i></a>
      <a href="https://twitter.com/home"> <i class="fa-brands fa-twitter fa-xl"></i></a> 
      <a href="https://www.instagram.com/">   <i class="fa-brands fa-instagram fa-xl"></i></a> 
        </section>
    </div>
  )
}

export default Nav