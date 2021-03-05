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
import { DefaultTheme, LMNTS_SiteIndustry, SiteIndustries, SitePages, SiteVolumes } from "../../constants/site/Settings";
import LazyImage from "../../utils/lazyImage";
import { VolumesNavigationClassName } from "../Sections/VolumesNavigation/styles.scss";
import { ThemeChanger } from "../ThemeChanger";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type LMNTS_Navigation = {
  router: NextRouter;
};

 export type LMNTS_NavigationState = {
  industriesVisible: boolean;
  menuVisible: boolean;
  initialSiteLoad: boolean;
  volumesNavOffset: number;
 }
 
 /**
  *
  * @name VolumesNavigation
  * @author Peter Laxalt and Alisha Garric
  * @requires /studio/sections/VolumesNavigation
  *
  */
 
 export class Navigation extends React.PureComponent<
   LMNTS_Navigation,
   LMNTS_NavigationState
 > {
   constructor(props: LMNTS_Navigation) {
     super(props);
 
     this.state = {
      industriesVisible: false,
      menuVisible: false,
      initialSiteLoad: true,
      volumesNavOffset: -1,
     };
 
     this.setIndustriesVisible = this.setIndustriesVisible.bind(this);
     this.setMenuVisible = this.setMenuVisible.bind(this);
     this.setInitialSiteLoad = this.setInitialSiteLoad.bind(this);
   }
 
   setIndustriesVisible(bool: boolean) {
     this.setState({
      industriesVisible: bool
     });
   }

   setMenuVisible(bool: boolean) {
    this.setState({
      menuVisible: bool
    });
  }

  setInitialSiteLoad(bool: boolean) {
    this.setState({
      initialSiteLoad: bool
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.router.asPath != "/"){
      this.setInitialSiteLoad(false);
    }
  }


  componentDidMount(){
    let el = document.getElementsByClassName(VolumesNavigationClassName + "__volumes__listings");
    if ( el && el[0] && el[0].scrollWidth && el[0].clientWidth){
      let offset = el[0].clientWidth - el[0].scrollWidth;

      this.setState({
        volumesNavOffset: offset < 0 ? offset : 0
      });
    }
  }


  render() {
    let aboutPageIndex = SitePages.findIndex(page => page.name == "About");
    let aboutPage = aboutPageIndex != -1 ? SitePages[aboutPageIndex] : false;
  
    let contactPageIndex = SitePages.findIndex(page => page.name == "Contact");
    let contactPage = contactPageIndex != -1 ? SitePages[contactPageIndex] : false;
  
    let nycPageIndex = SitePages.findIndex(page => page.name == "New York City");
    let nycPage = nycPageIndex != -1 ? SitePages[nycPageIndex] : false;
  
    let laPageIndex = SitePages.findIndex(page => page.name == "Los Angeles");
    let laPage = laPageIndex != -1 ? SitePages[laPageIndex] : false;

    let { industriesVisible, menuVisible, initialSiteLoad } = this.state;
    let { router } = this.props;

    return (
      <NavigationStyle
        className={`
          ${NavigationClassName} ${NavigationClassName}--menu-is-${industriesVisible ? "visible" : "not-visible"} 
          ${NavigationClassName}--route-is-${parseRouteToClassName(router.pathname)} 
          ${industriesVisible ? "__industries-expanded" : ""}
          ${menuVisible ? "__menu-expanded" : ""}
          ${initialSiteLoad ? "__homepage-animation" : ""}
        `}
        volumesNavOffset={this.state.volumesNavOffset + "px"}
      >
        {/* ____________________________________ */}
        {/* Navigation Top */}
        <div className={`${NavigationClassName}__top`}>
          {/* ____________________________________ */}
          {/* Left Column */}
          
            <div
              className={`${NavigationClassName}__top__col ${NavigationClassName}__top__col--left`}
            >
              {aboutPage && 
                <Link href={aboutPage.link}>
                  <a 
                    className={`${NavigationClassName}__link ${router.asPath == aboutPage.link ? "__active": ""} __desktop-link`}
                    onClick={() => this.setIndustriesVisible(false)}  
                  >
                    {aboutPage.name}
                  </a>
                </Link>
              }

              {/*<ThemeChanger theme={DefaultTheme}>*/}
                <button 
                  className={`${NavigationClassName}__menu-btn __mobile-link`}
                  onClick={() => {
                    industriesVisible ? this.setIndustriesVisible(false) : this.setIndustriesVisible(true);
                    this.setMenuVisible(false);;
                  }}  
                >
                  Industries
                </button>
              {/*</ThemeChanger>*/}
            </div>

          {/* ____________________________________ */}
          {/* Center Column */}
          <div
            className={`${NavigationClassName}__top__col ${NavigationClassName}__top__col--center`}
          >
              <Link href="/">
                <a
                  className={`${NavigationClassName}__link ${NavigationClassName}__link--branding`}
                  onClick={() => this.setIndustriesVisible(false)}  
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
              {contactPage && 
                <Link href={contactPage.link}>
                  <a 
                    className={`${NavigationClassName}__link ${router.asPath == contactPage.link ? "__active": ""} __desktop-link`}
                    onClick={() => this.setIndustriesVisible(false)}  
                  >{contactPage.name}</a>
                </Link>
              }

              <button 
                className={`${NavigationClassName}__menu-btn __mobile-link`}
                onClick={() => {
                  menuVisible ? this.setMenuVisible(false) : this.setMenuVisible(true);
                  this.setIndustriesVisible(false);
                }}
              >
                Menu
              </button>
            </div>
        </div>

        {/* ____________________________________ */}
        {/* Navigation Bottom */}
        <div className={`${NavigationClassName}__bottom`}>

          {/* ____________________________________ */}
          {/* Center Column */}
          <div
            className={`${NavigationClassName}__bottom__col ${NavigationClassName}__bottom__col--center`}
          >
            <button
              className={`${NavigationClassName}__industries-btn`}
              onClick={() =>
                industriesVisible ? this.setIndustriesVisible(false) : this.setIndustriesVisible(true)
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
                        <label htmlFor={industry.name}><h2>{industry.name}</h2></label>
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
                <a 
                  className={`${NavigationClassName}__link ${router.asPath == nycPage.link ? "__active": ""}`}
                  onClick={() => this.setIndustriesVisible(false)}  
                >
                  {nycPage.name}
                </a>
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
                  <a 
                    className={`${NavigationClassName}__link ${router.asPath == laPage.link ? "__active": ""}`}
                    onClick={() => this.setIndustriesVisible(false)}  
                  >
                    {laPage.name}
                  </a>
                </Link>
            </div>
          }
        </div>

        <div className={`${NavigationClassName}__menu-overlay`}>
          <p className="h1">Volumes</p>
          <ul className={`${NavigationClassName}__menu-overlay__site-volumes`}>
            {SiteVolumes.map((page, idx: number) => {
              return (
                <li key={idx}>
                  <Link href={page.link}>
                    <a onClick={() => this.setMenuVisible(false)}>
                      <span className={`${NavigationClassName}__menu-overlay__site-volumes__number`}>{page.number}</span>
                      <span className={`${NavigationClassName}__menu-overlay__site-volumes__name`}>{page.name}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className={`${NavigationClassName}__menu-overlay__site-pages`}>
            {SitePages.map((page, idx: number) => {
              return (
                <li key={idx}>
                  <Link href={page.link}>
                    <a onClick={() => this.setMenuVisible(false)}>{page.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div 
          className={`${NavigationClassName}__menu-exit`}
          onClick={() => { 
            this.setMenuVisible(false)
            this.setIndustriesVisible(false)
          }}
        >
          <span></span>
        </div>
      </NavigationStyle>
    );
  }
};

// End Component
//////////////////////////////////////////////////////////////////////
