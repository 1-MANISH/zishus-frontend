import React from 'react'
import './Sponser.scss'
import sponsrImg1 from '../../assets/sp1.webp'
import sponsrImg2 from '../../assets/sp2.webp'


function Sponser() {
  return (
    <div className='Sponser'>
        <div className="info-heading">
            <h1>Our Sponsors/Partners</h1>
            <p>Here is the list of my current YouTube Partner. Have a look at them.</p>
        </div>

        <div className="sponsers-container">
            <div className="box-container">
                <div className="img-box">
                    <img src={sponsrImg1} alt="" />
                </div>
                <div className="sponser-info">
                    <p className='heading'>
                    Sensei Mods Helps you to Customize your PC
                    </p>
                    <button>Know us</button>
                </div>
            </div>
            <div className="box-container">
                <div className="img-box">
                    <img src={sponsrImg2} alt="" />
                </div>
                <div className="sponser-info">
                    <p className='heading'>
                    Sensei Mods Helps you to Customize your PC
                    </p>

                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sponser