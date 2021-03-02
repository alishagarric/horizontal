// Core
import Link from "next/link";
import React, { Children, useEffect, useRef } from "react";
import {
  LMNTS_SiteVolume,
  SiteVolumes,
} from "../../../constants/site/Settings";
import LazyImage from "../../../utils/lazyImage";
import { Brandmark } from "../../_svg/Brandmark/Brandmark";
import { Logotype } from "../../_svg/Logotype/Logotype";

// Styles
import {
  MobileFooterClassName,
  MobileFooterStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_MobileFooter = {
  caption?: string;
  header: string;
  link: string;
};

/**
 *
 * @name MobileFooter
 * @author Alisha Garric
 * @requires /studio/sections/MobileFooter
 *
 */
export const MobileFooter: React.FunctionComponent<LMNTS_Section_MobileFooter> = ({
  caption,
  header,
  link,
}) => {

  return (
    <MobileFooterStyle
      className={`${MobileFooterClassName}`}
    >
      <Link href={link}>
        <a className={`${MobileFooterClassName}__link ${MobileFooterClassName}__inner`}>
          {caption && <p>{caption}</p>}
          <h2 className="h3">{header}</h2>
        </a>
      </Link>
      <span className={`${MobileFooterClassName}__arrow`}><span></span></span>
    </MobileFooterStyle>
  );
};

// End Component
// __________________________________________________________________________________________
