import styled from 'styled-components/macro'

export const FooterStyled = styled.div`
  height: 70px;
  background: rgba(255, 255, 255, 1);
  margin-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 900px) {
    margin: 0;
  }

  a {
    bottom: 20px;
    button {
      transform: scale(0.9);
    }
  }

  > a:nth-child(1) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
  }

  > a:nth-child(2) {
    position: absolute;
    bottom: 0;
    right: 77px;
    width: 200px;
  }

  @media (max-width: 900px) {
    > a:nth-child(1) {
      display: none;
    }
    button {
      margin: 5px 0;
    }
  }
`
