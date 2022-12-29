import { memo, ReactElement } from 'react'

import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

import { FooterBg } from './style'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Footer: React.FC<IBaseComponentProps> = ({ children }) => {
  children as ReactElement

  return (
    <FooterBg>
      <div className="container d-flex justify-content-between">
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/marianacnascimento/"
            rel="noreferrer"
          >
            <BsLinkedin /> Linkedin
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://github.com/mari-cnas"
            rel="noreferrer"
          >
            <BsGithub /> GitHub
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="mailto:contatemariana@gmail.com"
            rel="noreferrer"
          >
            <HiOutlineMail /> E-mail
          </a>
        </div>
      </div>
    </FooterBg>
  )
}
export default memo(Footer)
