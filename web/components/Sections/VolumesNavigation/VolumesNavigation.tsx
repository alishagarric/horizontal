// Core
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  LMNTS_SiteVolume,
  SiteVolumes,
} from "../../../constants/site/Settings";
import { ThemeChanger } from "../../ThemeChanger";
import { Brandmark } from "../../_svg/Brandmark/Brandmark";
import { Logotype } from "../../_svg/Logotype/Logotype";
import { MarqueeRow } from "../MarqueeRow";

// Styles
import {
  VolumesNavigationClassName,
  VolumesNavigationStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_VolumesNavigation = {
 // hasSidebar?: boolean;
};

export type LMNTS_VolumesNavigationState = {
  marquee: string | false;
}

/**
 *
 * @name VolumesNavigation
 * @author Peter Laxalt and Alisha Garric
 * @requires /studio/sections/VolumesNavigation
 *
 */

export class VolumesNavigation extends React.PureComponent<
  LMNTS_VolumesNavigation,
  LMNTS_VolumesNavigationState
> {
  constructor(props: LMNTS_VolumesNavigation) {
    super(props);

    this.state = {
      marquee : false,
    };

    this.updateMarquee = this.updateMarquee.bind(this);
  }

  updateMarquee(text?: string) {
    console.log("here");
    this.setState({
      marquee: text ? text : false,
    });
  }




  render() {
    let { children } = this.props;
    let { marquee  } = this.state;
    /*const volumesRef = useRef<HTMLDivElement>();

    useEffect(() => {
      volumesRef.current.scrollTo(10000, 0);
    });*/

    return (
      <VolumesNavigationStyle
        className={`${VolumesNavigationClassName}`}
      >
        <div className={`${VolumesNavigationClassName}__inner`}>
          <h1 className="__visually-hidden">Volume Industries</h1>
          {/* ______________________________________ */}
          {/* Branding */}
          <div className={`${VolumesNavigationClassName}__branding`}>

            <div className={`${VolumesNavigationClassName}__branding__brandmark`}>
              <Brandmark />
            </div>
            <div className={`${VolumesNavigationClassName}__branding__logotype-marquee`}>
              { marquee && <MarqueeRow strings={[marquee]} />}
              <Logotype />
            </div>
          </div>

          {/* ______________________________________ */}
          {/* Volume Listings */}
          <div
            ref={/*volumesRef*/""}
            className={`${VolumesNavigationClassName}__volumes`}
          >
            {/* ________________________________________ */}
            {/* Outlined text (the font has a weird apex) */}
            <ul
              className={`${VolumesNavigationClassName}__volumes__listings ${VolumesNavigationClassName}__volumes__listings--outline`}
            >
              {SiteVolumes.map((volume: LMNTS_SiteVolume, idx: number) => {
                return (
                  <ThemeChanger theme={volume.theme}>
                    <li
                      key={idx}
                      className={`${VolumesNavigationClassName}__volumes__listings__item`}
                    >
                    
                      <Link href={volume.link}>
                        <a
                          className={`${VolumesNavigationClassName}__volumes__listings__item__el`}
                        >
                          {volume.number}
                        </a>
                      </Link>
                    </li>
                  </ThemeChanger>
                );
              })}
            </ul>

            {/* ________________________________________ */}
            {/* Solid Text */}
            <ul
              className={`${VolumesNavigationClassName}__volumes__listings ${VolumesNavigationClassName}__volumes__listings--solid`}
            >
              {SiteVolumes.map((volume: LMNTS_SiteVolume, idx: number) => {
                return (
                  <ThemeChanger theme={volume.theme}>
                    <li
                      key={idx}
                      onMouseOver={() => this.updateMarquee(volume.name)} 
                      onMouseLeave={() => this.updateMarquee()} 
                      className={`${VolumesNavigationClassName}__volumes__listings__item ${VolumesNavigationClassName}__volumes__listings__item--${
                        idx + 1 === SiteVolumes.length ? "is-active" : "is-inactive"
                      } `}
                    >
                    
                      <Link href={volume.link}>
                        <a
                          className={`${VolumesNavigationClassName}__volumes__listings__item__el`}
                        >
                          {volume.number}
                        </a>
                      </Link>
                    </li>
                  </ThemeChanger>
                );
              })}
            </ul>
          </div>

          {/* ______________________________________ */}
          {/* Bottom Text */}
          <div className={`${VolumesNavigationClassName}__bottom-text`}>
            <h2>Industries</h2>
          </div>
        </div>
      </VolumesNavigationStyle>
    );
  }
};

// End Component
// __________________________________________________________________________________________
