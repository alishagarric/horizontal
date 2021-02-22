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

// Styles
import {
  VolumesNavigationClassName,
  VolumesNavigationStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_VolumesNavigation = {
  hasSidebar?: boolean;
};

/**
 *
 * @name VolumesNavigation
 * @author Peter Laxalt
 * @requires /studio/sections/VolumesNavigation
 *
 */
export const VolumesNavigation: React.FunctionComponent<LMNTS_Section_VolumesNavigation> = ({
  hasSidebar,
}) => {
  const volumesRef = useRef<HTMLDivElement>();

  useEffect(() => {
    volumesRef.current.scrollTo(10000, 0);
  });

  return (
    <VolumesNavigationStyle
      className={`${VolumesNavigationClassName} ${VolumesNavigationClassName}--${
        hasSidebar ? `has-sidebar` : `sans-sidebar`
      }`}
    >
      <div className={`${VolumesNavigationClassName}__inner`}>
        <h1 className="__visually-hidden">Volume Industries</h1>
        {/* ______________________________________ */}
        {/* Branding */}
        <div className={`${VolumesNavigationClassName}__branding`}>
          <div className={`${VolumesNavigationClassName}__branding__brandmark`}>
            <Brandmark />
          </div>
          <div className={`${VolumesNavigationClassName}__branding__logotype`}>
            <Logotype />
          </div>
        </div>

        {/* ______________________________________ */}
        {/* Volume Listings */}
        <div
          ref={volumesRef}
          className={`${VolumesNavigationClassName}__volumes`}
        >
          {/* ________________________________________ */}
          {/* Outlined text (the font has a weird apex) */}
          <ul
            className={`${VolumesNavigationClassName}__volumes__listings ${VolumesNavigationClassName}__volumes__listings--outline`}
          >
            {SiteVolumes.map((volume: LMNTS_SiteVolume, idx: number) => {
              return (
                <li
                  key={idx}
                  className={`${VolumesNavigationClassName}__volumes__listings__item`}
                >
                  <ThemeChanger theme={volume.theme}>
                    <Link href={volume.link}>
                      <a
                        className={`${VolumesNavigationClassName}__volumes__listings__item__el`}
                      >
                        {volume.number}
                      </a>
                    </Link>
                  </ThemeChanger>
                </li>
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
                <li
                  key={idx}
                  className={`${VolumesNavigationClassName}__volumes__listings__item ${VolumesNavigationClassName}__volumes__listings__item--${
                    idx + 1 === SiteVolumes.length ? "is-active" : "is-inactive"
                  } `}
                >
                  <ThemeChanger theme={volume.theme}>
                    <Link href={volume.link}>
                      <a
                        className={`${VolumesNavigationClassName}__volumes__listings__item__el`}
                      >
                        {volume.number}
                      </a>
                    </Link>
                  </ThemeChanger>
                </li>
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
};

// End Component
// __________________________________________________________________________________________
