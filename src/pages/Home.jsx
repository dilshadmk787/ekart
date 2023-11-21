import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addTowishlist } from '../redux/slice/wishlistSlice';
import { addTocart } from '../redux/slice/cartSlice';

function Home() {

  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);
//to call a function that add value to state
 const dispatch = useDispatch()

  return (
    <Row className='ms-3 me-3' style={{marginTop:'150px'}}>
      {data?.length>0?
      data?.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '100%'}}>
      <Card.Img variant="top" src={item.image} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title style={{overflowY:'hidden'}}>{item.title.slice(0,20)}....</Card.Title>
        <Card.Text>
          <p>{item.description.slice(0,40)}...</p>
          <p className='fw-bolder'>{item.price}$</p>
        </Card.Text>
  <div className='d-flex align-items-center justify-content-between'>
          <Button onClick={()=>dispatch(addTowishlist(item))} variant="outline-success"><i class="fa-solid fa-heart" style={{color:'red'}}></i></Button>
          <Button onClick={()=>dispatch(addTocart(item))} variant="outline-danger"><i class="fa-solid fa-cart-shopping fa-flip-horizontal" style={{color: '#ffdb57'}}></i></Button>
  </div>

      </Card.Body>
    </Card>
      </Col>))
       :<p>nothing to display</p>}
    </Row>
  )
}

export default Home