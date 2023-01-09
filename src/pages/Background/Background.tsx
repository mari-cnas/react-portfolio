import { memo, useEffect } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { BackBg, BgContainer, TimeBox } from './style'

const Background: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Background')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BackBg>
      <Header />
      <BgContainer className=" container d-flex flex-column">
        <h3>PROFESSIONAL BACKGROUND</h3>
        <TimeBox>
          <div className="time-line" />
          <div className="time-icon" />

          <h5>FRONTEND DEVELOPER (12/2022 - ATUAL)</h5>
          <div>
            <p className="text-muted">Autônomo</p>
          </div>
        </TimeBox>
        <TimeBox>
          <div className="time-line" />
          <div className="time-icon" />
          <h5>COCA-COLA FEMSA (12/2021-ATUAL)</h5>
          Programador de Manutenção
          <p className="text-muted">
            Planejamento e controle usando o software SAP - PM (plant
            maintenance): Liberação e planejamento das ordens preventivas e
            corretivas da semana, detalhar trabalhos que serão programados para
            execução, realizar programação das paradas para manutenção das
            linhas de produção, realizar reserva de materiais de almoxarifado,
            gestão de peças de reposição em estoque, criar requisições de
            compras e acompanhamento de todo o processo de compra, realizar
            alterações nos planos de manutenção, entrada em notas fiscais de
            serviço, relatórios e controle de indicadores.
          </p>
        </TimeBox>
        <h3>ACADEMIC BACKGROUND</h3>
        <TimeBox>
          <div className="time-line" />
          <div className="time-icon" />

          <h5>
            PROJETOS ÁGEIS COM SCRUM - DIGITAL INNOVATION ONE (10/2021 - 2
            HORAS)
          </h5>
          <div>
            <p className="text-muted">
              Capacitação na concepção de sites e desenvolvimento frontend,
              utilizando react e typescript, e interface com API.
            </p>
          </div>
        </TimeBox>
        <TimeBox>
          <div className="time-line" />
          <div className="time-icon" />

          <h5>JORNADA DO DEV (HTML5, CSS, Bootstrap, JS) (04/2022-12/2022)</h5>
          <div>
            <p className="text-muted">
              Capacitação na concepção de sites e desenvolvimento frontend,
              utilizando react e typescript, e interface com API.
            </p>
          </div>
        </TimeBox>
        <TimeBox>
          <div className="time-line" />
          <div className="time-icon" />

          <h5>
            ESPECIALIZAÇÃO-GESTÃO DO DESENVOLVIMENTO DE PRODUTOS - UTFPR
            (04/2015-12/2016)
          </h5>
          <div>
            <p className="text-muted">
              Capacitação na gestão da definição, planejamento, concepção,
              configuração, design e detalhamento de produtos industriais
              Algumas disciplinas: Gestão de Projetos, Projeto de Produtos
              (Ergonomia, Informacional, Planejamento,Conceitual,para
              Fabricação) Design,Desenvolvimento Lean, Finanças, Engenharia
              reversa, Prototipagem e Testes, Direito consumerista e Propriedade
              Industrial, Pós venda.
            </p>
          </div>
        </TimeBox>
        <TimeBox>
          <div className="time-line" />
          <div className="time-icon" />
          <h5>ENGENHARIA MECÂNICA – UFPR (03/2009-05/2014)</h5>
          Bachelor of Engineering (B.Eng.), Engenharia Mecânica Nota: Índice de
          Rendimento Acadêmico: 0,6958 (escala 0 a 1)
          <p className="text-muted">
            TCC (2013) Área: Identificação de Sistemas Tema: Identificação de
            parâmetros modais utilizando o modelo Armax do software Matlab
            Algumas disciplinas: Desenho Mecânico, Resistência dos Materiais,
            Processos de fabricação, Usinagem, Conformação, Comando Numérico,
            Soldagem, Ensaios não destrutivos, Aspersão Térmica, Sistemas
            Hidráulicos e Pneumáticos, Máquinas de fluxo, Transferência de
            calor, Refrigeração e Climatização, Vibrações mecânicas, Materiais,
            Seleção de materiais, Mecatrônica, Elementos de máquina, Método dos
            elementos finitos
          </p>
        </TimeBox>
      </BgContainer>
      <Footer />
    </BackBg>
  )
}

export default memo(Background)
// ratio ratio-1x1
