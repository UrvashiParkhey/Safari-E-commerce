import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AllProduct from "../api/AllProduct.json";

function Section1() {
  const [move, setMove] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col relative  justify-center items-center ">
      <div className="flex flex-col justify-center w-[90%]   gap-8 items-center">
        <div className=" flex flex-col pt-5 gap-4 ">
          <label className="font-Nunito, sans-serif text-[54px]  font-[600] text-[#071941]">
            Premium Travel Bags
          </label>
          <label className="text-center">Delivered at Your Doorstep</label>
        </div>
        <div className="gap-[50px] flex flex-row">
          <label className="text-[13.8px]  tracking-[1px] font-[700] text-[#536384]">
            LUGGAGE TROLLEYS
          </label>
          <label className="text-[13.8px] tracking-[1px] font-[700] text-[#536384]">
            SAFARI SELECT
          </label>
          <label className="text-[13.8px] tracking-[1px] font-[700] text-[#536384]">
            COMBOS-SAVE MORE{" "}
          </label>
          <label className="text-[13.8px] tracking-[1px] font-[700] text-[#536384]">
            BACKPACKS
          </label>
          <label className="text-[13.8px] tracking-[1px] font-[700] text-[#536384]">
            OVERNIGHTERS
          </label>
        </div>
        <div className="w-[54%] h-[2px] bg-[#80808057]"></div>
        <div className="w-[90%]   overflow-hidden">
          <div
            style={{ transform: `translateX(-${move}%)` }}
            className="w-[200%] duration-500  flex"
          >
            {AllProduct.map((i,index) => index<8 && 
              <div 
                onClick={() => {localStorage.setItem("product", JSON.stringify(i)) ;navigate("/product-detail")}}
                className="flex w-[12.5%] gap-2 flex-col "
              >                <div className=" main flex flex-col h-[38vh]">
                  <div className=" first-div ">
                    <img
                      className="w-[90%] "
                      src={i.image}
                    ></img>
                  </div>
                  <div className=" second-div">
                    <img
                      className="w-[90%]"
                      src={i.image2}
                    ></img>
                  </div>
                </div>

                <label className="text-[15px] pt-4 font-[500]">{i.title}</label>
                <div className="flex  gap-3 flex-row">
                  <label className="text-[red]">From ₹. {(i.price*i.discount/100).toLocaleString()}.00</label>
                  <label className="text-gray-500 line-through">
                    ₹ {i.price.toLocaleString()}.00
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowSidebar(true)}
                    className="bg-[#478EED] w-[60%]  mt-5 text-[14px]  py-5 tracking-[2px] text-[white] font-[600]"
                  >
                    SELECT SIZE
                  </button>
                </div>
              </div>
          )}
          </div>
          <div className=" flex justify-center pt-7 ">
            <button
              onClick={() => navigate("/trollybag")}
              className="bg-[#4083db]   text-[13px] text-[white] font-bold tracking-[2px] w-[15%] py-4 "
            >
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
      {/* <div  style={{ right: showSidebar == true ? "0%" : "-30%" }} className="w-[30%] top-[-34%]  absolute  gap-10 flex-col flex justify-center items-center bg-[white]">
        <div className="w-[100%] flex-col  flex">
          <div className="flex gap-[60%] border-[1px] border-[black]">
            <label className="text-[20px] font-bold">Choose options</label>
            <i
              class="fa fa-times text-[black]  text-[20px] "
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-[90%] ">
          <div className="flex gap-7 ">
            <img
              className="w-[70%] h-[16vh]"
              src="https://safaribags.com/cdn/shop/files/2_def2355e-39d7-4655-a976-09b71cc8f460_114x.jpg?v=1721228667"
            ></img>
            <label className="text-[17px]">
              Safari City Miles Thyme Green Trolley Bag with Anti-theft Zipper
              and Dual Wheels
            </label>
          </div>
          <div className=" flex flex-col gap-5">
            <div className=" flex gap-[70%]">
              <label className="text-[14px] text-[#212020] font-[600]">
                Size : cabin
              </label>
              <label className="text-[14px] border-b-2 duration-500 text-[#808080df] hover:text-[black] hover:border-[black]">
                Size chart
              </label>
            </div>
            <div className="flex gap-2">
              <button className="px-14 border-[1px] hover:border-[#949420]  text-[14px] border-gray-600 font-[600] py-3">
                Cabin
              </button>
              <button className="px-14 border-[1px] hover:border-[#949420]  text-[14px] border-gray-600 font-[600] py-3">
                Medium
              </button>
              <button className="px-14 border-[1px] hover:border-[#949420]  text-[14px] border-gray-600 font-[600] py-3">
                large
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <label className="text-[16px]">Quantity:</label>
          <div className="border-[1px] w-[30%] ">
                      <button className="px-5 py-1 text-[black] font-[700]  ">-</button>
                      <input
                        className="w-9  text-center h-[5vh]  "
                        placeholder="1"
                      ></input>
                      <button className="px-3 py-2 text-[black] font-[700]  ">+</button>
                    </div>
                    <button className="bg-[#4C99FF] text-[13px] text-[white] font-bold tracking-[2px] px-5 py-4 mb-4">
                 ADD TO CART
                  </button>

                  <div  onClick={() => navigate("/product-detail1")} className=" flex text-center justify-center">
                    <label className="text-[gray] duration-500 hover:text-black hover:border-[black] border-b-2 mb-[30%] border-[gray] ">View Details</label>
                  </div>
                    </div>
        </div>
      </div> */}
      <i
        onClick={() => (move < 50 ? setMove(move + 50) : null)}
        class="fa fa-arrow-right  absolute text-[24px] top-[50%] left-[86%] bg-[white]  border-2 px-7 py-6"
        aria-hidden="true"
      ></i>
      <i
        onClick={() => (move > 0 ? setMove(move - 50) : null)}
        class="fa fa-arrow-left  absolute text-[24px] top-[50%] left-[8%] bg-[white]  border-2 px-7 py-6"
        aria-hidden="true"
      ></i>
    </div>
  );
}
export default Section1; 