import React from 'react'
import './Home.scss'
import logoImg from '../../assets/gamer.png'
import { Link } from 'react-router-dom'
import owner1 from '../../assets/zishus1.JPG'
import owner2 from '../../assets/zishus2.JPG'
import Sponser from '../sponser/Sponser'

function Home() {
  return (
    <>
    <div className='homeSection hero'>

        <video autoPlay={true} loop={true} muted={true} place-inline className='backVideo'>

            <source src='https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt778f65cedfee54fd/63bcad5b08dfb21202a7794d/VAL_Ep6_Homepage-CG-Video_V5.mp4' type='video/mp4' />
           
        </video>
        
         <nav>
            <img src={logoImg} className="logo" alt="User Logo" />


            <div className='nav-icons'>
                <Link to={'/'} className='links'>Home</Link>
                <Link to={'/about'} className='links'>About</Link>
                <Link to={'/zishuspc'} className='links'>Zishus Pc</Link>
                <Link to={'/gamesetting'} className='links'>Game Setting</Link>
                <Link to={'/bookmontage'} className='links'>Book Montage</Link>
                <Link to={'/contact'} className='links'>Contact</Link>
            </div>
              
         </nav>

         <div className="content">
            <h1>HERE I'M ZISHU</h1>
            <a href="#">KNOW ABOUT ME</a>
         </div>
    </div>

    <div className="aboutSection">
       <div className="aLeft">
         <h2>About Zishus</h2>
         <h1>Trending Videos from Zishu</h1>
         <p>
            Zishu crossed 150 thousand subscribers on his YouTube Channel. Sohail Shaikh also know as Zishu, a 25-year-old has crossed this massive milestone.

            Explore dozens of videos made with brilliant efforts.
         </p>
         <button>SUBCRIBE</button>
       </div>
       <div className="aRight">
          {/* <video autoPlay={true} loop={false} muted={true} className='a-video' >
            <source src='https://youtu.be/_TtrYL0MPLQ' type='video/mp4'/>
          </video> */}

          <iframe width="500" height="299" src="https://www.youtube.com/embed/_TtrYL0MPLQ" title="Rihanna 💎🔥 ( Valorant Montage )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       </div>
    </div>

    <div className="imagesSection">
        <div className="iFirst ibox">
          <div className="animeLight"></div>
          <img src={owner1} alt="zishus" />
        </div>
        <div className="iSecond ibox">
        <div className="animeLight"></div>
          <img src={owner2} alt="zishus" />
        </div>
    </div>

    <Sponser/>

    </>
  )
}

export default Home