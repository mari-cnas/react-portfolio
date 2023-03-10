import { memo, ReactElement, useState } from 'react'

import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import { MenuMobile, MenuOverlay, NavSection } from './style'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Navbar: React.FC<IBaseComponentProps> = ({ children }) => {
  children as ReactElement
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <header>
      <MenuOverlay
        isMenuOpened={isMenuOpened}
        onClick={() => setIsMenuOpened(false)}
        className="d-flex d-md-none position-fixed h-100 w-100"
      />
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-end justify-content-between d-block d-md-none">
          <GiHamburgerMenu
            type="button"
            onClick={() => setIsMenuOpened(true)}
            size={18}
            color="white"
            className="my-2"
          />
        </div>
        <MenuMobile
          isMenuOpened={isMenuOpened}
          className="d-flex flex-column d-md-none position-fixed"
        >
          <NavSection className="container  d-flex flex-column flex-grow-1">
            <div className=" d-flex flex-column justify-content-center mb-3">
              <AiOutlineClose
                type="button"
                onClick={() => setIsMenuOpened(false)}
                className="align-self-end"
              />
            </div>
            <div className="d-flex flex-column justify-content-between ">
              <Link to="/" className="mb-5">
                Mariana CN
              </Link>
              <Link to="/about" className="my-5">
                About
              </Link>
              <Link to="/qualifications" className="my-5">
                Qualifications
              </Link>
              <Link to="/background" className="my-5">
                Background
              </Link>
              <Link to="/portfolio" className="my-5">
                Portfolio
              </Link>
            </div>
          </NavSection>
        </MenuMobile>
        <NavSection className="w-100 d-none d-md-flex justify-content-between">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/qualifications">Qualifications</Link>
          <Link to="/background">Background</Link>
          <Link to="/portfolio">Portfolio</Link>
        </NavSection>
      </div>
    </header>
  )
}
export default memo(Navbar)
