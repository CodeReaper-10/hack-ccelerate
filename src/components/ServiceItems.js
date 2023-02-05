import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

export default function ServiceItems() {
  const services = [
    "EV Charging Stations",
    "Flat Tire",
    "Towing Truck",
    "Accident",
    "Mechanic ",
  ];
  const navigate = useNavigate();

  return (
    <div className="border-2 border-white p-5 px-10 ">
      {services.map((service) => {
        return <ServiceBlock service={service} navigate={navigate} />;
      })}
    </div>
  );
}

const ServiceBlock = (props) => {
 
  
  return (
    <div
      className="border-2 border-white p-2  my-5 rounded-lg cursor-pointer "
      onClick={() => {
        props.navigate("/service/" + props.service);
      }}
    >
      <p className="text-lg font-bold text-center">{props.service}</p>
    </div>
  );
};
