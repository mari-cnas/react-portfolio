import { memo, useEffect } from 'react'

import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import Config from 'Config'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import profile from '../../assets/profile.jpeg'
import { HomeBg, HomeContainer, ImgBox, Verify } from './style'

const Portfolio: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <HomeBg>
      <Header />
      <HomeContainer className="container d-flex flex-column">
        <h1>Projects</h1>
        <div className="d-flex flex-column ">
          <div className="d-flex">
            <Verify status="finished" />
            <a
              href="https://mari-cnas-react-legalide.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Legalide
            </a>
          </div>
          <div className="d-flex">
            <Verify status="finished" />
            <a
              href="https://mari-cnas-react-organic.netlify.app "
              target="_blank"
              rel="noreferrer"
            >
              Organic
            </a>
          </div>
          <div className="d-flex">
            <Verify status="progress" />
            <a
              href="https://mari-cnas-react-ricky-and-morty.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Rick and Morty
            </a>
          </div>
          <div className="d-flex">
            <Verify status="progress" />
            <a
              href="https://mari-cnas-react-marvel.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Marvel
            </a>
          </div>
          <div className="d-flex">
            <Verify status="progress" />
            <a
              href="https://mari-cnas-react-pokeapi.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Pokemon
            </a>
          </div>
          <div className="d-flex">
            <Verify status="progress" />
            <a
              href="https://mari-cnas-react-starwars.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Starwars
            </a>
          </div>
          <div className="d-flex">
            <Verify status="progress" />
            <a
              href="https://mari-cnas-react-marica.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Maricá
            </a>
          </div>
        </div>
      </HomeContainer>
      <Footer />
    </HomeBg>
  )
}

export default memo(Portfolio)
// ratio ratio-1x1
