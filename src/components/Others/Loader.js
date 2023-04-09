import React from 'react'
import loadingGif from "../../assets/gif/jumping-jack.gif"
// import loadingGif from "../../assets/gif/boy-running.gif"
// import loadingGif from "../../assets/gif/blue-running.gif"
const Loader = () => {
  return (
    <div className='flex justify-center items-center w-[40%] md:[20%]' >
        {/* <img src="http://d205bpvrqc9yn1.cloudfront.net/0001.gif" alt="" className='mix-blend-darken'/> */}
        <img src={loadingGif} alt="" className='mix-blend-darken'/>
      </div>
  )
}

export default Loader
