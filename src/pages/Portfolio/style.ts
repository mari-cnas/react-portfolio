import Row from 'react-bootstrap/esm/Row'
import styled from 'styled-components'

interface IImgBoxProps {
  image: string
}

export const HomeBg = styled.div`
  background-color: #8d4568;
  display: flex;
  flex-direction: column;
`

export const HomeContainer = styled.div`
  height: 100%;

  /* unvisited link */
  a:link {
    color: white;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: white;
  }

  /* mouse over link */
  a:hover {
    color: grey;
  }

  /* selected link */
  a:active {
    color: #0000ff;
  }
`

export const ImgBox = styled.div<IImgBoxProps>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
