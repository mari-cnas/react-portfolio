import { memo, useEffect } from 'react'

import { Row, Col, Button, Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Config from 'Config'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import avatar from '../../assets/avatar.png'
import cover from '../../assets/cover.png'
import CV from '../../assets/CV-MCN.pdf'
import profile from '../../assets/profile.jpeg'
import { HomeBg, ImgCircle } from './style'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Header />
      <HomeBg image={cover} className=" d-none d-lg-block flex-grow-1">
        <Container className="d-flex flex-column align-items-center justify-content-center ">
          <Link to="/about">
            <ImgCircle src={profile} className=" my-5" />{' '}
          </Link>
          <Link to="/about">
            <h3 className="fw-bold text-white my-5">
              Mariana Carvalho Nascimento
            </h3>
          </Link>
        </Container>
      </HomeBg>
      <HomeBg image={avatar} className="d-block d-lg-none flex-grow-1">
        <Container className=" d-flex flex-column justify-content-center align-items-center">
          <ImgCircle src={profile} className=" my-5" />
          <h1 className="text-center text-white">Mariana C. Nascimento</h1>
        </Container>
      </HomeBg>
      <Footer />
    </Wrapper>
  )
}

export default memo(Home)
