import React from 'react'
import {motion} from 'framer-motion'
import Youtube from "react-youtube";
const Modal = ({setTrailerUrl, trailerUrl, opts}) => {

    const handleClick = (e)=>{
        if(e.target.classList.contains("backdrop")){
          setTrailerUrl("");
        }
      }

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="backdrop" onClick={handleClick}>
             <Youtube  videoId={trailerUrl} opts={opts} />
        </motion.div>
    )
}

export default Modal
