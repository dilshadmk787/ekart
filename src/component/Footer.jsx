import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div style={{height:'300px', color:'white'}} className='d-flex justify-content-center align-items-center w-100 flex-column bg-primary'>
    <div className='d-flex justify-content-evenly align-items-center w-100'>
      <div className='websites' style={{width:'400px'}}>
        <h2 className='mb-3' style={{overflowY:'hidden'}}>
        <i class="fa-solid fa-cart-shopping" style={{color:'#f6f8f2'}}></i>
           E-kart
        </h2>
        <h6  style={{overflowY:'hidden'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ipsum nulla placeat reiciendis atque iure! Amet eius ipsam quasi sed praesentium impedit, reiciendis voluptatem earum, perspiciatis cupiditate, tempore sunt qui.</h6>
      </div>
      <div className='links d-flex flex-column'>
        <h4 className='mb-3'  style={{overflowY:'hidden'}}>links</h4>
        <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home</Link>
        <Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>Cart</Link>
        <Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}>wishlist</Link>



      </div>
      <div className='guides d-flex flex-column'>
        <h4 className='mb-3'  style={{overflowY:'hidden'}}>guides</h4>
        <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}} >React</Link>
      <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}} >React Bootstarp</Link>
      <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}} >Bootswatch</Link>
      </div>

      <div className='contact d-flex flex-column'>
        <h4 className='mb-3'  style={{overflowY:'hidden'}}>contact us</h4>
        <div className='d-flex mb-2'>
          <input type="text" className='form-control bg-light' placeholder='enter email id' />
          <button className='btn btn-warning ms-2' style={{width:'50%'}}>suscribe</button>
        </div>

        <div className="d-flex justify-content-evenly align-items-center mt-4 bg-sucess">
      <Link to={'/'} style={{textDecoration:'none',color:'white'}} ><i class ="fa-brands fa-twitter fa-2x" ></i></Link>
      <Link to={'/'} style={{textDecoration:'none',color:'white'}} ><i class ="fa-brands fa-instagram fa-2x" ></i></Link>
      <Link to={'/'} style={{textDecoration:'none',color:'white'}} ><i class ="fa-brands fa-linkedin fa-2x" ></i></Link>
      <Link to={'/'} style={{textDecoration:'none',color:'white'}} ><i class ="fa-brands fa-facebook fa-2x" ></i></Link>

      </div>
      </div>
    </div>
  <p className='mt-5'>copyright © 2023 Ekart. build with react </p>
    </div>  )
}

export default Footer