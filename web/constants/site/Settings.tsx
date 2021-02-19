/**
 *
 * Settings.js
 * @author Peter Laxalt
 * @description This is the sitewide information that is used throughout the entire
 * build of the site. This goes from SEO to headings and also into the
 * core Gatsby config files as well.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

import { Color } from "../styles/Color";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name __IS_DEBUG_MODE__
 * @description Debug mode for console
 *
 */
export const __IS_DEBUG_MODE__ = true;

/**
 *
 * @name Settings
 * @description Misc site settings
 *
 */
export const Settings = {
  siteTitle: "LAXALT STUDIO",
  siteTitleShort: "LAXALT",
  siteDescription: "Studio Laxalt.",
  siteBaseKeywords:
    "lego, engineering, engineering, classes, summer, camps, spring, learning, learn, play, education, knowledge",
  siteUrl: "https://play-well-staging.netlify.com/",
  themeColor: Color.Primary,
  secondaryColor: Color.Secondary,
  backgroundColor: Color.Background,
  pathPrefix: "/",
  logo: "src/assets/images/icon.png",
  logoLight: "src/assets/images/icon.png",
  logoDark: "src/assets/images/icon.png",
  social: {
    twitter: "PlayWell_TEK",
    facebook: "PlayWellTEK",
    instagram: "playwellteknologies",
    fbAppId: "56639339020281",
  },

  contactPage: "/contact",
  miscPage: "/misc",
};

/**
 *
 * @name LMNTS_SiteVolume
 * @description Volume type
 *
 */

export type LMNTS_SiteVolume = {
  number: string;
  link: string;
  name: string;
};

/**
 *
 * @name SiteVolumes
 * @description Misc site settings
 *
 */
export const SiteVolumes: LMNTS_SiteVolume[] = [
  {
    number: "01",
    link: "/volume-01",
    name: "Lorem ipsum",
  },
  {
    number: "02",
    link: "/volume-02",
    name: "Lorem ipsum",
  },
  {
    number: "03",
    link: "/volume-03",
    name: "Lorem ipsum",
  },
  {
    number: "04",
    link: "/volume-04",
    name: "Lorem ipsum",
  },
];
