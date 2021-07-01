import styled from 'styled-components/macro'

export const FooterStyled = styled.div`
  height: 70px;
  background: #F2F2F2;
  margin-top: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    margin: 0;
  }

  a {
    bottom: 20px;
    button {
      transform: scale(0.9);
      width: 200px;
    }
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
export const ProgressBarWrapper = styled.div`
    width: 100%;
    
     @media (max-width: 900px) {
        display:none;
     }
`
