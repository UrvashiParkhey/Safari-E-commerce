import React from 'react'

function Travel() {
  return (
    <div className='flex flex-col w-[100%]  justify-center items-center'>
      <div className='w-[70%] absolute left-32 flex'>
        <img  className="w-[50%] h-[44vh]" src='https://safaribags.com/cdn/shop/files/Archit_1_800x.jpg?v=1686298576'></img>
      </div>
      <div className='flex w-[64%] ml-[36%] mt-20 h-[100vh] justify-center items-center bg-[#FFF1E1]'>
      <div className="flex flex-col w-[40%] h-[] gap-9">
<label className="text-[15px] font-[600] text-[#1c2945] tracking-[1px]">
  About us
</label>
<label className="text-[35px] text-[#071941] font-[700]">
  Sharing Your Love For Travel Since 1974
</label>
<div className="w-[150%]  gap-3 flex flex-col">
  <label className="tracking-[.7px] text-[#0000008a] ">
    We like to believe that everyone is born to travel. And we are
    here to make those journeys easier, simpler and a lot more
    comfortable. We want to change the way you travel with our
    modern luggage & backpacks; they are designed for travellers,
    keeping their every little requirement in mind.
  </label>
  <label className="tracking-[.7px] text-[#0000008a]">
    At Safari Bags, you will be inspired to see the whole world with
    ease. After all, we are all
    <span className="font-[600] text-[#000000e4] text-[15px]">
      #BornToTravel
    </span>
  </label>
</div>
<button className="bg-[#478EED] w-[45%] text-[white] text-[13.6px] font-[600] tracking-[3px] h-[7vh]">
  LEARN MORE
</button>
</div>
</div>
<div className="flex flex-row gap-6 pt-16 justify-center items-center">
  <div className="flex gap-1" >
  <i class="fa fa-star text-[20px]  text-[#339999]" aria-hidden="true"></i>
  <i class="fa fa-star text-[20px]  text-[#339999]" aria-hidden="true"></i>
 <i class="fa fa-star text-[20px]  text-[#339999]" aria-hidden="true"></i>
  <i class="fa fa-star text-[20px]  text-[#339999]" aria-hidden="true"></i>
 <i class="fa fa-star text-[20px]  text-[#339999]" aria-hidden="true"></i>
 <label className="text-[13.8px] text-[#339999]">1366 reviews</label>
 </div>
 <div className="bg-[#3399999c] h-[6vh] top-[20px] w-[.6px]"></div>
 <div className="flex flex-row pb-10 relative">
<label className="absolute text-[#339999]  left-[17px] top-[34px]">1366</label>
<div className="flex gap-5">
 <img  className="h-[10vh]" src="https://judgeme-public-images.imgix.net/judgeme/medals-v2/ver_rev/diamond.svg?auto=format"></img>
 <img  className="h-[10vh]" src=" https://judgeme-public-images.imgix.net/judgeme/medals-v2/mon_rec/platinum.svg?auto=format"></img>
<img className="h-[10vh]" src="https://judgeme-public-images.imgix.net/judgeme/medals-v2/tops/5-percent.svg?auto=format"></img>
<img className="h-[10vh]" src="https://judgeme-public-images.imgix.net/judgeme/medals-v2/tops_trend/5-percent.svg?auto=format"></img>
</div>
</div>
        </div>
        </div>

  
  )
}

export default Travel






