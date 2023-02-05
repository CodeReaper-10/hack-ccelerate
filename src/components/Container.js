import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import CarModel from "./CarModel";
import Map from "./Map";
import ServiceItems from "./ServiceItems";

export default function Container() {
  return (
    <div className="grid grid-cols-3 p-5">
      <ServiceItems />
      
      <Canvas>
        <CarModel />
      </Canvas>
      <Map />
      
    </div>
  );
}
