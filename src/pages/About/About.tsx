import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import CV from '../../assets/CV-MCN.pdf'
import { AboutBg, AboutImg, ProfileBtn } from './style'

const About: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('About')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Header />
      <AboutImg className="d-flex flex-grow-1 ">
        <AboutBg className="d-flex flex-column px-md-5 py-5 justify-content-between my-md-5 ">
          <p className="text-white">
            Olá!
            <br /> Eu sou a Mariana, uma pessoa curiosa, que tem amor ao
            aprendizado e que busca constantemente o desenvolvimento pessoal.
            Gosto de estar por dentro das novas tecnologias e procuro me manter
            informada do que acontece no mundo. Por esse interesse em saber como
            tudo funciona, ingressei na graduação em Engenharia Mecânica,
            iniciando minha carreira na indústria.
            <br />
            Depois ao longo da vida passei por diversas fases, onde
            eventualmente fiquei desempregada e acabei trabalhando em outros
            setores, o que me tornou uma profissional flexível e
            multidisciplinar. Mas sempre em busca de conhecimento,
            aperfeiçoamento de habilidades e oportunidades de desenvolvimento.
            <br />
            No momento estou buscando ingressar no mercado de desenvolvimento
            web trabalhando como Front end Developer, se você tem uma
            oportunidade de trabalho que se encaixa no meu perfil, baixe meu
            currículo logo abaixo e entre em contato:
          </p>
          <a href={CV} download className="align-self-center">
            <ProfileBtn className="my-2">Download CV</ProfileBtn>
          </a>
        </AboutBg>
      </AboutImg>
      <Footer />
    </Wrapper>
  )
}

export default memo(About)
// ratio ratio-1x1
