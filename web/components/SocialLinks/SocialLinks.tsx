// Core
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  LMNTS_SiteVolume,
  SiteVolumes,
} from "../../constants/site/Settings";
import LazyImage from "../../utils/lazyImage";
import { Brandmark } from "../_svg/Brandmark/Brandmark";
import { Logotype } from "../_svg/Logotype/Logotype";

// Styles
import {
  SocialLinksClassName,
  SocialLinksStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_SocialLinks = {
  links: {
    label: string;
    href: string;
  }[];
};

/**
 *
 * @name SocialLinks
 * @author Alisha Garric
 * @requires /studio/sections/SocialLinks
 *
 */
export const SocialLinks: React.FunctionComponent<LMNTS_Section_SocialLinks> = ({
  links,
}) => {

  return (
    <SocialLinksStyle className={`${SocialLinksClassName}`}>
      <ul>
        {links && links.length > 0 &&         
          links.map((item, idx: number) => {
            return (
              <li>
              <a href={`${item.href}`}>{item.label}</a>
              </li>
            );
          })
        }
      </ul>
    </SocialLinksStyle>
  );
};

// End Component
// __________________________________________________________________________________________
