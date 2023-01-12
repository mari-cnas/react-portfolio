import styled from 'styled-components'

interface IProjectBgProps {
  image: string
}

interface IVerifyProps {
  status: string
}

export const ProjectCard = styled.div`
  float: left;
  transition: box-shadow 0.3s;
  color: white-space;

  &:hover {
    top: -5px;
    transform: scale(1.1);
    box-shadow: 0 0 11px black;
    background-color: grey;
  }

  .info {
    display: none;
  }

  &:hover .info {
    display: block;
  }

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
    color: white;
  }

  /* selected link */
  a:active {
    color: white;
  }
`

export const ProjectBg = styled.div<IProjectBgProps>`
  background: ${({ image }) => `rgba(0, 0, 0, 0.7)url(${image} ) `};
  background-blend-mode: darken;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  min-height: 200px;

  &:hover {
    background-blend-mode: lighten;
    h4,
    p {
      display: none;
    }
  }
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
