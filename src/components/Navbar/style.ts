import styled, { keyframes } from 'styled-components'

interface IMenuMobileProps {
  isMenuOpened: boolean
}

interface IMenuOverlayProps {
  isMenuOpened: boolean
}

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`
const enter = keyframes`
    from{
        right: -160px;
    }
    to{
        right: 0;
    }
`
const leave = keyframes`
    from{
        right: 0;
    }
    to{
        right: -160px;
    }
`

export const NavSection = styled.div`
  display: block;
  color: #666;
  padding: 10px 10px;
`

export const MenuMobile = styled.div<IMenuMobileProps>`
  height: 100rem;
  top: 0;
  left: ${(props) => (props.isMenuOpened ? 0 : -75)}%;
  padding: 0px;
  width: 75%;
  animation: ${(props) => (props.isMenuOpened ? enter : leave)} 0.2s ease-out;
  transition: all 0.2s ease-out;
  z-index: 10;
  background-color: #252b42;

  > svg {
    position: absolute;
    top: 1rem;
  }
`
export const MenuOverlay = styled.div<IMenuOverlayProps>`
  opacity: ${(props) => (props.isMenuOpened ? 1 : 0)};
  visibility: ${(props) => (props.isMenuOpened ? 'visible' : 'hidden')};
  animation: ${(props) => (props.isMenuOpened ? fadeIn : fadeOut)} 0.2s ease-out;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-out;
  z-index: 5;
  top: 0;
  height: 100vh;
`
