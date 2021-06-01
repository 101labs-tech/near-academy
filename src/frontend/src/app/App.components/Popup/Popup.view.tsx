import * as PropTypes from 'prop-types'
import * as React from 'react'

import { PopupStyle, PopupTitle, PopupText, PopupWrapper } from './Popup.style'
import {Button} from "../Button/Button.controller";
import {Link} from 'react-router-dom';

type PopupProps = {
    title: string
    text: string,
    link: string,
    buttonText: string
    closePopup: (values: any) => void
}

export const PopupView = ({ text, title, link, buttonText, closePopup }: PopupProps) => {
    return (
      <PopupStyle>
          <PopupWrapper>
              <PopupTitle>{ title }</PopupTitle>
              <PopupText>{ text }</PopupText>
              <div className={'button-wrapper'}>
                  <Button onClick={() => closePopup} text={'Close'} />
                  <Link to={link}>
                      <Button text={buttonText} />
                  </Link>
              </div>
          </PopupWrapper>
      </PopupStyle>
    )
}

PopupView.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    buttonText: PropTypes.string,
    closePopup: PropTypes.func
}
