import React from "react";

export default function ServiceCard() {
  return (
    <div className="flex p-5 border-2 border-white ">
      <div className="mx-10" style={{ height: "10px" }}>
        <img
          style={{ objectFit: "cover", height: "100px" }}
          src="https://images.news18.com/ibnlive/uploads/2016/04/ironman.jpg?im=FitAndFill,width=1200,height=900"
          alt="profile"
        />
      </div>
      <div>
        <div className="text-xl  my-2">
          <p >Ironman </p>
          <p>78686766 </p>
          <p>jdavjhavcfv@gmail.com</p>
        </div>
        <div className="text-center">
          <button style={{ backgroundColor:"white",color:"black" , padding:5 , border:"1px solid grey",borderRadius:5 }}>contact</button>
        </div>
      </div>
    </div>
  );
}
