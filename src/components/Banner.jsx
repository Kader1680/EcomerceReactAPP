import React, {useState} from 'react'
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";


 const Banner = () => {
  const SlideData = [
 
    "https://static.vecteezy.com/system/resources/previews/011/320/988/original/big-sale-banner-design-with-podium-gradient-background-social-media-post-product-advertisement-design-special-discount-design-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/003/692/287/original/big-sale-discount-promotion-banner-template-with-blank-product-podium-scene-graphic-free-vector.jpg",
    "https://img.freepik.com/premium-vector/super-sale-best-product-sale-banner-design_765086-5.jpg",
    "https://img.freepik.com/premium-vector/realistic-editable-text-big-sale-background-with-special-discount_628935-53.jpg",
   
  ]
  const [currentSlide, setcurrentSlide] = useState(0);
  const PrevSlide = () =>{
      // if the curentslide equal to zero than make it to 3
      setcurrentSlide( currentSlide === 0 ? 3 : (prev)=>prev - 1)
  }
  const NextSlide = () =>{
    setcurrentSlide( currentSlide === 3 ? 0 : (next)=>next + 1)
    
  }
  console.log(currentSlide)
  return (
    <div class="overflow-x-hidden w-full ">
        <div class=' w-screen h-[650px] relative '>
          <div class='w-[400vw] flex  transition-transform duration-100'
                style={{ transform: `translateX(-${currentSlide * 100 }vw) `  }}
          >
            <img class=' w-screen h-96 object-cover' src={SlideData[0] } />
            <img class=' w-screen h-96  object-cover' src={SlideData[1] } />
            <img class=' w-screen h-96  object-cover' src={SlideData[2] } />
            <img class=' w-screen h-96  object-cover' src={SlideData[3] } />
          </div>
          <div class=' flex gap-8 absolute w-fit left-0 right-0 mx-auto bottom-8'>
            <div onClick={PrevSlide} class=' '>
                <BsArrowLeftSquareFill class=' w-14 h-16' />
            </div>
            <div onClick={NextSlide}>
                <BsArrowRightSquareFill class=' w-14 h-16' />
            </div>
          </div>
        </div>
    </div>
  )
}
export default Banner
