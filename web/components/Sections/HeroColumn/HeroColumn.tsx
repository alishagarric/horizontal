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
  HeroColumnClassName,
  HeroColumnStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_HeroColumn = {
  header: string
  subHeader?: string;
  width?: "large" | "medium" | "small" | "xl";
};

/**
 *
 * @name HeroColumn
 * @author Alisha Garric
 * @requires /studio/sections/HeroColumn
 *
 */
export const HeroColumn: React.FunctionComponent<LMNTS_Section_HeroColumn> = ({
  header,
  subHeader,
  children,
  width
}) => {

  return (
    <HeroColumnStyle
      className={`${HeroColumnClassName} width--${width ? width : "default"}`}
    >
      <div className={`${HeroColumnClassName}__inner`}>
        <div className={`${HeroColumnClassName}__header-container`}>
          <h1>{header}</h1>
          <p className={`${HeroColumnClassName}__sub-header`}>{subHeader}</p>
        </div>
        {children}
      </div>
    </HeroColumnStyle>
  );
};

// End Component
// __________________________________________________________________________________________
