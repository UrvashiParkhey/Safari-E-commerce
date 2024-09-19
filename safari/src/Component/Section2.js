import React from "react";
import { useNavigate } from "react-router-dom";

function Section2() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[100%] h-[120vh] justify-center items-center">
      <div className="flex justify-center items-center w-[90%] h-[100vh]">
        <div className="w-[50%]  bg-[green]">
          <img
            className="h-[100vh]"
            src="https://rukminim2.flixcart.com/image/850/1000/xif0q/suitcase/s/a/w/55-aqua-cabin-size-unbreakable-polycarbonate-hard-trolley-original-imagzs3dzzha7fje.jpeg?q=90&crop=false"
          ></img>
        </div>
        <div className="w-[45%] h-[100vh] ">
            <div className="flex ml-9 pt-[40%] gap-3 flex-col">
<label className="text-[#071941] text-[13.7px] tracking-[1px] font-[600] ">INTRODUCING</label>
<label className="text-[#071941] text-[40px] font-sans font-[600]">Expandable Hard Luggage</label>
<label className="leading-6 text-[14px] text-[#000000bf] tracking-[.8px]">Available in medium and large sizes, these bags boast a 25% increase in packing capacity, ensuring you never have to leave anything behind. Perfect for spontaneous shopping sprees or extended trips</label>
  <button onClick={()=> navigate('/product-detail')} className="tracking-[2px] text-[13px] w-[28%]  font-[600] h-[8vh] mt-3 bg-[#4C99FF] text-white">SHOP NOW</button>     
            </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
