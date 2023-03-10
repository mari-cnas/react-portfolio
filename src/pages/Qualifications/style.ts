import styled from 'styled-components'

interface IImgBoxProps {
  image: string
}

export const QualiContainer = styled.div`
  height: 100%;
  border-color: #8d4568;

  .row {
    --bs-gutter-x: 0;
    --bs-gutter-y: 0;
  }

  h2 {
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
export const Technology = styled.div`
  color: white;
  border: 1px solid black;
  background-color: #2e2e2e;
  padding: 0px 20px;
  border-radius: 20px;
  font-size: 18px;
  align-items: center;
  width: fit-content;
  height: 30px;
  flex-wrap: wrap;
`
