// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { useState, useEffect } from 'react'
import request from '../utils/request'
import style from '../assets/style/welcome.scss'
import avatar from '../assets/images/avatar.jpg'

const Welcome = ()=>{
  const [welcomeText] = useState<string>('欢迎使用Carl的React17脚手架😉')
  const [githubLink] = useState<string>('https://github.com/yyISACoder/react17-custom-scaffold')

  useEffect(()=>{
    const testRequest = async ()=>{
      const res = await request('scaffold')
      console.log(res)
    }

    testRequest()
  }, [])

  return (
    <div className={style.welcome}>
      <img src={ avatar } />
      <p>{ welcomeText }</p>
      <p>
        github地址：<a href={ githubLink } target="_blank" rel="noreferrer">{ githubLink }</a>
      </p>
    </div>
  )
}

export default Welcome