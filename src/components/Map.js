import React from "react";
import image from "../assets/images/map.png"

export default function Map() {
    return (
        <div style={{
            height: '200px',
        }}>
            <img style={{height: '400px',objectFit:'cover'}} src={image} alt="mapimage"></img>
        </div>
    );
}
