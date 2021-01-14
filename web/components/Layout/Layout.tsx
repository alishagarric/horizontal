/**
 *
 * Layout.js
 * @author Peter Laxalt
 * @description The website layout.
 *
 */

// Constants
import React from "react";
import { GlobalStyle } from "../../constants/styles/Global";

// Components
import { SiteHead } from "../SiteHead";

// Utils
import { NextRouter, useRouter } from "next/router";
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";
import { parseRouteToClassName } from "../../utils/parseRouteToClassName";

// Begin Interface
//////////////////////////////////////////////////////////////////////

interface Layout {
  children?: any;
  title?: string;
}

// Begin Component
//////////////////////////////////////////////////////////////////////

export const LayoutClassName = "wrapper";

export const Layout: React.FunctionComponent = ({ children }: Layout) => {
  const router: NextRouter = useRouter();

  return (
    <>
      <GlobalStyle />
      <SiteHead title="VOLUME INDUSTRIES" />
      <Navigation router={router} />
      <main className={`${LayoutClassName} ${LayoutClassName}--route-is-${parseRouteToClassName(router.pathname)}`}>{children}</main>
      <Footer router={router} />
    </>
  );
};
