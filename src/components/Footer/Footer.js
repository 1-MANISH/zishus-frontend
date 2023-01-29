import React from 'react'
import './Footer.scss'
import {BsInstagram }from 'react-icons/bs'
import {BsWhatsapp}from 'react-icons/bs'
import {CiFacebook} from 'react-icons/ci'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'

function Footer() {
  return (
    <div className='container footerContainer'>
        
        <div className="box">
            <div className="icon instagram">
                <BsInstagram className='iconBars'/>
            </div>
            <p>Instragram</p>
        </div>

        <div className="box">
            <div className="icon facebook">
                <CiFacebook className='iconBars'/>
            </div>
            <p>Facebook</p>
        </div>

        <div className="box">
            <div className="icon twitter">
                <AiFillTwitterSquare className='iconBars'/>
            </div>
            <p>Twitter</p>
        </div>

        <div className="box">
            <div className="icon whatsap">
                <BsWhatsapp className='iconBars'/>
            </div>
            <p>WhatSap</p>
        </div>

        <div className="box">
            <div className="icon youtube">
                <AiOutlineYoutube className='iconBars'/>
            </div>
            <p>Youtube</p>
        </div>
    </div>
  )
}

export default Footer