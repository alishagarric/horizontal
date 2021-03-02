// Core
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import {
  LMNTS_SiteVolume,
  SiteVolumes,
} from "../../../constants/site/Settings";
import { getVolumeNav, volumeNav } from "../../../utils/getVolumeNav";
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
  let nav: volumeNav = getVolumeNav(router); 

  if (nav ){
    return (
      <VolumesArrowsNavigationStyle
        className={`${VolumesArrowsNavigationClassName}`}
      >
        <div className={`${VolumesArrowsNavigationClassName}__inner`}>
          <p className={`${VolumesArrowsNavigationClassName}__col ${VolumesArrowsNavigationClassName}__col--left`}>
            <Link href={nav.prevLink} >
              <a>
                <span>Volume {nav.prevNumber}</span>
              </a>
            </Link>
          </p>
          <p className={`${VolumesArrowsNavigationClassName}__col ${VolumesArrowsNavigationClassName}__col--center`}>
            {nav.number}: <strong>{nav.title}</strong>
          </p>
          <p className={`${VolumesArrowsNavigationClassName}__col ${VolumesArrowsNavigationClassName}__col--right`}>
            <Link href={nav.nextLink}>
              <a>
                <span>Volume {nav.nextNumber}</span>
              </a>
            </Link>
          </p>
        </div>
      </VolumesArrowsNavigationStyle>
    );
  }
  else return <></>;
};

// End Component
// __________________________________________________________________________________________
