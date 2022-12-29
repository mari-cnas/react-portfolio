import styled from 'styled-components'

export const HeaderBg = styled.div`
  background-color: #412b82;

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
    color: grey;
  }
`
