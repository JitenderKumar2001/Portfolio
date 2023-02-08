import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jitender-kumar-30a1111b6/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Snappy1001" target="_blank"><FaGithub /></a>
        <a href="https://instagram.com" target="_blank"><FaInstagramSquare /></a>
    </div>
  )
}

export default HeaderSocials