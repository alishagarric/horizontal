// /pages/_app_.js
import React from "react";
import { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { ColorUtils } from "../constants/styles/Color";
import { DefaultTheme, SitePages, SiteVolumes } from "../constants/site/Settings";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_CustomAppData = AppProps & {};

/**
 *
 * /pages/_app_.js
 * @author Peter Laxalt
 * @description The wrapper around every page. This is the best place to load data and
 * @description store it in our React Context to be accessible anywhere, so we are doing
 * @description one call for all data at a time.
 *
 */

const MyApp = ({ Component, pageProps, router }: LMNTS_CustomAppData) => {
  let PageTheme = ColorUtils.SetThemeFromServer(DefaultTheme);
  let thisPage = SitePages.concat(SiteVolumes).filter( (page, index) =>
    page.link == router.asPath
  ); 

  if (router && router.asPath && thisPage.length > 0 ){
    PageTheme = ColorUtils.SetThemeFromServer(thisPage[0].theme);
  }

  // Render our App
  return (
    <>
      <PageTheme /> 
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
