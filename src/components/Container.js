import React, { useState } from 'react'
import Map from './Map'
import ServiceItems from './ServiceItems'

export default function Container() {
   const[service,setService] = useState(true);
  return (
    <div className='grid grid-cols-3 p-5'>
      {service?<ServiceItems className="w-1/3 "/>:""}
        <Map className="w-2/3"/>
        </div>
  )
}
