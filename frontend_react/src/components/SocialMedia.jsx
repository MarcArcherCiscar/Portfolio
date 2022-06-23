import React from 'react';
import {BsLinkedin, BsInstagram} from 'react-icons/bs';
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://www.linkedin.com/in/marc-archer-ciscar-781271193/' target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
        </div>
        {/* <div>
            <FaFacebookF />
        </div>
        <div>
            <BsInstagram />
        </div> */}
    </div>
  )
}

export default SocialMedia