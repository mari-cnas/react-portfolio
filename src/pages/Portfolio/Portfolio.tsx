import { memo, useEffect } from 'react'

import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Project from 'components/Project'
import { Verify } from 'components/Project/style'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import legalide from '../../assets/legalide.png'
import marica from '../../assets/marica.png'
import marvel from '../../assets/marvel.png'
import organic from '../../assets/organic.png'
import pokemon from '../../assets/pokemon.png'
import rickmorty from '../../assets/rickandmorty.png'
import starwars from '../../assets/starwars.png'
import { PortfolioContainer } from './style'

const Portfolio: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Portfolio')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Header />
      <PortfolioContainer className="container d-flex flex-column my-3">
        <h2 className="text-center text-white mb-3">Projects</h2>
        <div className="d-flex justify-content-center">
          <Verify status="finished" />
          <span className="me-2">Finished</span>
          <Verify status="progress" />
          <span>Work in progress</span>
        </div>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          <Col className="d-flex">
            <Project
              name="Legalide"
              image={legalide}
              status="finished"
              site="https://mari-cnas-react-legalide.netlify.app"
              description="Landing Page"
            />
          </Col>
          <Col className="d-flex">
            <Project
              name="Organic"
              image={organic}
              status="finished"
              site="https://mari-cnas-react-organic.netlify.app"
              description="Shop"
            />
          </Col>
          <Col className="d-flex">
            <Project
              name="Rick and Morty"
              image={rickmorty}
              status="finished"
              site="https://mari-cnas-react-rick-and-morty.netlify.app"
              description="API Rick and Morty"
            />
          </Col>
          <Col className="d-flex">
            <Project
              name="Marvel"
              image={marvel}
              status="progress"
              site="https://mari-cnas-react-marvel.netlify.app"
              description="API Marvel"
            />
          </Col>
          <Col className="d-flex">
            <Project
              name="Pokemon"
              image={pokemon}
              status="progress"
              site="https://mari-cnas-react-pokeapi.netlify.app"
              description="Pokedex"
            />
          </Col>
          <Col className="d-flex">
            <Project
              name="Starwars"
              image={starwars}
              status="progress"
              site="https://mari-cnas-react-starwars.netlify.app"
              description="API Starwars"
            />
          </Col>
          <Col className="d-flex">
            <Project
              name="Maric??"
              image={marica}
              status="progress"
              site="https://mari-cnas-react-marica.netlify.app"
              description="Touristic Page"
            />
          </Col>
        </Row>
      </PortfolioContainer>
      <Footer />
    </Wrapper>
  )
}

export default memo(Portfolio)
// ratio ratio-1x1
