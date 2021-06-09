import * as PropTypes from "prop-types";
import * as React from "react";

import { PopupView } from "./Popup.view";

type PopupProps = {
    title: string;
    text: string;
    link: string;
    buttonText: string;
    closePopup: () => void
};

export const Popup = ({ title, text, link, buttonText, closePopup }: PopupProps) => {
    return <PopupView closePopup={closePopup} buttonText={buttonText} link={link} text={text} title={title} />;
};

Popup.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    buttonText: PropTypes.string,
    closePopup: PropTypes.func
};
