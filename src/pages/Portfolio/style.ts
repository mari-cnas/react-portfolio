import Row from 'react-bootstrap/esm/Row'
import styled from 'styled-components'

interface IImgBoxProps {
  image: string
}

interface IVerifyProps {
  status: string
}

export const HomeBg = styled.div`
  background-color: #8d4568;
  display: flex;
  flex-direction: column;
  height: 100vh;
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
export const Verify = styled.p<IVerifyProps>`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: ${({ status }) => {
    switch (status) {
      case 'finished':
        return '#55cc44'
      case 'progress':
        return '#d63d2e'
      default:
        return '#9e9e9e'
    }
  }};
  border-radius: 50%;
  margin-top: 8px;
`
