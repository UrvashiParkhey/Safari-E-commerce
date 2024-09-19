import React from 'react'
import AllProduct from "../api/AllProduct.json";
import { Navigate, useNavigate } from 'react-router-dom';

function Backpack() {
    const navigate = useNavigate()
  return (

        <div>
          <div className="w-[100%]  relative    flex-col flex justify-center items-center ">
            <div className="w-[100%] flex flex-col gap-5 justify-center items-center">
              <label className="text-[30px] font-[700] text-[#071941]">
                Luggage & Trolley Bags
              </label>
              <div className="w-[100%]  flex">
                <div className="flex  flex-col h-[50vh] pl-[25px] gap-9 w-[20%]">
    
                  <div className=" flex flex-col gap-4 ">
                    <label className="text-[24px] font-bold">Filters</label>
    
                    <div className="h-[.3px] bg-[gray]"></div>
                  </div>
                  <div className=" flex flex-col gap-4  ">
                    <div className="flex gap-40">
                  <label className="text-[17px] font-bold text-[#808080dc]">Product-type</label>
                  <i class="fa fa-angle-down top-3 text-[24px] font-bold" aria-hidden="true"></i>
                  </div>
                  <div className="w-[100%] h-[.3px] bg-[gray]"></div>
                  </div>
                  <div className=" flex flex-col gap-4 ">
                  <div className="flex gap-[223px]">
    
                  <label className="text-[17px] font-bold text-[#808080dc]">Price</label>
                  <i class="fa fa-angle-down top-3 text-[24px] font-bold" aria-hidden="true"></i>
                  </div>
                  <div className="w-[100%] h-[.3px] bg-[gray]"></div>
                  </div>
                  <div className=" flex flex-col gap-4  ">
                  <div className="flex gap-[221px]">
    
                  <label className="text-[17px] font-bold text-[#808080dc]">Color</label>
                  <i class="fa fa-angle-down top-3 text-[24px] font-bold" aria-hidden="true"></i>
                  </div>
                  <div className="h-[.3px] bg-[gray]"></div>
                  </div>
                  <div className=" flex flex-col gap-4 ">
                  <div className="flex gap-[64%]">
    
                    <label className="text-[17px] font-bold text-[#808080dc]">Features</label>
                    <i class="fa fa-angle-down top-3 text-[24px] font-bold" aria-hidden="true"></i>
                  </div>
                    <div className="w-[100%] h-[.3px] bg-[gray]"></div>
                  </div>
                  <div className=" flex flex-col gap-4  ">
                  <div className="flex gap-[76%]">
    
                    <label className="text-[17px] font-bold text-[#808080dc] ">Size</label>
                    <i class="fa fa-angle-down top-3 text-[24px] font-bold" aria-hidden="true"></i>
                  </div>
                    <div className="h-[.3px] bg-[gray]"></div>
                  </div>
                  <div className=" flex flex-col gap-4  ">
                  <div className="flex gap-[63%]">
    
                    <label className="text-[17px] font-bold text-[#808080dc] ">Ocassion</label>
                    <i class="fa fa-angle-down top-3 text-[24px] font-bold" aria-hidden="true"></i>
                  </div>
    
                    <div className="h-[.3px] bg-[gray]"></div>
                  </div>
                  <div className=" flex flex-col gap-4  ">
                  <div className="flex gap-[67%]">
    
                    <label className="text-[17px] font-bold text-[#808080dc] ">Height</label>
                    <i class="fa fa-angle-down top-3 text-[24px] font-bold" aria-hidden="true"></i>
                    </div>
                    <div className="h-[.3px] bg-[gray]"></div>
                  </div>
                  <div className=" flex flex-col gap-4  ">
                  <div className="flex gap-[67%]">
    
                    <label className="text-[17px] font-bold text-[#808080dc] ">weight</label>
                    <i class="fa fa-angle-down top-3 text-[24px] font-bold" aria-hidden="true"></i>
                    </div>
                    <div className="h-[.3px] bg-[gray]"></div>
                  </div>
                  <div className=" flex flex-col gap-4  ">
                  <div className="flex gap-[56%]">
    
                    <label className="text-[17px] font-bold text-[#808080dc] ">Availability</label>
                    <i class="fa fa-angle-down top-3 text-[24px] font-bold" aria-hidden="true"></i>
                    </div>
                    <div className="h-[.3px] bg-[gray]"></div>
                  </div>
                  
                </div>
    
        
                <div className="w-[80%] pl-8 flex-wrap flex  gap-6 ">
                {AllProduct.filter((i)=> i.category==localStorage.getItem("category")).map((i)=>
                 <div onClick={()=> {localStorage.setItem("product" , JSON.stringify(i)) ;navigate("/product-detail")}} className="flex  flex-col w-[30%]">
                 <div className=" main h-[50vh]   flex flex-col ">
                    <div className=" first-div ">
                      <img
                        className="w-[100%] "
                        src={i.image}
                      ></img>
                    </div>
                    <div className=" second-div ">
                      <img
                        className="w-[100%] "
                        src={i.image2}
                      ></img>
                    </div>
                  </div>
                  <label className="text-[15px]  font-[500]">
                    {i.title}
                  </label>
                  <div className="flex  gap-3 flex-row">
                    <label className="text-[red]"> from ₹. {i.price.toLocaleString()}</label>
                    <label className="text-gray-500 line-through">₹. {(i.price * i.discount%100).toLocaleString()}</label>
                  </div> 
                 </div>
)}

              </div>

              </div>
          </div>
        </div></div>      );
    }
   
 
export default Backpack