/**
 *
 * Footer.js
 * @author Peter Laxalt
 * @description The website footer.
 *
 */

// Core
import React from "react";

// Types
import { NextRouter } from "next/router";

// Styles
import { FooterClassName, FooterStyle } from "./styles.scss";
import { parseRouteToClassName } from "../../utils/parseRouteToClassName";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type LMNTS_Footer = {
  router: NextRouter;
};

export const Footer: React.FunctionComponent<LMNTS_Footer> = ({ router }) => {
  return (
    <FooterStyle
      className={`${FooterClassName} ${FooterClassName}--route-is-${parseRouteToClassName(router.pathname)}`}
    >
      <div className={`${FooterClassName}__inner`} />
    </FooterStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
