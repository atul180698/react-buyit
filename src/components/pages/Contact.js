import React from 'react'
import contact_img from '../appImages/cust_support.jpg'
import { BiSupport } from "react-icons/bi"
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className="row contactus">
      <div className="col-md-6 contact-img">
        <img src={contact_img} alt='customer support' style={{ width: "100%" }} />
      </div>
      <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">CUSTOMER SERVICE</h1>
        <p className="text-justify mt-2">
          You can reach out to us 24x7 through any of the followings ways mentioned below.
        </p>
        <p className="mt-3">
          <MdEmail /> : www.help@buyit.com
        </p>
        <p className="mt-3">
          <BsTelephoneFill /> : 0123-456789
        </p>
        <p className="mt-3">
          <BiSupport /> : 1800-0000-0000 (toll free)
        </p>
      </div>
    </div>
  )
}

export default Contact
