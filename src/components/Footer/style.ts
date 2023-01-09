import styled from 'styled-components'

export const FooterBg = styled.div`
  display: flex;
  margin-top: auto;
  padding: 10px 10px 10px 10px;
  background-color: #f5f5f7;
  // background-color: #eddd09;
  //background-color: #199030;

  /* unvisited link */
  a:link {
    color: #333;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: #333;
  }

  /* mouse over link */
  a:hover {
    color: grey;
  }

  /* selected link */
  a:active {
    color: grey;
  }
`
