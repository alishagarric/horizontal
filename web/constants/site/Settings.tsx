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

import { Color, LXLT_ColorTheme } from "../styles/Color";
import { Theme } from "../Theme";

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
  theme: LXLT_ColorTheme;
};

export const DefaultTheme: LXLT_ColorTheme = {
  name: "default",
  primary: Color.Primary,
  secondary: Color.Secondary,
  background: Color.Background,
  foreground: Color.Text,
}

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
    theme: {
      name: "salmon",
      primary: "#000000",
      secondary: "#FFFDEB",
      background: "#f4b7a6",
      foreground: "#000000",
    }
  },
  {
    number: "02",
    link: "/volume-02",
    name: "Lorem ipsum",
    theme: {
      name: "lemon",
      primary: "#000000",
      secondary: "#FFFDEB",
      background: "#e9d470",
      foreground: "#000000",
    }
  },
  {
    number: "03",
    link: "/volume-03",
    name: "Lorem ipsum",
    theme: {
      name: "fig",
      primary: "#FFFDEB",
      secondary: "#FFFDEB",
      background: "#000000",
      foreground: "#FFFDEB",
    }
  },
  {
    number: "04",
    link: "/volume-04",
    name: "Lorem ipsum",
    theme: {
      name: "oyster",
      primary: "#000000",
      secondary: "#FFFDEB",
      background: "#959595",
      foreground: "#000000",
    }
  },
];


/**
 *
 * @name LMNTS_SiteIndustry
 * @description Industry type
 *
 */

export type LMNTS_SiteIndustry = {
  description: string;
  name: string;
  images: {
    image: string;
  }[]
};

/**
 *
 * @name SiteIndustries
 * @description Misc site settings
 *
 */
export const SiteIndustries: LMNTS_SiteIndustry[] = [
  {
    name: "Machining",
    description: "Lorem ipsum",
    images: [
      { image: "https://source.unsplash.com/600x1200/?industrial" },
      { image: "https://source.unsplash.com/600x1200/?city" },
      { image: "https://source.unsplash.com/600x1200/?skyscraper" },
      { image: "https://source.unsplash.com/600x1200/?plant" },
      { image: "https://source.unsplash.com/600x1200/?jungle" },
      { image: "https://source.unsplash.com/600x1200/?beach" },
      { image: "https://source.unsplash.com/600x1200/?nature" },
      { image: "https://source.unsplash.com/600x1200/?water" },

    ],
  },
  {
    name: "Metalwork",
    description: "Lorem ipsum",
    images: [
      { image: "https://source.unsplash.com/600x1200/?industrial" },
      { image: "https://source.unsplash.com/600x1200/?city" },
      { image: "https://source.unsplash.com/600x1200/?skyscraper" },
      { image: "https://source.unsplash.com/600x1200/?plant" },
      { image: "https://source.unsplash.com/600x1200/?jungle" },
      { image: "https://source.unsplash.com/600x1200/?beach" },
      { image: "https://source.unsplash.com/600x1200/?nature" },
      { image: "https://source.unsplash.com/600x1200/?water" },
    ],
  },
  {
    name: "Storefronts",
    description: "Lorem ipsum",
    images: [
      { image: "https://source.unsplash.com/600x1200/?industrial" },
      { image: "https://source.unsplash.com/600x1200/?city" },
      { image: "https://source.unsplash.com/600x1200/?skyscraper" },
      { image: "https://source.unsplash.com/600x1200/?plant" },
      { image: "https://source.unsplash.com/600x1200/?jungle" },
      { image: "https://source.unsplash.com/600x1200/?beach" },
      { image: "https://source.unsplash.com/600x1200/?nature" },
      { image: "https://source.unsplash.com/600x1200/?water" },
    ],
  },
  {
    name: "Large Format",
    description: "Lorem ipsum",
    images: [
      { image: "https://source.unsplash.com/600x1200/?industrial" },
      { image: "https://source.unsplash.com/600x1200/?city" },
      { image: "https://source.unsplash.com/600x1200/?skyscraper" },
      { image: "https://source.unsplash.com/600x1200/?plant" },
      { image: "https://source.unsplash.com/600x1200/?jungle" },
      { image: "https://source.unsplash.com/600x1200/?beach" },
      { image: "https://source.unsplash.com/600x1200/?nature" },
      { image: "https://source.unsplash.com/600x1200/?water" },
    ],
  },
  {
    name: "Woodworking",
    description: "Lorem ipsum",
    images: [
      { image: "https://source.unsplash.com/600x1200/?industrial" },
      { image: "https://source.unsplash.com/600x1200/?city" },
      { image: "https://source.unsplash.com/600x1200/?skyscraper" },
      { image: "https://source.unsplash.com/600x1200/?plant" },
      { image: "https://source.unsplash.com/600x1200/?jungle" },
      { image: "https://source.unsplash.com/600x1200/?beach" },
      { image: "https://source.unsplash.com/600x1200/?nature" },
      { image: "https://source.unsplash.com/600x1200/?water" },
    ],
  },
];


