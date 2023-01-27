import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

const HeaderScocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.facebook.com/mrmasum820"><AiFillFacebook /></a>
      <a href="https://github.com/mrmasum820"><FaGithubSquare /></a>
      <a href="https://www.linkedin.com/in/md-mahbubur-rahman-966aa2153/"><BsLinkedin /></a>
    </div>
  )
}

export default HeaderScocial