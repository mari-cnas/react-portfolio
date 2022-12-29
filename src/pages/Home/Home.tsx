import { memo, useEffect } from 'react'

import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Config from 'Config'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import avatar from '../../assets/avatar.png'
import cover from '../../assets/cover.png'
import profile from '../../assets/profile.jpeg'
import { HomeBg, HomeContainer, ImgBox, ImgCircle } from './style'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <HomeBg>
      <Header />
      <HomeContainer>
        <ImgBox image={cover} className="h-100 ">
          <div className="container d-flex flex-column  ">
            <ImgCircle src={profile} className="align-self-center my-5" />
            <Link to="/qualifications">
              <h1 className="text-center my-5" style={{ fontWeight: 'bold' }}>
                {' '}
                Frontend Developer
              </h1>
            </Link>
          </div>
        </ImgBox>
      </HomeContainer>
      <Footer />
    </HomeBg>
  )
}

export default memo(Home)
// ratio ratio-1x1
