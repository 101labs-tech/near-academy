import styled, { keyframes } from 'styled-components/macro'

import { buttonColor, near3, primaryColor } from '../../../styles'

export const clickWave = keyframes`
  from {
    box-shadow: 0 0 0 0 ${primaryColor};
  }
  to {
    box-shadow: 0 0 0 5px ${primaryColor}00;
  }
`

export const ButtonStyled = styled.button`
  border: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  /* border-radius: 55px; */
  border-radius: 5px;
  will-change: box-shadow;
  width: 100%;
  max-width: 275px;
  user-select: none;

  &.clicked {
    animation: ${clickWave} 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    animation-fill-mode: forwards;
  }

  &.primary {
    color: ${buttonColor};
    background: ${near3};
  }

  &.secondary {
    color: ${buttonColor};
    background-color: ${near3};
  }

  &.transparent {
    color: ${buttonColor};
    background-color: initial;
  }

  &.gradient {
    color: ${buttonColor};
    background: linear-gradient(97.4deg, #FD9827 -39.51%, #FB0D1B 105.97%);
  }

  &.loading {
    pointer-events: none;
    opacity: 0.8;
  }
`

export const ButtonText = styled.div`
  text-align: center;
  margin: auto;
  display: inline-block;
  line-height: 36px;
`

export const ButtonIcon = styled.svg<{ invertIcon?: boolean }>`
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: sub;
  margin: ${(props) => (props.invertIcon ? '0 15px 0 0' : '0 0 0 15px')};

  &.primary {
    stroke: ${buttonColor};
  }

  &.secondary {
    stroke: ${buttonColor};
  }

  &.transparent {
    stroke: ${buttonColor};
  }
`

const turn = keyframes`
  100% {
      transform: rotate(360deg);
  }
`

const path = keyframes`
  100% {
      stroke-dashoffset: 0;
  }
`

export const ButtonLoadingIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 15px;
  vertical-align: sub;
  stroke: ${buttonColor};
  stroke-width: 1px;
  stroke-dashoffset: 94.248;
  stroke-dasharray: 47.124;
  animation: ${turn} 1.6s linear infinite forwards, ${path} 1.6s linear infinite forwards;
`
