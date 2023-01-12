import { memo, useEffect } from 'react'

import { Col, Row } from 'react-bootstrap'
// import IconHtml5 from 'react-devicon/html5/original-wordmark'
import { GiUsaFlag, GiBrazilFlag } from 'react-icons/gi'
import { MdHttp } from 'react-icons/md'
import { SiApollographql } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import { QualiContainer, Technology } from './style'

const Qualifications: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Qualifications')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Header />
      <QualiContainer className="container d-flex flex-column ">
        <div className="my-3">
          <h2 className="text-center">Technologies</h2>
          <Row className="row-cols-1 row-cols-md-3 border-top border-3">
            <Col className="d-flex flex-column align-items-center">
              <h4>Front-end</h4>
              {/* <TechnologyBox name="HTML5" icon={<FaHtml5 />} /> */}
              {/* <IconHtml5 width={100} height={100} /> */}
              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <i className="devicon-html5-plain-wordmark colored" />
                </div>
                <p>HTML5</p>
              </Technology>
              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <i className="devicon-css3-plain-wordmark colored" />
                </div>
                <p>CSS</p>
              </Technology>
              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <i className="devicon-javascript-plain colored" />
                </div>
                <p>Javascript</p>
              </Technology>
              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <i className="devicon-typescript-plain colored" />
                </div>
                <p>Typescript</p>
              </Technology>
              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <i className="devicon-react-original colored" />
                </div>
                <p>ReactJS</p>
              </Technology>
              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <i className="devicon-bootstrap-plain colored" />
                </div>
                <p>Bootstrap</p>
              </Technology>
              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <SiApollographql />
                </div>
                <p>Apollo Client</p>
              </Technology>
              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <MdHttp style={{ color: 'purple' }} size={22} />
                </div>
                <p>Axios</p>
              </Technology>
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <h4>Back-end</h4>
              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <i className="devicon-nodejs-plain colored" />
                </div>
                <p>NodeJS</p>
              </Technology>
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <h4>Other</h4>
              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <i className="devicon-git-plain colored" />
                </div>
                <p>Git</p>
              </Technology>
              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <i className="devicon-github-original colored" />
                </div>
                <p>Github</p>
              </Technology>
              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <i className="devicon-graphql-plain colored" />
                </div>
                <p>GraphQL</p>
              </Technology>
              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <TbApi />
                </div>
                <p>Restful API</p>
              </Technology>

              <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
                <div className="me-2">
                  <i className="devicon-linux-plain colored" />
                </div>
                <p>Linux</p>
              </Technology>
            </Col>
          </Row>
        </div>
        <div className="my-3 ">
          <h2 className="text-center">Languages</h2>
          <div className="d-flex justify-content-center border-top border-3  ">
            <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
              <div className="me-2">
                <GiBrazilFlag style={{ color: 'green' }} size={22} />
              </div>
              <p>Português</p>
            </Technology>
            <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
              <div className="me-2">
                <GiUsaFlag />
              </div>
              <p>Inglês</p>
            </Technology>
          </div>
        </div>
      </QualiContainer>
      <Footer />
    </Wrapper>
  )
}

export default memo(Qualifications)
