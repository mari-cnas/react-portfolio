import { memo, useEffect } from 'react'

import { Col, Row } from 'react-bootstrap'
// import IconHtml5 from 'react-devicon/html5/original-wordmark'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaLinux,
} from 'react-icons/fa'
import { GiUsaFlag, GiBrazilFlag } from 'react-icons/gi'
import { GrGraphQl } from 'react-icons/gr'
import { MdHttp } from 'react-icons/md'
import { SiJavascript, SiTypescript, SiApollographql } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

import Footer from 'components/Footer'
import Header from 'components/Header'
import TechnologyBox from 'components/TechnologyBox'

import useTitle from 'hooks/useTitle'

import { HomeBg, HomeContainer } from './style'

const Qualifications: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <HomeBg>
      <Header />
      <HomeContainer className="container d-flex flex-column ">
        <div className="my-3">
          <h3>Technologies</h3>
          <Row className="row-cols-1 row-cols-md-3 border-top border-3 border-warning">
            <Col className="d-flex flex-column align-items-center">
              <h4>Front-end</h4>
              {/* <TechnologyBox name="HTML5" icon={<FaHtml5 />} /> */}
              {/* <IconHtml5 width={100} height={100} /> */}
              <TechnologyBox
                name="HTML5"
                icon={<i className="devicon-html5-plain-wordmark colored" />}
              />
              <TechnologyBox
                name="CSS"
                icon={<i className="devicon-css3-plain-wordmark colored" />}
              />
              <TechnologyBox
                name="Javascript"
                icon={<i className="devicon-javascript-plain colored" />}
              />
              <TechnologyBox
                name="Typescript"
                icon={<i className="devicon-typescript-plain colored" />}
              />
              <TechnologyBox
                name="ReactJS"
                icon={<i className="devicon-react-original colored" />}
              />
              <TechnologyBox
                name="Bootstrap"
                icon={<i className="devicon-bootstrap-plain colored" />}
              />

              <TechnologyBox name="Apollo Client" icon={<SiApollographql />} />
              <TechnologyBox
                name="Axios"
                icon={<MdHttp style={{ color: 'purple' }} size={22} />}
              />
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <h4>Back-end</h4>
              <TechnologyBox
                name="CSS"
                icon={<i className="devicon-nodejs-plain colored" />}
              />
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <h4>Other</h4>
              <TechnologyBox
                name="Git"
                icon={<i className="devicon-git-plain colored" />}
              />
              <TechnologyBox
                name="Github"
                icon={<i className="devicon-github-original colored" />}
              />
              <TechnologyBox name="Restful API" icon={<TbApi />} />
              <TechnologyBox
                name="GraphQL"
                icon={<i className="devicon-graphql-plain colored" />}
              />
              <TechnologyBox
                name="Linux"
                icon={<i className="devicon-linux-plain colored" />}
              />
            </Col>
          </Row>
        </div>
        <div className="my-3 ">
          <h3>Languages</h3>
          <div className="d-flex justify-content-center border-top border-3 border-warning ">
            <TechnologyBox
              name="Português"
              icon={<GiBrazilFlag style={{ color: 'green' }} size={22} />}
            />
            <TechnologyBox
              name="Inglês"
              icon={<GiUsaFlag />}
              style={{ color: 'red' }}
            />
          </div>
        </div>
      </HomeContainer>
      <Footer />
    </HomeBg>
  )
}

export default memo(Qualifications)
