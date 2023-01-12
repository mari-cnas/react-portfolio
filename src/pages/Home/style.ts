import { Button } from 'react-bootstrap'
import styled from 'styled-components'

interface IImgBoxProps {
  image: string
}

export const HomeBg = styled.div<IImgBoxProps>`
  display: flex;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  h1,
  h3 {
    text-shadow: 5px 2px #222324, 2px 4px #222324, 3px 5px #222324;
  }

  a {
    text-decoration: none;
  }
`

export const ImgCircle = styled.img`
  border-radius: 50%;
  overflow: hidden;
  max-width: 360px;
  max-height: 360px;

  @media (max-width: 1024px) {
    max-width: 200px;
    max-height: 200px;
    border: 5px solid black;
  }
`
