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
import { DefaultTheme, LMNTS_SiteIndustry, Settings, SiteIndustries } from "../../constants/site/Settings";
import LazyImage from "../../utils/lazyImage";
import { ThemeChanger } from "../ThemeChanger";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type LMNTS_Navigation = {
  router: NextRouter;
};

export const Navigation: React.FunctionComponent<LMNTS_Navigation> = ({
  router,
}) => {
  console.log(router);

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
        <div
          className={`${NavigationClassName}__top__col ${NavigationClassName}__top__col--left`}
        >
            <Link href="/about">
              <a className={`${NavigationClassName}__link`}>About</a>
            </Link>
        </div>

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
        <div
          className={`${NavigationClassName}__top__col ${NavigationClassName}__top__col--right`}
        >
            <Link href="/contact">
              <a className={`${NavigationClassName}__link`}>Contact</a>
            </Link>
        </div>
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
        <div
          className={`${NavigationClassName}__bottom__col ${NavigationClassName}__bottom__col--left`}
        >
            <Link href="/new-york-city">
              <a className={`${NavigationClassName}__link`}>New York City</a>
            </Link>
        </div>

        {/* ____________________________________ */}
        {/* Right Column */}
        <div
          className={`${NavigationClassName}__bottom__col ${NavigationClassName}__bottom__col--right`}
        >
            <Link href="/los-angeles">
              <a className={`${NavigationClassName}__link`}>Los Angeles</a>
            </Link>
        </div>
      </div>
    </NavigationStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
