import React from "react";
import { useNavigate } from "react-router-dom";

function Section3() {
  const navigate = useNavigate()
  return (
    <div className="w-[100%] h-[50vh] bg-[#F5F5F5] justify-center gap-4 items-center flex flex-col">
      <label className="text-[15px] text-[#534d4d] tracking-[2px] font-[700]">
        WHY SHOP WITH US?{" "}
      </label>
      <div className="w-[90%] flex gap-6 flex-row">
        <div  onClick={() => navigate("/trollybag")}className="w-[15%] flex flex-col">
          <img
            className="w-[90%]"
            src="https://safaribags.com/cdn/shop/files/Unique_Catalogue_200x.png?v=1700543961"
          ></img>
          <label className="text-center text-[13px[ font-[600]">
            Unique Catalogue
          </label>
        </div>
        <div onClick={() => navigate("/trollybag")} className="w-[15%]  flex flex-col">
          <img
            className="w-[90%] "
            src="https://safaribags.com/cdn/shop/files/Free_Shipping_Returns_200x.png?v=1700544043"
          ></img>
          <label className="text-center text-[13px[ font-[600]">
            Free Shipping & Returns
          </label>
        </div>
        <div  onClick={() => navigate("/trollybag")} className="w-[15%] flex flex-col">
          <img
            className="w-[90%]"
            src="https://safaribags.com/cdn/shop/files/Secure_Payment_200x.png?v=1700543929"
          ></img>
          <label className="text-center text-[13px[ font-[600]">
            Secure Payment
          </label>
        </div>
        <div onClick={() => navigate("/trollybag")} className="w-[15%] flex flex-col">
          <img
            className="w-[90%]"
            src="https://safaribags.com/cdn/shop/files/Buy_More_Save_More_200x.png?v=1700544825"
          ></img>
          <label className="text-center text-[13px[ font-[600]">
            Buy More Save More
          </label>
        </div>
        <div onClick={() => navigate("/trollybag")} className="w-[15%] flex flex-col">
          <img
            className="w-[90%]"
            src="https://safaribags.com/cdn/shop/files/Upto_5_Years_Warranty_200x.png?v=1700543815"
          ></img>
          <label className="text-center text-[13px[ font-[600]">
            5 Years Warranty
          </label>
        </div>
        <div onClick={() => navigate("/trollybag")} className="w-[15%] flex flex-col">
          <img
            className="w-[90%]"
            src="https://safaribags.com/cdn/shop/files/Here_to_Help_1800-210-8981_200x.png?v=1700544853"
          ></img>
          <label className="text-center text-[13px[ font-[600]">
            Here to Help @ 080 691 48000
          </label>
        </div>
      </div>
    </div>
  );
}
export default Section3;
