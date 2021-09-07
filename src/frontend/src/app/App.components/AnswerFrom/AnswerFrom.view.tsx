import React from 'react'
import * as PropTypes from 'prop-types'
import { StyledFromWrapper, StyledInput, StyledLable, StyledSection, StyledTitle } from './AnswerFrom.style'

type AnswerFromViewProps = {
  answerText: string
  lable: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const AnswerFromView = ({ answerText, lable, value, onChange }: AnswerFromViewProps) => (
  <StyledSection>
    <StyledTitle>{answerText}</StyledTitle>
    <StyledFromWrapper>
      <StyledLable htmlFor="answer-input">{lable}</StyledLable>
      <StyledInput type="text" id="answer-input" value={value} onChange={onChange} />
    </StyledFromWrapper>
  </StyledSection>
)

AnswerFromView.propTypes = {
  answerText: PropTypes.string,
  lable: PropTypes.string,
}
