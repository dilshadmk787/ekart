import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromwishlist } from '../redux/slice/wishlistSlice';
import { addTocart } from '../redux/slice/cartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const handlewishlist =(item)=>{
    dispatch(addTocart(item))
    dispatch(removeFromwishlist(item.id))
  }
  return (
    <div style={{marginTop:'150px'}}>

<Row className='ms-3 me-3' style={{marginTop:'150px'}}>
  {wishlistArray.length>0?
  wishlistArray?.map((item)=>(
    <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '100%'}}>
      <Card.Img variant="top" src={item.image} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title style={{overflowY:'hidden'}}>{item.title.slice(0,20)}....</Card.Title>
        <Card.Text>
          <p>{item.description.slice(0,40)}...</p>
          <p className='fw-bolder'>{item.price}$</p>
        </Card.Text>
  <div className='d-flex align-items-center justify-content-between'>
          <Button onClick={()=>dispatch(removeFromwishlist(item.id))}  variant="outline-success"><i class="fa-solid fa-trash" style={{color:'red'}}></i></Button>
          <Button onClick={()=>handlewishlist(item)} variant="outline-danger"><i class="fa-solid fa-cart-shopping fa-flip-horizontal" style={{color: '#ffdb57'}}></i></Button>
  </div>

      </Card.Body>
    </Card>
      </Col>
  ))
  :<p>
    nothing in wishlist </p>}
    </Row>
    </div>
  )
}

export default Wishlist