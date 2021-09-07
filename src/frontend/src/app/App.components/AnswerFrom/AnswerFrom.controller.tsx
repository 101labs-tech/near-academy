import React from 'react'
import * as PropTypes from 'prop-types'
import { AnswerFromView } from './AnswerFrom.view'

type AnswerFrom = {
  answerText: string
  lable: string
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export const AnswerFrom = ({ answerText, lable, inputValue, setInputValue }: AnswerFrom) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setInputValue(value)
  }
  return <AnswerFromView lable={lable} answerText={answerText} value={inputValue} onChange={onChange} />
}

AnswerFrom.propTypes = {
  answerText: PropTypes.string,
  lable: PropTypes.string,
}
