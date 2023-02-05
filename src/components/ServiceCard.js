import React from "react";

export default function ServiceCard(props) {
  const services=props.services;
  return (
    <div className="flex p-5 border-2 border-white ">
      <div className="mx-10" style={{ height: "10px" }}>
        <img
          style={{ objectFit: "cover", height: "100px" }}
          src={services[3]}
          alt="profile"
        />
      </div>
      <div>
        <div className="text-xl  my-2">
          <p >{services[0]} </p>
          <p>{services[1]} </p>
          <p>{services[2]}</p>
        </div>
        <div className="text-center">
          <button style={{ backgroundColor:"white",color:"black" , padding:5 , border:"1px solid grey",borderRadius:5 }}>contact</button>
        </div>
      </div>
    </div>
  );
}
