/**
 *
 * Navigation.js
 * @author Peter Laxalt
 * @description The website Navigation.
 *
 */

// Core
import React, { useState } from "react";
import { NextRouter } from "next/router";

// Styles
import { NavigationClassName, NavigationStyle } from "./styles.scss";

// Components
import Link from "next/link";
import { Brandmark } from "../_svg/Brandmark/Brandmark";
import { Logotype } from "../_svg/Logotype/Logotype";
import { parseRouteToClassName } from "../../utils/parseRouteToClassName";
import { LMNTS_SiteIndustry, SiteIndustries, SitePages } from "../../constants/site/Settings";
import LazyImage from "../../utils/lazyImage";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type LMNTS_Navigation = {
  router: NextRouter;
};

export const Navigation: React.FunctionComponent<LMNTS_Navigation> = ({
  router,
}) => {

  let aboutPageIndex = SitePages.findIndex(page => page.name == "About");
  let aboutPage = aboutPageIndex != -1 ? SitePages[aboutPageIndex] : false;

  let contactPageIndex = SitePages.findIndex(page => page.name == "Contact");
  let contactPage = contactPageIndex != -1 ? SitePages[contactPageIndex] : false;

  let nycPageIndex = SitePages.findIndex(page => page.name == "New York City");
  let nycPage = nycPageIndex != -1 ? SitePages[nycPageIndex] : false;

  let laPageIndex = SitePages.findIndex(page => page.name == "Los Angeles");
  let laPage = laPageIndex != -1 ? SitePages[laPageIndex] : false;

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <NavigationStyle
      className={`${NavigationClassName} ${NavigationClassName}--menu-is-${
        menuVisible ? "visible" : "not-visible"
      } ${NavigationClassName}--route-is-${parseRouteToClassName(
        router.pathname
      )} `}
    >
      {/* ____________________________________ */}
      {/* Navigation Top */}
      <div className={`${NavigationClassName}__top`}>
        {/* ____________________________________ */}
        {/* Left Column */}
        {aboutPage && 
          <div
            className={`${NavigationClassName}__top__col ${NavigationClassName}__top__col--left`}
          >
              <Link href={aboutPage.link}>
                <a className={`${NavigationClassName}__link ${router.asPath == aboutPage.link ? "__active": ""}`}>{aboutPage.name}</a>
              </Link>
          </div>
        }

        {/* ____________________________________ */}
        {/* Center Column */}
        <div
          className={`${NavigationClassName}__top__col ${NavigationClassName}__top__col--center`}
        >
            <Link href="/">
              <a
                className={`${NavigationClassName}__link ${NavigationClassName}__link--branding`}
              >
                <span className={`${NavigationClassName}__brandmark`}>
                  <Brandmark />
                </span>
                <span className={`${NavigationClassName}__logotype`}>
                  <Logotype />
                </span>
              </a>
            </Link>
        </div>

        {/* ____________________________________ */}
        {/* Right Column */}
        {contactPage && 
          <div
            className={`${NavigationClassName}__top__col ${NavigationClassName}__top__col--right`}
          >
              <Link href={contactPage.link}>
                <a className={`${NavigationClassName}__link ${router.asPath == contactPage.link ? "__active": ""}`}>{contactPage.name}</a>
              </Link>
          </div>
        }
      </div>

      {/* ____________________________________ */}
      {/* Navigation Bottom */}
      <div className={`${NavigationClassName}__bottom`}>

        {/* ____________________________________ */}
        {/* Center Column */}
        <div
          className={`${NavigationClassName}__bottom__col ${NavigationClassName}__bottom__col--center ${menuVisible ? "__expanded" : ""}`}
        >
          <button
            className={`${NavigationClassName}__menu-btn`}
            onClick={() =>
              menuVisible ? setMenuVisible(false) : setMenuVisible(true)
            }
          >
            Industries
          </button>
          <nav className={`${NavigationClassName}__menu-nav`}>
            <ul className={`${NavigationClassName}__menu-nav__list`}>
              {SiteIndustries && SiteIndustries.length > 0 &&
                SiteIndustries.map((industry: LMNTS_SiteIndustry, idx: number) => {
                  return (
                    <li
                      key={idx}
                      className={`${NavigationClassName}__menu-nav__list__item`}
                    >
                      <label htmlFor={industry.name}>{industry.name}</label>
                      <input type="checkbox" id={industry.name} />
                      <div className={`${NavigationClassName}__accordion`}>

                        <p className={`${NavigationClassName}__accordion__text-container`}>
                          {industry.description}
                        </p>

                        {industry.images && industry.images.length > 0 &&
                          industry.images.map((image, idxx: number) => {
                            return (
                              <div className={`${NavigationClassName}__accordion__image-container`} key={idxx}>
                                <LazyImage
                                  src={image.image}
                                  alt={"Volume Industries"}
                                />
                              </div>
                            );
                          })
                        }
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          </nav>
        </div>

        {/* ____________________________________ */}
        {/* Left Column */}
        {nycPage &&
          <div
            className={`${NavigationClassName}__bottom__col ${NavigationClassName}__bottom__col--left`}
          >
            <Link href={nycPage.link}>
              <a className={`${NavigationClassName}__link ${router.asPath == nycPage.link ? "__active": ""}`}>{nycPage.name}</a>
            </Link>
          </div>
        }

        {/* ____________________________________ */}
        {/* Right Column */}
        { laPage &&
          <div
            className={`${NavigationClassName}__bottom__col ${NavigationClassName}__bottom__col--right`}
          >
              <Link href={laPage.link}>
                <a className={`${NavigationClassName}__link ${router.asPath == laPage.link ? "__active": ""}`}>{laPage.name}</a>
              </Link>
          </div>
        }
      </div>
    </NavigationStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
