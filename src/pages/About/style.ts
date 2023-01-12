import { Button } from 'react-bootstrap'
import styled from 'styled-components'

import desktop from '../../assets/desktop.jpg'

export const AboutBg = styled.div`
  background-color: #8d4568;
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
  margin: 5px 5px;

  &:hover {
    background-color: black;
    border-color: black;
  }
`
