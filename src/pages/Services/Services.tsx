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

import useTitle from 'hooks/useTitle'

import { HomeBg, HomeContainer, Technology } from './style'

const Services: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Qualifications')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <HomeBg>
      <Header />
      <HomeContainer className="container d-flex flex-column ">
        oi
        <p>
          WEBSITES Produção de websites responsivos, sistemas em Vuejs , landing
          pages a sites dinâmicos.
        </p>
        <p>
          02WORDPRESS Desenvolvimento de Temas , Customização de Templates,
          Correções, Atualizações em seu site.
        </p>
        <p>
          03LANDING PAGES Produção de LPS customizadas, converter visitantes em
          Leads, e leads em Clientes.
        </p>
        <p>
          04ECOMMERCE Crio Lojas Virtuais customizadas, nas principais
          plataformas Loja Integrada, Tray e WooComerce do WordPress.
        </p>
      </HomeContainer>
      <Footer />
    </HomeBg>
  )
}

export default memo(Services)
