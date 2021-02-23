// Core
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
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
  VolumesArrowsNavigationClassName,
  VolumesArrowsNavigationStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_VolumesArrowsNavigation = {

};

/**
 *
 * @name VolumesArrowsNavigation
 * @author Alisha Garric
 * @requires /studio/sections/VolumesArrowsNavigation
 *
 */
export const VolumesArrowsNavigation: React.FunctionComponent<LMNTS_Section_VolumesArrowsNavigation> = () => {
  const router: NextRouter = useRouter();
  let volumeIndex = -1;

  SiteVolumes.forEach((volume, index) => {
    if ( volume.link == router.asPath) {
      volumeIndex = index;
    }
  });

  if ( volumeIndex != -1 ){
    let number = SiteVolumes[volumeIndex].number;
    let title = SiteVolumes[volumeIndex].name;
    let prevNumber = SiteVolumes[volumeIndex - 1] ? SiteVolumes[volumeIndex - 1].number : SiteVolumes[SiteVolumes.length - 1].number;
    let nextNumber = SiteVolumes[volumeIndex + 1] ? SiteVolumes[volumeIndex + 1].number : SiteVolumes[0].number;
    let prevLink = SiteVolumes[volumeIndex - 1] ? SiteVolumes[volumeIndex - 1].link : SiteVolumes[SiteVolumes.length - 1].link;
    let nextLink = SiteVolumes[volumeIndex + 1] ? SiteVolumes[volumeIndex + 1].link : SiteVolumes[0].link;

  
    return (
      <VolumesArrowsNavigationStyle
        className={`${VolumesArrowsNavigationClassName}`}
      >
        <div className={`${VolumesArrowsNavigationClassName}__inner`}>
          <Link href={prevLink} >
            <a className={`${VolumesArrowsNavigationClassName}__col ${VolumesArrowsNavigationClassName}__col--left`}>
              Volume {prevNumber}
            </a>
          </Link>
          <div className={`${VolumesArrowsNavigationClassName}__col ${VolumesArrowsNavigationClassName}__col--center`}>
            {number}: <strong>{title}</strong>
          </div>
          <Link href={nextLink} >
            <a className={`${VolumesArrowsNavigationClassName}__col ${VolumesArrowsNavigationClassName}__col--right`}>
              Volume {nextNumber}
            </a>
          </Link>
        </div>
      </VolumesArrowsNavigationStyle>
    );
  }
  else return <></>;
};

// End Component
// __________________________________________________________________________________________
