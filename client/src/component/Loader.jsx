import React from 'react'
import LoaderImage from "../images/1484.gif"
function Loader() {
  return (
    <div className='loader'>
        <div className="loader__image">
            <img src={LoaderImage} alt="" />
        </div>
    </div>
  )
}

export default Loader