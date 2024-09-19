import React from "react";
import Header from "../Component/Header";
import Warranty from "../Component/Warranty";

function ProductDetail() {
  const productData = localStorage.getItem("product")
  const productObj = JSON.parse(productData)
  return (
    <div>
      <Header></Header>
      {productData}
      <div className="w-[100%]  h-[100vh] flex justify-center items-center ">
        <div className="w-[80%] justify-center gap-11 items-center flex">
          <div className="w-[60%] flex flex-row ">
            <div className="flex gap-3 flex-row">
          <div className='flex h-[85vh] w-[20%] justify-center items-center  gap-1 flex-col'>
<img className='w-[70%] duration-1000 hover:border-black hover:border-2' src='https://cdn.shopify.com/s/files/1/0651/0847/6121/files/1_23c25338-d39f-4697-bdce-41a6f937d650_3000x.jpg?v=1721228667'></img>
<img className='w-[70%] duration-1000 hover:border-black hover:border-2' src='https://cdn.shopify.com/s/files/1/0651/0847/6121/files/SF-PDP-CityMiles-01_3000x.jpg?v=1724840990'></img>
<img className='w-[70%] duration-1000 hover:border-black hover:border-2' src='https://cdn.shopify.com/s/files/1/0651/0847/6121/files/SF-PDP-CityMiles-04_3000x.jpg?v=1724840990'></img> 
 <img className='w-[70%]  duration-1000 hover:border-black hover:border-2' src='https://cdn.shopify.com/s/files/1/0651/0847/6121/files/SF-PDP-CityMiles-02_3000x.jpg?v=1724840990'></img>  
<img className='w-[70%]  duration-1000 hover:border-black hover:border-2' src='https://cdn.shopify.com/s/files/1/0651/0847/6121/files/SF-PDP-CityMiles-03_3000x.jpg?v=1724840990'></img>
<img className='w-[70%]  duration-1000 hover:border-black hover:border-2' src='https://cdn.shopify.com/s/files/1/0651/0847/6121/files/SF-PDP-CityMiles-05_1_3000x.jpg?v=1724840990'></img>
<img className='w-[70%]  duration-1000 hover:border-black hover:border-2' src='https://cdn.shopify.com/s/files/1/0651/0847/6121/files/SF-PDP-CityMiles-06_3000x.jpg?v=1724840990'></img>
<img className='w-[70%]  duration-1000 hover:border-black hover:border-2' src='https://cdn.shopify.com/s/files/1/0651/0847/6121/files/SF-PDP-CityMiles-07_1_3000x.jpg?v=1724840990'></img>
<img className='w-[70%]  duration-1000 hover:border-black hover:border-2' src='https://cdn.shopify.com/s/files/1/0651/0847/6121/files/2_def2355e-39d7-4655-a976-09b71cc8f460_3000x.jpg?v=1721228667'></img>
</div>
<div className="flex flex-row">

             <img  className="w-[100%]" src={productObj.image}></img>
          </div>
          </div>
          </div>






          <div className="w-[40%] flex flex-col gap-3 ">
            <label className=" leading-[30px] font-[400] text-[30px]">
              {productObj.title}
            </label>
            <label className="text-[15px] text-[#000000bd]">{productObj.price.toLocaleString()}</label>
            <div className="flex  gap-2 flex-row">
              <label className="text-[red] tracking-[1px] text-[18px]">Selling price₹. {(productObj.price* productObj.discount/100).toLocaleString()}.</label>
              <button className="px-2 py-1 bg-[red] text-[white]">SAVE 61%</button>
            </div>
            <div className="flex flex-col gap-1">
            <label className="text-[14px]">(inclusive of all taxes)</label>
            <label className="bg-[pink] w-[60%] px-1">Additional 5% Off on Online Payments</label>
            <div className="flex w-[50%]">
              <div className="flex  gap-1 flex-col">
                <img className="w-[70%]" src="https://cdn.shopify.com/s/files/1/0651/0847/6121/files/1_9f44066c-b14f-4a2a-9b7f-2c19e590b9c0_3000x.jpg?v=1721212564"></img>
              <label className="text-[#00000096]">Coral</label>
              </div>
              <div className="flex  gap-1 flex-col">
                <img className="w-[70%]" src="https://cdn.shopify.com/s/files/1/0651/0847/6121/files/1_23c25338-d39f-4697-bdce-41a6f937d650_3000x.jpg?v=1721228667"></img>
              <label className="text-[#00000096]">Coral</label>
              </div>
            </div>
            </div>

            <div className="flex flex-col gap-4">
            <div className=" flex gap-[70%]">
         <label className="text-[14px] text-[#212020] font-[600]">Size : cabin</label>
         <label className="text-[14px] border-b-2 duration-500 text-[#808080df] hover:text-[black] hover:border-[black]">Size chart</label>
         </div>
                <div className="flex gap-2">
                <button className="px-14 border-[1px] hover:border-[#949420]  text-[14px] border-gray-600 font-[600] py-3">Cabin</button>
                <button  className="px-14 border-[1px] hover:border-[#949420]  text-[14px] border-gray-600 font-[600] py-3">Medium</button>
                <button  className="px-14 border-[1px] hover:border-[#949420]  text-[14px] border-gray-600 font-[600] py-3">large</button>
                </div>
                <button className="bg-[#4C99FF] w-[100%] h-[6vh] text-[white] tracking-[1px] text-[14px] font-[600]">ADD TO CART</button>
              </div>
          <div className="flex flex-col">
            <label className="text-[14px] tracking-[1px]">Safari City Miles Hard Luggage range blends style with security, featuring anti-theft zippers and dual wheels for smooth mobility. Avail...</label>
            <label className="text-[14px] text-[gray]">Read More</label>
            <div className="bg-[gray] w-[67px] h-[2px]"></div>
          </div>
           <div className=" flex flex-col">
            <div className="flex gap-2">
              <img className="w-[20%]" src="https://safaribags.com/cdn/shop/files/Safari_Icons__Luggage-08.png?v=1664440325&width=50"></img>
           <label>Telescopic Handle
           Our multi-stop Push Button Trolley handle is adjustable, making it suitable for all customer heights.</label>
            </div>
           </div>
 </div>
        </div>
      </div>
      <Warranty></Warranty>
    </div>
  );
}

export default ProductDetail;

