import styled from 'styled-components/macro'
import { bgTextColor, near6, primaryColor, textColor } from 'styles'

export const HeaderStyled = styled.div`
  position: relative;
  text-align: center;
  height: 50px;
  z-index: 1;
  background-color: ${near6};
`

export const HeaderLogo = styled.img`
  padding: 0px;
  z-index: 1;
  margin: auto;
`

export const HeaderLoggedOut = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;

  @media (max-width: 1130px) {
    display: none;
  }
`

export const HeaderLoggedIn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  text-transform: uppercase;

  @media (max-width: 1130px) {
    display: none;
  }
`

export const HeaderMenuItem = styled.div`
  position: relative;
  color: ${textColor};
  line-height: 50px;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  padding: 0 20px;

  &.login {
    background-color: ${primaryColor};
    color: ${bgTextColor};
    width: 128px;
    display: grid;
    grid-template-columns: auto 50px;
    text-align: right;

    > div {
      line-height: 50px;
    }

    > svg {
      height: 28px;
      width: 28px;
      margin: 11px;
      stroke: ${bgTextColor};
    }
  }

  @media (max-width: 1440px) {
    padding: 0 10px;
  }
`
