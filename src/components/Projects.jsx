import React from 'react'

import AkCard from '../ak-components/AkCard'
import Reactor from '../images/Reactor.png'
import FlashChat from '../images/Palette.png'
import ESLint from '../images/ESLint.png'
import { Text } from 'ak-palette'

const Projects = () => {
  const openGit = (link) => {
    window.open(link)
  }
  return (
    <React.Fragment>
      <Text
        size="xxxlarge"
        className="text-4xl font-bold text-center block-header dark:text-white"
      >
        Projects
      </Text>
      <div className="flex justify-center grid xl:grid-cols-3">
        <div className="flex justify-center">
          <AkCard
            content="Reactor-gen is a cli tool which helps in adding the required templates for redux and react-router-dom while initialising a react project"
            title="Reactor gen"
            image={
              <img
                className="h-56 w-full object-cover mt-2"
                src={Reactor}
                alt="NIKE AIR"
              />
            }
            click={openGit.bind(
              this,
              'https://github.com/akshay9677/reactor-gen'
            )}
          />
        </div>

        <div className="flex justify-center">
          <AkCard
            content="Palette is design system and minimal component library for react."
            title="Palette Design System"
            image={
              <img
                className="h-56 w-full object-cover mt-2"
                src={FlashChat}
                alt="NIKE AIR"
              />
            }
            click={openGit.bind(
              this,
              'https://github.com/akshay9677/ak-palette'
            )}
          />
        </div>

        <div className="flex justify-center">
          <AkCard
            content="Eslint Plugin ak is a custom eslint plugin where users can add new rules"
            title="ESLint Plugin Ak"
            image={
              <img
                className="h-56 w-full object-cover mt-2"
                src={ESLint}
                alt="NIKE AIR"
              />
            }
            click={openGit.bind(
              this,
              'https://github.com/akshay9677/eslint-plugin-ak'
            )}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Projects
