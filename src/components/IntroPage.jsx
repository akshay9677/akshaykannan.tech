import React from 'react'
import Webdev from '../images/coding_.svg'

import { Button, Text } from 'ak-palette'

function IntroPage() {
  const openGithub = () => {
    window.open('https://github.com/akshay9677')
  }
  return (
    <div className="flex justify-around rounded-xl overflow-hidden h-screen p-10">
      <div className="md:flex mt-10">
        <div className="p-8 flex flex-col justify-center">
          <Text size="xxxlarge" className="dark:text-white">
            Hey, I'm{' '}
            <span className="text-red-500 font-medium dark:text-white">
              Akshay
            </span>
            ,
          </Text>
          <Text size="large" className="mt-2 text-xl dark:text-white">
            <span>
              I'm a <span className="text-red-500">self-taught</span> programmer
              &
            </span>
            <span className="text-indigo-500 font-mono	">
              {' '}
              Software Developer
            </span>
          </Text>
          <div className="pt-3 text-red-500">
            <a
              href="https://www.linkedin.com/in/akshay-kannan-49964617a"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-4 f30 pointer icon-social"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/_akshay_kannan_/"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-4 f30 pointer icon-social"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="http://twitter.com/_akshay_kannan_"
              target="_blank"
              rel="noopener noreferrer"
              className="f30 pointer icon-social"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="mt-8 md:mb-60">
            <Button type="danger" onClick={openGithub}>
              Check My Work
            </Button>
          </div>
        </div>
        <div className="opacity-90 py-10">
          <img src={Webdev} alt="Social" style={{ width: '40rem' }} />
        </div>
      </div>
    </div>
  )
}

export default IntroPage
