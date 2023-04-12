import React from 'react'
import loadingGif from "../../assets/gif/diets1.gif"
// import loadingGif from "../../assets/gif/diets2.gif"

const DietLoader = () => {
  return (
    <div className='flex justify-center items-center w-[40%] md:[30%] lg:w-[27%] m-auto' >
        <img src={loadingGif} alt="" className='mix-blend-darken'/>
      </div>
  )
}

export default DietLoader
