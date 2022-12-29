import Row from 'react-bootstrap/esm/Row'
import styled from 'styled-components'

interface IImgBoxProps {
  image: string
}

export const HomeBg = styled.div`
  background-color: #d5254a;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const HomeContainer = styled.div`
  height: 100%;

  a {
    color: #2e2e2e;
    text-decoration: none;
    text-shadow: 1px 1px 2px pink;
    font-weight: bold;
  }
`

export const ImgBox = styled.div<IImgBoxProps>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const ImgCircle = styled.img`
  border-radius: 50%;
  overflow: hidden;
  max-width: 360px;
  max-height: 360px;
`
