import { Button, Container } from 'react-bootstrap'
import styled from 'styled-components'

import desktop from '../../assets/desktop.jpg'

export const AboutBg = styled(Container)`
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  text-align: center;
  line-height: 25px;

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 1023px) {
    width: 50%;
  }
`

export const AboutImg = styled.div`
  background-image: url(${desktop});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const ProfileBtn = styled(Button)`
  background-color: #412b82;
  border-color: #412b82;
  border-radius: 25px;
  padding: 5px 30px;
  font-size: 20px;

  &:hover {
    background-color: black;
    border-color: black;
  }
`
