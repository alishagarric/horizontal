// Core
import Link from "next/link";
import React, { createRef, useEffect, useRef, useState } from "react";
import {
  LMNTS_SiteVolume,
  SiteVolumes,
} from "../../../constants/site/Settings";
import { ThemeChanger } from "../../ThemeChanger";
import { Brandmark } from "../../_svg/Brandmark/Brandmark";
import { Logotype } from "../../_svg/Logotype/Logotype";
import { MarqueeRow } from "../MarqueeRow";
import Draggable from 'react-draggable';

// Styles
import {
  VolumesNavigationClassName,
  VolumesNavigationStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_VolumesNavigation = {
  children?: any;
};

export type LMNTS_VolumesNavigationState = {
  marquee: string | false;
  offsetClass: string;
  volumesNavOffset: number
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
      offsetClass: "__initial-state",
      volumesNavOffset: 0,
    };

    this.updateMarquee = this.updateMarquee.bind(this);
  }

  updateMarquee(text?: string) {
    this.setState({
      marquee: text ? text : false,
    });
  }

  volumesRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

  render() {
    let { marquee  } = this.state;


    return (
      <VolumesNavigationStyle
        className={`${VolumesNavigationClassName}`}
      >
        <div className={`${VolumesNavigationClassName}__inner`}>
          <h1 className="__visually-hidden">Volume Industries</h1>

          <div className={`${VolumesNavigationClassName}__animated-items-container`}>

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
            <Draggable 
              axis="x" 
              defaultPosition={{x: this.state.volumesNavOffset, y: 0}}
              cancel={`.${VolumesNavigationClassName}__volumes__listings__item__el`}
              onMouseDown={(e: MouseEvent) => {
                this.setState({offsetClass: ""});
              }}
            >
              <div
                ref={this.volumesRef}
                className={`${VolumesNavigationClassName}__volumes ${this.state.offsetClass}`}
              >
              
                {/* ________________________________________ */}
                {/* Outlined text (the font has a weird apex) */}
                <ul
                  className={`${VolumesNavigationClassName}__volumes__listings ${VolumesNavigationClassName}__volumes__listings--outline`}
                >
                  {SiteVolumes.map((volume: LMNTS_SiteVolume, idx: number) => {
                    return (
                      <ThemeChanger theme={volume.theme} key={idx}>
                        <div
                          className={`${VolumesNavigationClassName}__volumes__listings__item`}
                        >
                        
                          <Link href={volume.link}>
                            <a
                              className={`${VolumesNavigationClassName}__volumes__listings__item__el`}
                            >
                              {volume.number}
                            </a>
                          </Link>
                        </div>
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
                      <ThemeChanger theme={volume.theme} key={idx}>
                        <div
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
                        </div>
                      </ThemeChanger>
                    );
                  })}
                </ul>
              </div>
            </Draggable>

            {/* ______________________________________ */}
            {/* Bottom Text */}
            <h2 className={`${VolumesNavigationClassName}__bottom-text`}>
              Industries
            </h2>
          </div>
        </div>
      </VolumesNavigationStyle>
    );
  }
};

// End Component
// __________________________________________________________________________________________
