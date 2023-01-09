import { Button } from 'react-bootstrap'
import styled from 'styled-components'

interface IImgBoxProps {
  image: string
}

export const HomeContainer = styled.div`
  background-color: #d5254a;
  display: flex;
  flex-direction: column;
  a {
    color: #2e2e2e;
    text-decoration: none;
    text-shadow: 1px 1px 2px pink;
    font-weight: bold;
  }
`

export const HomeBg = styled.div<IImgBoxProps>`
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

  @media (max-width: 1024px) {
    max-width: 200px;
    max-height: 200px;
    border: 5px solid black;
  }
`
export const ProfileBtn = styled(Button)`
  background-color: black;
  border-color: black;
  border-radius: 25px;
  padding: 5px 30px;
  font-size: 20px;
  margin: 5px 5px;

  &:hover {
    background-color: #412b82;
    border-color: #412b82;
  }
`
