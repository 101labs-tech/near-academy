import styled from 'styled-components/macro'

import { backgroundColorLight } from 'styles'

export const GdprStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 80px;

  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  grid-gap: 10px;
  -webkit-box-shadow: 0px -2px 10px 5px rgba(0,0,0,0.2); 
  box-shadow: 0px -2px 10px 5px rgba(0,0,0,0.2);

  background-color: ${backgroundColorLight};
  padding: 10px 20px 0 20px;

  p {
    font-size: 17px;
  }
`
