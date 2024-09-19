import React from "react";

function Testimonial() {
  return (
    <div className="flex flex-col  w-[100%] justify-center items-center ">
      <div className="flex flex-col pt-28 w-[80%] gap-9 justify-center items-center">
        <label className="text-[50px] text-[#071941] font-[700]">
          Testimonials
        </label>
        <div className="flex gap-10 flex-row">
          <img
            className="w-[40%] h-[60vh]"
            src="https://safaribags.com/cdn/shop/files/Artboard_1_300x.jpg?v=1686217153"
          ></img>
          <img
            className="w-[40%] h-[60vh]"
            src="https://safaribags.com/cdn/shop/files/Lifestyle_4_300x.jpg?v=1686117606"
          ></img>
          <img
            className="w-[40%] h-[60vh] "
            src="https://safaribags.com/cdn/shop/files/Artboard_2_300x.jpg?v=1686217173"
          ></img>
          <img
            className="w-[40%] h-[60vh]"
            src="https://safaribags.com/cdn/shop/files/Lifestyle_6_300x.jpg?v=1686117665"
          ></img>
        </div>
        <label className="text-[50px] text-[#071941] font-[700]">
          Shop By Shade
        </label>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-3">
            <img
              className="w-[100%] h-[5vh]"
              src="https://safaribags.com/cdn/shop/files/Ellipse_3_4b8bbd63-0a56-4e68-8c82-adf571bb8778_60x.png?v=1669810636"
            ></img>
            <label className="text-[13px] border-b-2">BLACK</label>
          </div>

          <div className="flex flex-col gap-3">
            <img
              className="w-[100%] h-[5vh]"
              src="https://safaribags.com/cdn/shop/files/Ellipse_16_60x.png?v=1660316766"
            ></img>
            <label className="text-[13px]  border-b-2">WHITE</label>
          </div>

          <div className="flex flex-col gap-3">
            <img
              className="w-[100%] h-[5vh]"
              src="https://safaribags.com/cdn/shop/files/Ellipse_11_60x.png?v=1660315481"
            ></img>
            <label className="text-[13px]   border-b-2">BLUE</label>
          </div>

          <div className="flex flex-col gap-3">
            <img
              className="w-[100%] h-[5vh]"
              src="https://safaribags.com/cdn/shop/files/Ellipse_5_60x.png?v=1660315481"
            ></img>
            <label className="text-[13px]   border-b-2">BLUE</label>
          </div>

          <div className="flex flex-col gap-3">
            <img
              className="w-[100%] h-[5vh]"
              src="https://safaribags.com/cdn/shop/files/Ellipse_6_60x.png?v=1660315481"
            ></img>
            <label className="text-[13px]   border-b-2">BLUE</label>
          </div>

          <div className="flex flex-col gap-3">
            <img
              className="w-[100%] h-[5vh]"
              src="https://safaribags.com/cdn/shop/files/Ellipse_14_60x.png?v=1660316541"
            ></img>
            <label className="text-[13px]   border-b-2">TEAL</label>
          </div>
          <div className="flex flex-col gap-3">
            <img
              className="w-[100%] h-[5vh]"
              src="https://safaribags.com/cdn/shop/files/Ellipse_8_60x.png?v=1660315481"
            ></img>
            <label className="text-[13px]   border-b-2">GREEN</label>
          </div>

          <div className="flex flex-col gap-3">
            <img
              className="w-[80%] h-[5vh]"
              src="https://safaribags.com/cdn/shop/files/Ellipse_9_60x.png?v=1660315483"
            ></img>
            <label className="text-[13px]   border-b-2">YELLOW</label>
          </div>

          <div className="flex flex-col gap-3">
            <img
              className="w-[80%] h-[5vh]"
              src="https://safaribags.com/cdn/shop/files/Ellipse_12_60x.png?v=1660315481"
            ></img>
            <label className="text-[13px]   border-b-2">ORANGE</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
