import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { db } from "../firebase";

export default function Services(props) {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const docRef = doc(db, "hack-ccelerate", "car_shops");
    const getData = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const propertyValues = Object.values(data);
        setServices(propertyValues);
      } else {
        console.log("No such document!");
      }
    };
    getData();
  }, []);

  return (
    <div>
      {services.map((val) => {
        return <ServiceCard services={val} />;
      })}
    </div>
  );
}
