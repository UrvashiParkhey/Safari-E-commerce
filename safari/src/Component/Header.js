import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDetails from '../api/userDetail.json'
import AllProductData from '../api/AllProduct.json'

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSide, setShowSide] = useState(false);
  const [showSid, setShowSid] = useState(false);
  const [showTrolley, setShowTrolley] = useState(false);
  const [showView, setShowView] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [search, setSearch] = useState("")
  const navigate = useNavigate();

 
  const loginCheck = ()=>{
    let user = UserDetails.filter((i)=> i.email == email)
    if(user.length>0){
      if (user[0].password == password){
        window.location.reload()
      }
      else{
        alert("Incorrect Password")
      }
    }
    else{
      alert("Email not registered!")
    }
  }
  return (
    <div className="h-[10vh]">
      <div className="bg-[white] w-[100%] fixed flex px-[40px] z-10 h-[10vh] items-center justify-between">
        <div className="flex flex-row gap-[250px]">
          <img
            onClick={() => navigate("/")}
            className=" h-[3.1vh]"
            src="https://safaribags.com/cdn/shop/files/safari_logo_160x.png?v=1701758679"
          ></img>
          <div className="flex gap-11">
            <label
              onMouseOver={() => setShowSid(true)}
              className="text-[15px] cursor-pointer tracking-[0.8px] head-div text-[#292F75]"
            >
              Safari Select
            </label>

            <label
              onMouseOver={() => setShowTrolley(true)}
              className=" text-[15px] tracking-[0.8px] cursor-pointer  head-div text-[#292F75]"
            >
              Trolley Bags
            </label>

            <label className=" text-[15px] tracking-[0.8px] head-div text-[#292F75]">
              Combos
            </label>
            <label className=" text-[15px] tracking-[0.8px] head-div text-[#292F75]">
              Backpacks
            </label>
            <label className=" text-[15px] tracking-[0.8px] head-div text-[#292F75]">
              Duffle bags
            </label>
            <label className=" text-[15px] tracking-[0.8px] head-div text-[#292F75]">
              Accessories
            </label>
            <label className=" tracking-[0.8px] text-[15px] head-div text-[#292F75]">
              Discover more
            </label>
          </div>
          <div className="flex flex-col gap-1 items-center top-[400%] justify-center w-14 rounded-[12px] h-[25vh] right-[-8px] bg-[#333333] absolute">
            <i
              class="fa fa-star text-[20px]  text-[#d29e27]"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-star text-[20px]  text-[#d29e27]"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-star text-[20px]  text-[#d29e27]"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-star text-[20px]  text-[#d29e27]"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-star text-[20px]  text-[#d29e27]"
              aria-hidden="true"
            ></i>
            <label className="text-[20px] font-[600] text-white">4.8</label>
          </div>
          <div className="flex absolute right-8 gap-7">
            <i
              onClick={() => setShowSidebar(true)}
              class="fa fa-search text-[20px]  text-[#2b4e99] "
              aria-hidden="true"
            ></i>

            <div
              style={{ right: showSidebar == true ? "0%" : "-50%" }}
              className=" duration-1000 w-[30%] bg-white text-white fixed h-[100vh] overflow-scroll top-0 flex flex-col"
            >
               <div className="mt-2 gap-3  flex flex-row ">
                  <i
                    class="fa fa-search text-[24px] pt-2 pl-6  text-[black]"
                    aria-hidden="true"
                  ></i>
                  <input
                  onChange={(e)=> setSearch(e.target.value)}
                    className="px-10 py-2 text-black"
                    placeholder="what are you looking for?"
                  ></input>
                  <i
                    onClick={() => setShowSidebar(false)}
                    class="fa fa-times absolute text-[black]  text-[20px] mt-3 right-10"
                    aria-hidden="true"
                  ></i>
                </div>



              <div className="flex flex-col mt-5 relative items-center">
                {AllProductData.filter((i)=>i.title.includes(search) ).map((i)=>
                <div className="flex  flex-col w-[90%]">
                 <div className=" main  flex flex-col ">
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
                  <label className="text-[15px]  font-[500] text-black">
                    {i.title}
                  </label>
                  <div className="flex  gap-3 flex-row">
                    <label className="text-[red]"> from ₹. {i.price.toLocaleString()}</label>
                    <label className="text-gray-500 line-through">₹. {(i.price * i.discount%100).toLocaleString()}</label>
                  </div> 
                 </div>)}
              </div>
            </div>

            <i
              onClick={() => setShowView(true)}
              class="fa fa-user-plus  text-[20px] text-[#4e2b99]"
              aria-hidden="true"
            ></i>

            <div
              style={{ top: showView == true ? "0" : "-100%" }}
              className="w-full h-[100vh] fixed top-[-100%] left-0 flex justify-center items-center"
            >
              <div className="w-full h-[100vh] absolute bg-black opacity-50"></div>
              <div className="w-[70%] h-[70vh] bg-white relative">
                <div className="bg-[#363680] flex  flex-col justify-center items-center relative h-[70vh] w-[100%]">
                  <div className="w-[74%] h-[63vh] flex flex-col left-0  justify-center  relative ">
                    <div className="flex flex-row pl-5 w-[100%] gap-8">
                      <img
                        className="w-[20%]  "
                        src="https://d1nl4izteao6lk.cloudfront.net/images/safai-icon.svg"
                      ></img>
                      <img src="https://d1nl4izteao6lk.cloudfront.net/images/powered_by_kp_12px.svg"></img>
                    </div>
                    <div className=" w-[60%] flex ">
                      <label className="text-[24px] font-[700] text-[white] text-center ">
                        Be Travel Ready with our wide range of Luggage Trolleys
                        & Backpacks
                      </label>
                    </div>
                   
                  </div>

                  <div className="w-[35%] rounded-xl flex-col right-5 h-[63vh] bg-[white] justify-center items-center absolute">
                    <div className="flex h-[65vh] gap-5 w-[100%]  justify-center items-center flex-col">
                      <div className="flex flex-col justify-center items-center w-[100%] gap-3 text-center ">
                        <label className=" font-[600] text-[18px]">
                          Unlock Exclusive Offers {email} {password}
                        </label>

                        <input
                          className="w-[80%] border border-[black] rounded-lg h-[7vh] px-5 text-[16px]"
                          placeholder="Enter email"
                          onChange={(e)=> setEmail(e.target.value)}
                        ></input>
                        <input
                          className="w-[80%] border border-[black] rounded-lg h-[7vh] px-5 text-[16px]"
                          placeholder="Enter yOur Password"
                          onChange={(e)=> setPassword(e.target.value)}
                        ></input>
                        <button onClick={()=> loginCheck()} className="border text-[15px] font-bold text-[white] border-green-500  tracking-[2px] w-[40%] h-[5vh] bg-[#7dacde] rounded-sm">
                          SIGN IN
                        </button>
                      </div>
                      <div className="flex flex-col gap-3 w-[100%] justify-center items-center">
                        <div className="flex gap-4">
                          <div className="w-[80px] mt-2 h-[1px] bg-slate-400"></div>
                          <label className="text-[15px] ">OR</label>
                          <div className="w-[80px]  mt-2 h-[1px] bg-slate-400"></div>
                        </div>
                        <button className="border text-[20px] border-green-500 w-[80%] h-[7vh] rounded-lg">
                          <span className=" text-[20px]  text-[green]">
                            {" "}
                            <i class="fa fa-whatsapp" aria-hidden="true"></i>
                          </span>{" "}
                          Whatsaap Login
                        </button>
                      </div>
                    </div>
                    <i
                      onClick={() => setShowView(false)}
                      class="fa fa-times absolute hover:bg-[white] hover:text-[blue] text-[white] px-3 py-2 top-[-8%] text-[26px] mt-2 right-[-18%]"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>

            <i
              onClick={() => setShowSide(true)}
              class="fa fa-shopping-bag text-[20px]  text-[#2b4e99]"
              aria-hidden="true"
            ></i>
            <div
              style={{ right: showSide == true ? "0%" : "-70%" }}
              className="h-[100vh] duration-1000 w-[30%] bg-white fixed text-white  top-0"
            >
              <div className="flex flex-col gap-7 ">
                <div className="mt-2 gap-3  flex flex-row ">
                  <i
                    class="fa fa-shopping-bag pt-1 pl-4 text-[24px]   text-[#162340]"
                    aria-hidden="true"
                  ></i>
                  <label className="text-[20px] font-[500] text-[#162340] ">
                    Cart
                  </label>
                  <i
                    onClick={() => setShowSide(false)}
                    class="fa fa-times absolute text-[black]  text-[24px] mt-2 right-10"
                    aria-hidden="true"
                  ></i>
                  <div className="w-[100%] absolute top-[50px] bg-[black] h-[2px]"></div>
                </div>
                <div className=" flex flex-row  gap-4">
                  <img
                    className="w-[24%] h-[15vh] ml-3"
                    src="https://cdn.shopify.com/s/files/1/0651/0847/6121/files/Ryder_4W_MidnightBlue_ExS_PDP-01_92x.jpg?v=1701335287"
                  ></img>
                  <div className=" flex flex-col ">
                    <label className="text-[black]  text-[13px]">
                      Safari Ryder Midnight Blue Trolley{" "}
                    </label>
                    <label className="text-[black] text-[13px] ">
                      Bag With TSA Lock and Dual Wheels
                    </label>
                    <label className="text-[black] text-[13px] pt-2">
                      4.82{" "}
                      <i
                        class="fa fa-star text-[#F8C944]"
                        aria-hidden="true"
                      ></i>
                    </label>
                    <label className="text-[13px] pt-2 text-[#0000006d]">
                      Cabin
                    </label>
                    <div className="flex gap-3 pt-4 flex-row">
                      <div className="border-2 ">
                        <button className="px-3 py-2 text-[black]  ">-</button>
                        <input
                          className="w-9  text-center h-[8vh]"
                          placeholder="1"
                        ></input>
                        <button className="px-3 py-2 text-[black]  ">+</button>
                      </div>
                      <label className="border-b-2 text-[13px] pt-4 text-[gray] mb-6 remove ">
                        Remove
                      </label>
                    </div>
                  </div>
                  <div className="flex relative flex-col">
                    <label className="text-[15px] text-[red]">
                      ₹. 3,499.00
                    </label>
                    <label className="text-[15px] text-[black]">
                      ₹. 8,475.00
                    </label>
                    <div className="absolute w-[71px] top-8 h-[2px] bg-[black]"></div>
                  </div>
                </div>

                <div className="w-[100%] h-[5vh] relative flex flex-col bg-[#8a998f56]">
                  <label className="text-[#1b6c20]  text-[14px] pl-4">
                    Congratulations You Have Unlocked the Deal !{" "}
                  </label>
                  <label className="pl-4 pt-5 font-[600] tracking-[1px] text-[14px] text-[black]">
                    CLAIM DEAL ON PRODUCT WORTH Rs.999/-
                  </label>
                  <div className="w-[63%] absolute ml-4 top-[20px] bg-[black] h-[2px]"></div>
                </div>
                <div className="flex flex-row">
                  <div className="flex relative mt-7 ml-4 w-[35%]  bg-gray-200 justify-center items-center flex-col">
                    <img
                      className="w-[140px] py-3 h-[18vh] "
                      src="https://cdn.shopify.com/s/files/1/0651/0847/6121/files/MIAMI14CBROS_200x.jpg?v=1703222843"
                    ></img>
                    <label className="text-[black]  text-[13px]  text-center">
                      Genie Miami 13.5L Rose Small Backpack With Easy Access
                      Pockets
                    </label>
                    <label className="text-[black] text-[14px] ">
                      5.0{" "}
                      <i
                        class="fa fa-star text-[#F8C944]"
                        aria-hidden="true"
                      ></i>
                    </label>
                    <label className="text-[15px] text-[red]">₹. 396.63</label>
                    <label className="text-[15px] text-[black]">
                      ₹. 999.00
                    </label>
                    <div className="absolute w-[58.5px] bottom-16 h-[2px] bg-[black]"></div>
                    <button className="bg-[#4C99FF] px-5 py-2 mb-4">
                      +Add to cart
                    </button>
                  </div>
                  <div className="flex relative mt-7 ml-4 w-[35%]  bg-gray-200 justify-center items-center flex-col">
                    <img
                      className="w-[140px] py-3 h-[18vh] "
                      src="https://cdn.shopify.com/s/files/1/0651/0847/6121/files/MIAMI14CBROS_200x.jpg?v=1703222843"
                    ></img>
                    <label className="text-[black]  text-[13px]  text-center">
                      Genie Flamenco 13.5L Multicolor Small Casual Backpack Easy
                      Access Pockets
                    </label>
                    <label className="text-[15px] text-[red]">₹. 396.63</label>
                    <label className="text-[15px] text-[black]">
                      ₹. 999.00
                    </label>
                    <div className="absolute w-[58.5px] bottom-16 h-[2px] bg-[black]"></div>
                    <button className="bg-[#4C99FF] px-5 py-2 mb-4">
                      +Add to cart
                    </button>
                  </div>
                </div>

                <label className="pl-5 text-[#23447d] tracking-[1px] font-[600] text-[15px]">
                  YOU MAY ALSO LIKE
                </label>
                <div className="flex relative mt-7 ml-4 w-[35%]  bg-gray-200 justify-center items-center flex-col">
                  <img
                    className="w-[140px] py-3 h-[18vh] "
                    src="https://cdn.shopify.com/s/files/1/0651/0847/6121/files/MIAMI14CBROS_200x.jpg?v=1703222843"
                  ></img>
                  <label className="text-[black]  text-[13px]  text-center">
                    Genie Flamenco 13.5L Multicolor Small Casual Backpack Easy
                    Access Pockets
                  </label>
                  <label className="text-[15px] text-[red]">₹. 396.63</label>
                  <label className="text-[15px] text-[black]">₹. 999.00</label>
                  <div className="absolute w-[58.5px] bottom-16 h-[2px] bg-[black]"></div>
                  <button className="bg-[#4C99FF] px-5 py-2 mb-4">
                    +Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          onMouseLeave={() => setShowTrolley(false)}
          style={{ top: showTrolley == true ? "100%" : "-350%" }}
          className="  flex justify-center bg-[white] h-[30vh] absolute   w-[100%] left-[0%]"
        >
          <div className=" flex gap- justify-center   w-[80%]">
            <div className=" w-[20%]   flex flex-col">
              <div className=" flex h-[5vh]">
                <label className="text-[12px] tracking-[1.8px] text-[#3636d0] uppercase">
                  TYpe
                </label>
              </div>
              <div className=" flex flex-col gap-5">
                <label
                  onClick={() => {
                    localStorage.setItem("category", "Hard-Trolley");
                    navigate("/trollybag");
                  }}
                  className="text-[12px] tracking-[1.8px] uppercase text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300"
                >
                  Hard Trolley Bags
                </label>
                <label
                  onClick={() => {
                    localStorage.setItem("category", "Soft-Trolley");
                    navigate("/trollybag");
                  }}
                  className="text-[12px] tracking-[1.8px]  text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300 uppercase"
                >
                  {" "}
                  Soft Trolley Bags
                </label>
                <label
                  onClick={() => {
                    localStorage.setItem("category", "Laptop");
                    navigate("/trollybag");
                  }}
                  className="text-[12px] tracking-[1.8px]  text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300 uppercase"
                >
                  {" "}
                  Laptop Trolley Bags
                </label>
                <label
                  onClick={() => {
                    localStorage.setItem("category", "Printed");
                    navigate("/trollybag");
                  }}
                  className="text-[12px] tracking-[1.8px]  text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300 uppercase"
                >
                  {" "}
                  Printed Trolley Bags
                </label>
              </div>
            </div>
            <div className=" w-[25%]   flex flex-col">
              <div className=" flex h-[5vh]">
                <label className="text-[12px] tracking-[1.8px] text-[#3636d0]  uppercase">
                  CAtegory
                </label>
              </div>
              <div className=" flex flex-col gap-5">
                <label
                  onClick={() => {
                    localStorage.setItem("category", "men");
                    navigate("/trollybag");
                  }}
                  className="text-[12px]  text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300 tracking-[1.8px] uppercase"
                >
                  Trolley Bags for men
                </label>
                <label
                  onClick={() => {
                    localStorage.setItem("category", "men");
                    navigate("/trollybag");
                  }}
                  className="text-[12px]  text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300 tracking-[1.8px] uppercase"
                >
                  Trolley Bags for women
                </label>
              </div>
            </div>
            <div className=" w-[20%]   flex flex-col">
              <div className=" flex h-[5vh]">
                <label className="text-[12px] tracking-[1.8px] text-[#3636d0] uppercase">
                  size
                </label>
              </div>
              <div className=" flex flex-col gap-5">
                <label className="text-[12px]  text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300 tracking-[1.8px] uppercase">
                  Cabin
                </label>
                <label className="text-[12px]  text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300 tracking-[1.8px] uppercase">
                  Medium
                </label>
                <label className="text-[12px]  text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300 tracking-[1.8px] uppercase">
                  Large
                </label>
              </div>
            </div>
            <div className=" w-[20%]   flex flex-col">
              <div className=" flex h-[5vh]">
                <label className="text-[12px] tracking-[1.8px] text-[#3636d0] uppercase">
                  Popular colors
                </label>
              </div>
              <div className=" flex flex-col gap-5">
                <label className="text-[12px]  text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300 tracking-[1.8px] uppercase">
                  Black Bags{" "}
                </label>
                <label className="text-[12px]  text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300 tracking-[1.8px] uppercase">
                  Red Bags{" "}
                </label>
                <label className="text-[12px]  text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300 tracking-[1.8px] uppercase">
                  Purple Bags
                </label>
                <label className="text-[12px]  text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300 tracking-[1.8px] uppercase">
                  Blue Bags{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          onMouseLeave={() => setShowSid(false)}
          style={{ top: showSid == true ? "150%" : "-250%" }}
          className="w-[14%] relative h-[20vh]  cursor-pointer border-[1px] border-[#0000006f]  left-[-68%] bg-[white] flex justify-center items-center"
        >
          <div className=" flex  flex-col gap-2">
            <label
              onClick={() => {
                localStorage.setItem("category", "Backpacks");
                navigate("/trollybag");
              }}
              className="text-[15px] text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300"
            >
              Select Backpacks{" "}
            </label>
            <label
              onClick={() => {
                localStorage.setItem("category", "Business");
                navigate("/trollybag");
              }}
              className="text-[15px] text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300"
            >
              Select Business Trolley{" "}
            </label>
            <label
              onClick={() => {
                localStorage.setItem("category", "Satchel");
                navigate("/trollybag");
              }}
              className="text-[15px] text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300"
            >
              Select Satchel bags{" "}
            </label>
            <label
              onClick={() => navigate("/trollybag")}
              className="text-[15px] text-[#353434] hover:text-[#808080cc] cursor-pointer duration-300"
            >
              Explore all
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
