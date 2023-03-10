import styled from 'styled-components'

export const BackBg = styled.div`
  --primary: #8d4568;
  --primary-gradient: #4d7cde;

  .section-header {
    text-align: center;
  }
  .bg-gradient_solid {
    background: var(--primary-gradient);
    color: #fff;
  }
  .steps {
    position: relative;
    margin-top: 32px;
  }
  .steps::after {
    content: '';
    position: absolute;
    width: 1px;
    background-color: white;
    opacity: 0.4;
    top: 0;
    bottom: 0;
    left: 50%;
  }

  .steps .content p {
    color: #676767;
    font-size: 16px;
  }

  .steps .content h2 {
    font-weight: 600;
    font-size: 16px;
    color: #676767;
  }

  .steps-container {
    position: relative;
    background-color: inherit;
    width: calc(50% + 32px);
  }

  .steps-container .content {
    padding: 32px;
    background-color: white;
    position: relative;
    border-radius: 0px 0px 80px 0px;
    box-shadow: 0px 16px 27px rgb(0 11 30 / 10%);
  }

  .steps .steps-container:nth-child(even) {
    left: calc(50% - 32px);
    flex-direction: row-reverse;
  }

  .steps-container {
    display: flex;
  }

  .steps .steps-container .date {
    font-weight: 900;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 10px;
    width: 62px;
    height: 62px;
    background-color: var(--primary);
    border-radius: 50%;
    flex-shrink: 0;
    align-items: center;
    display: flex;
    justify-content: center;
    z-index: 777;
  }

  .step-line {
    width: 40px;
    background-color: #fff;
    height: 1px;
    margin-top: 31px;
    opacity: 0.4;
    flex-shrink: 0;
  }

  @media (max-width: 767px) {
    .steps::after {
      left: 32px;
    }
    .steps-container {
      left: 0;
      flex-direction: row-reverse;
      width: auto;
      margin-bottom: 16px;
    }
    .steps .steps-container:nth-child(even) {
      left: 0;
    }
  }
`
