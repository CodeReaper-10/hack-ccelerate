import React from "react";

export default function ServiceItems() {
  const services = [
    "EV Charging Stations",
    "Flat Tire",
    "Towing Truck",
    "Accident",
    "Mechanic ",
  ];
  return (
    <div className="border-2 border-white p-5 px-10 ">
      {services.map((service) => {
        return <ServiceBlock service={service} />;
      })}
    </div>
  );
}
const ServiceBlock = (props) => {
  return (
    <div className="border-2 border-white p-2  my-5 rounded-lg cursor-pointer " onClick={() => {}}>
      <p className="text-lg font-bold text-center">{props.service}</p>
    </div>
  );
};
