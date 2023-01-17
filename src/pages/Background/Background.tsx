import { memo, useEffect } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import { BackBg } from './style'

const Background: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Background')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Header />

      <BackBg className="d-none d-md-block">
        <div className="bg-gradient_solid">
          <div className="container my-3">
            <div className="section-header">
              <h2>Professional and Academic Background</h2>
            </div>
            <div className="steps">
              <div className="steps-container">
                <div className="content">
                  <h2>
                    PROJETOS ÁGEIS COM SCRUM - DIGITAL INNOVATION ONE (10/2021 -
                    2 HORAS)
                  </h2>
                  <p className="text-muted">
                    Fundamentos básicos e práticas da metodologia.
                  </p>
                </div>
                <i className="step-line" />
                <div className="date">2022</div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>
                    JORNADA DO DEV (HTML5, CSS, Bootstrap, JS) (04/2022-12/2022)
                  </h2>
                  <p className="text-muted">
                    Curso intensivo no Jornada do Dev com mentoria particular
                    com um programador sênior que atua nos EUA. Capacitação na
                    concepção de sites e desenvolvimento frontend, utilizando
                    react, typescript, e consumo de API.
                  </p>
                </div>
                <i className="step-line" />
                <div className="date">2022</div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>
                    COCA-COLA FEMSA - Empresa multinacional no segmento
                    alimentício <br /> (12/2021-ATUAL)
                  </h2>
                  <p className="text-muted">
                    Programador de Manutenção Planejamento e controle usando o
                    software SAP - PM (plant maintenance): Liberação e
                    planejamento das ordens preventivas e corretivas da semana,
                    detalhar trabalhos que serão programados para execução,
                    realizar programação das paradas para manutenção das linhas
                    de produção, realizar reserva de materiais de almoxarifado,
                    gestão de peças de reposição em estoque, criar requisições
                    de compras e acompanhamento de todo o processo de compra,
                    realizar alterações nos planos de manutenção, entrada em
                    notas fiscais de serviço, relatórios e controle de
                    indicadores.
                  </p>
                </div>
                <i className="step-line" />
                <div className="date">2022</div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>
                    CESBE ENGENHARIA - Empresa de grande porte no segmento
                    construção civil <br />
                    (01/12/2020 – 06/05/2021)
                  </h2>
                  <p className="text-muted">
                    Controladora de Manutenção (PCM) Suprimento de equipamentos
                    utilizados nas obras em todo Brasil. Controle de frota
                    (manutenção preventiva, manutenção corretiva, ordens de
                    serviço, combustível, lubrificantes, pneus e pedido de
                    peças); gestão dos serviços terceirizados em oficinas
                    externas; gestão dos serviços na oficina própria.
                    Responsável diretamente pelos equipamentos de pequeno porte
                    (mais de 1000 ativos) tais como bombas, máquinas de solda e
                    ferramentas manuais: furadeira, esmerilhadeira, lixadeira,
                    martelete etc. Solicitação de compra de materiais.
                    Prospecção de fornecedores. Acompanhar prestadores de
                    serviço em orçamentos e intervenções na empresa.
                  </p>
                </div>
                <i className="step-line" />
                <div className="date">2021</div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>
                    CIRCUIBRAS - Empresa de médio porte no segmento eletrônica
                    <br />
                    (24/04/2017 – 25/11/2020)
                  </h2>
                  <p className="text-muted">
                    Atividades: Manutenção preventiva/corretiva e predial:
                    atendimento de solicitações de execução de ordem de serviço
                    (OS), abertura e gestão de OSs, cadastro de equipamentos e
                    planos de manutenção, atualização de indicadores de
                    acompanhamento e desempenho (aproximadamente 240 ativos), e
                    elaboração de relatórios. Acompanhar prestadores de serviço
                    em orçamentos e intervenções na empresa. Negociar com PCP as
                    programações de paradas de equipamentos. Controle do estoque
                    de material técnico: recebimento de peças e insumos
                    diversos, conferência dos pedidos, movimentação de
                    almoxarifado, requisição de compra de materiais. Atualização
                    de procedimentos e documentos técnicos, execução de plano de
                    ação, preparação de documentos para auditorias internas e
                    externas. Análise da legislação vigente no tocante à
                    Manutenção (NR12,etc), junção de evidências que comprovam o
                    atendimento aos requisitos. Monitoramento e controle de
                    calibração de instrumentos de medição: recolhimento de
                    instrumento nos setores, envio de lista para orçamento e
                    calibração.
                  </p>
                </div>
                <i className="step-line" />
                <div className="date">2020</div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>
                    ESPECIALIZAÇÃO-GESTÃO DO DESENVOLVIMENTO DE PRODUTOS - UTFPR
                    (04/2015-12/2016)
                  </h2>
                  <p className="text-muted">
                    Capacitação na gestão da definição, planejamento, concepção,
                    configuração, design e detalhamento de produtos industriais
                    Algumas disciplinas: Gestão de Projetos, Projeto de Produtos
                    (Ergonomia, Informacional, Planejamento,Conceitual,para
                    Fabricação) Design,Desenvolvimento Lean, Finanças,
                    Engenharia reversa, Prototipagem e Testes, Direito
                    consumerista e Propriedade Industrial, Pós venda.
                  </p>
                </div>
                <i className="step-line" />
                <div className="date">2016</div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>ENGENHARIA MECÂNICA – UFPR (03/2009-05/2014)</h2>
                  <p className="text-muted">
                    Bachelor of Engineering (B.Eng.), Engenharia Mecânica Nota:
                    Índice de Rendimento Acadêmico: 0,6958 (escala 0 a 1) TCC
                    (2013) Área: Identificação de Sistemas Tema: Identificação
                    de parâmetros modais utilizando o modelo Armax do software
                    Matlab Algumas disciplinas: Desenho Mecânico, Resistência
                    dos Materiais, Processos de fabricação, Usinagem,
                    Conformação, Comando Numérico, Soldagem, Ensaios não
                    destrutivos, Aspersão Térmica, Sistemas Hidráulicos e
                    Pneumáticos, Máquinas de fluxo, Transferência de calor,
                    Refrigeração e Climatização, Vibrações mecânicas, Materiais,
                    Seleção de materiais, Mecatrônica, Elementos de máquina,
                    Método dos elementos finitos
                  </p>
                </div>
                <i className="step-line" />
                <div className="date">2014</div>
              </div>
            </div>
          </div>
        </div>
      </BackBg>
      <BackBg className="d-block d-md-none">
        <div className="bg-gradient_solid">
          <div className="container my-3">
            <div className="section-header">
              <h2>Professional and Academic Background</h2>
            </div>
            <div className="steps">
              <div className="steps-container">
                <div className="content">
                  <h2>
                    PROJETOS ÁGEIS COM SCRUM - DIGITAL INNOVATION ONE (10/2021 -
                    2 HORAS)
                  </h2>
                </div>
                <i className="step-line" />
                <div className="date">2022</div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>
                    JORNADA DO DEV (HTML5, CSS, Bootstrap, JS) (04/2022-12/2022)
                  </h2>
                </div>
                <i className="step-line" />
                <div className="date">2022</div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>
                    COCA-COLA FEMSA -<br /> Empresa multinacional no segmento
                    alimentício (12/2021-ATUAL) <br />
                  </h2>
                  <p>Programador de Manutenção</p>
                </div>
                <i className="step-line" />
                <div className="date">2022</div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>
                    CESBE ENGENHARIA - <br />
                    Empresa de grande porte no segmento construção civil
                    (01/12/2020 – 06/05/2021)
                  </h2>
                  <p>Controlador de Manutenção</p>
                </div>
                <i className="step-line" />
                <div className="date">2021</div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>
                    CIRCUIBRAS - Empresa de médio porte no segmento eletrônica
                    (24/04/2017 – 25/11/2020)
                  </h2>
                  <p>Técnico de planejamento e controle de manutenção</p>
                </div>
                <i className="step-line" />
                <div className="date">2020</div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>
                    ESPECIALIZAÇÃO-GESTÃO DO DESENV. DE PRODUTOS - UTFPR
                    (04/2015-12/2016)
                  </h2>
                </div>
                <i className="step-line" />
                <div className="date">2016</div>
              </div>
              <div className="steps-container">
                <div className="content">
                  <h2>ENGENHARIA MECÂNICA – UFPR (03/2009-05/2014)</h2>
                </div>
                <i className="step-line" />
                <div className="date">2014</div>
              </div>
            </div>
          </div>
        </div>
      </BackBg>
      <Footer />
    </Wrapper>
  )
}

export default memo(Background)
// ratio ratio-1x1
