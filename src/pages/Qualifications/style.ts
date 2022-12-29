import styled from 'styled-components'

interface IImgBoxProps {
  image: string
}

export const HomeBg = styled.div`
  background-color: #8d4568;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: white;
`

export const HomeContainer = styled.div`
  height: 100%;

  .row {
    --bs-gutter-x: 0;
    --bs-gutter-y: 0;
  }

  h3 {
    color: white;
  }

  h4 {
    color: #2e2e2e;
    font-weight: bold;
  }
`

export const ImgBox = styled.div<IImgBoxProps>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
