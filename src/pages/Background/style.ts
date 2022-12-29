import styled from 'styled-components'

export const BackBg = styled.div`
  background-color: #8d4568;

  h3 {
    font-size: 30px;
    text-align: start;
    margin: 10px 10px 10px 20px;
    color: white;
  }

  p {
    font-size: 14px;
  }
`

export const BgContainer = styled.div``

export const TimeBox = styled.div`
  float: right;
  margin: 0px 0px 0px 20px;
  width: 46.5%;
  padding: 0px 50px 43px;
  background: rgb(242, 242, 242);
  position: relative;

  &:before {
    content: '';
    border-right: 20px solid rgb(242, 242, 242);
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
  }

  .time-icon:before {
    content: '';
    border-radius: 50%;
    margin: auto;
    position: absolute;
    top: 0px;
    left: -35px;
    bottom: 0px;
    width: 10px;
    height: 10px;
    background: #199030;
    padding: 2px;
    box-sizing: initial;
  }

  .time-line:before {
    content: '';
    margin: auto;
    position: absolute;
    top: 0px;
    left: -30px;
    bottom: 0px;
    width: 0.5px;
    height: 100%;
    background: black;
    padding: 2px;
    box-sizing: initial;
  }
`
