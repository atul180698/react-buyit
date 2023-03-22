import React from 'react'
import policy_img from '../appImages/policy.png'
const Policy = () => {
  return (
    <div className="row contactus">
      <div className="col-md-4 contact-img">
        <img src={policy_img} alt='customer support' style={{ width: "80%", margin: "20px" }} />
      </div>
      <div className="col-md-6">
        <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
        <ul >
          <li className='mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Policy
