import React from 'react'
import styleSheet from "./styleVidoe.module.css"
import { AiOutlineClose } from 'react-icons/ai'


const VideoSlide = ({handleShowVideo}) => {

  return (
    <div  className={styleSheet.videoSlide}>
      <AiOutlineClose className={styleSheet.close} onClick={handleShowVideo} />


      <div className={styleSheet.videoContainer}>

        <video
          className={styleSheet.video}
          width="714"
          height="488"
          controls
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>

      </div>
    </div>
  )
}

export default VideoSlide
