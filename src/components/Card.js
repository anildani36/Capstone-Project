// page is currently not in use

import React from 'react'
import { NavLink } from 'react-router-dom'

function Card(props) {
    return (
        <div>
             <div style={{width:'320px',margin:'20px'}}>
                 <div className="card" >
  <img src={props.image} className="card-img-top" alt={props.image}/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.name}</h5>
    <p className="card-text">{props.description}</p>
    <NavLink to="" className="btn btn-primary">Lets Go</NavLink>
  </div>
</div>
                 </div>
            
        </div>
    )
}

export default Card



