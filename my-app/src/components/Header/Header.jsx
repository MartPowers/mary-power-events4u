import "./Header.scss";

import React from 'react'

function header() {
  return (

    //outer div is container
    <div className='header'>

        <div className="header__container">

{/* logo link here */}
        <div className='header__logo'>
            <a href="#"></a>
        </div>

        {/* create an event button */}
        {/* outer container */}
<button className='header__btn' type="submit">
    CREATE AN EVENT
</button>
</div>
    </div>
  )
}

export default header
