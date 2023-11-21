import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { emptycart, removeFromcart } from '../redux/slice/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
const navigate = useNavigate()
  const handlecart = ()=>{
    alert('thankyou.... your order placed sucessfully')
    dispatch(emptycart())
    navigate('/')
  }


  const [total , setTotal]= useState(0)

  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray?.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    getTotal()
  },[cartArray]) 

 
const dispatch = useDispatch()
return (
    <div style={{marginTop:'150px'}}>
  <div className='row w-100'>
{cartArray?.length>0?
  <div className='col-lg-6 ms-5 d-flex'>
          <table className='table border shadow'>
            <thead>
              <th>#</th>
              <th>products</th>
              <th>price</th>
              <th>image</th>
              <th>action</th>
            </thead>
            <tbody>
              {cartArray?.map((item,index)=>(
                <tr>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td><img width={'100px'} src={item.image}  alt="" /></td>
                  <td>{item.price}</td>
                  <td><button onClick={()=>dispatch(removeFromcart(item.id))}><i class="fa-solid fa-cart-shopping fa-flip-horizontal" style={{color: '#ffdb57'}}></i></button> </td>

                </tr>
              ))}


            </tbody>
          </table>
          <div className='col-lg-4 d-flex justify-content-center align-items-center flex-columns'>
  <div className='border shadow p-5'>
                <h2 className='text-primary'>cart summary</h2>
                <h4> total products: {cartArray.length} </h4>
                <h4> total price: { total }$ </h4>
                <button onClick={()=>handlecart()} className='btn btn-success rounded mt-3 w-100'>checkout</button>
  </div>

</div>
</div>:<div><img src="https://media.tenor.com/Y3c23UQQ3MIAAAAC/empty-box.gif" width={'200px'} style={{textAlign:'center'}} alt="" /></div>}


  </div>

    </div> 
     )
}

export default Cart
