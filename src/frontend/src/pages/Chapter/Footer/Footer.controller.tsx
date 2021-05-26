import * as React from "react";

import { FooterView } from "./Footer.view";

export const Footer = ({ nextChapter, previousChapter }: any) => {
  return <FooterView nextChapter={nextChapter} previousChapter={previousChapter} />;
};
