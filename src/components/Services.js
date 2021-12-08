import React from 'react'
import Card from './Card';
import { SerData } from '../helper/SerData';
import '../css/Services.css';


function Services() {
    return (
        <>
        <div className="my-5">
<h1 className="text-center">Our Services</h1>
</div>
 <div className="container-fluid mb-5">
     <div className="row">
         <div className="col-10 mx-auto">    
         <div className="grid">     
         
               {SerData.map((val, ind)=>{
                    return <Card key= {ind} image={val.image} name={val.name} description={val.description} />
                }) } 
                   </div>
                   </div>
                   </div>
         </div>
     
 
 </>
    )
}

export default Services


