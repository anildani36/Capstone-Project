import React, {useState}from 'react'
import  { useContext} from 'react'

// import Card from './Card';
import { SerData } from '../helper/SerData';
import '../css/Services.css';
import {ButtonGroup, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import CartContext from '../context/cart/CartContext';


function Services() {
  const[items, setItems] = useState( SerData);
  const {addToCart}  = useContext(CartContext);


  const filterItem = (categItem) => {
    const updatedItems = SerData.filter((curElem) => {
      return curElem.category === categItem;

    });
    setItems(updatedItems);
  }
    return (
        <>
        <div className="my-5">
<h1 className="text-center">Our Services</h1>
<>
<div className="text-center text-bold">
<ButtonGroup aria-label="Basic example">
  <Button variant="outline-primary" onClick={()=> filterItem('cake')}>CAKES</Button>
  <Button variant="outline-danger" onClick={()=> filterItem('chocolate')}>CHOCOLATES</Button>
  <Button variant="outline-primary"  onClick={()=> filterItem('sweet')}>SWEETS</Button>
  <Button variant="outline-danger"  onClick={()=> filterItem('cand')}>CANDIES</Button>
  <Button variant="outline-primary"  onClick={()=> filterItem('dess')}>DESSERTS</Button>
  <Button variant="outline-danger"  onClick={()=> filterItem('dried')}>DRIED FRUITS</Button>
  <Button variant="dark"  onClick={()=>setItems(SerData)}>ALL ITEMS</Button>

</ButtonGroup>
  </div>
</>
</div>
 <div className="container-fluid mb-5">
     <div className="row">
         <div className="col-10 mx-auto">    
         <div className="grid">  

         {
           items.map((elem)=>{
             const {image, names, price, description} = elem;
             return(
               <><div>
               <div style={{width:'320px',margin:'20px'}}>
                   <div className="card" >
    <img src={image} className="card-img-top" alt={image}/>
    <div className="card-body">
      <h5 className="card-title font-weight-bold">{names}</h5>
      <h6 className="card-title font-weight-bold">Rs{price}/-</h6>
      <p className="card-text">{description}</p>
      {/* <a href="" className="btn btn-primary">Lets Go</a> */}
      <NavLink to="" className="btn btn-primary" onClick={() => addToCart(elem)}>Lets Go</NavLink>
    </div>
  </div>
                   </div>
              
          </div></>
             )
           })
         }   
{/*          
               {SerData.map((val, ind)=>{
                    return <Card key= {ind} image={val.image} name={val.names} description={val.description} />
                }) }  */}
                   </div>
                   </div>
                   </div>
         </div>
     
 
 </>
    )
}

export default Services


