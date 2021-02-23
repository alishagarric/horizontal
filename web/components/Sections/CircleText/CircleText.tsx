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
  CircleTextClassName,
  CircleTextStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_CircleText = {
  text: string
  diameter: number; //in pixels
};

/**
 *
 * @name CircleText
 * @author Alisha Garric
 * @requires /studio/sections/CircleText
 *
 */
export const CircleText: React.FunctionComponent<LMNTS_Section_CircleText> = ({
  text,
  diameter
}) => {

  return (
    <CircleTextStyle
      className={`${CircleTextClassName}`}
      diameter={`${diameter}px`}
    >
      <svg viewBox={`0 0 ${diameter} ${diameter}`}>
          <path id="curve"
            d={`
              M 0, ${diameter / 2}
              a ${diameter / 2},${diameter / 2} 0 1,1 ${diameter},0
              a ${diameter / 2},${diameter / 2} 0 1,1 -${diameter},0
              `}/>
        <text width={diameter}>
          <textPath alignmentBaseline="baseline" xlinkHref="#curve">
            {text}
          </textPath>
        </text>

      </svg>
    </CircleTextStyle>
  );
};

// End Component
// __________________________________________________________________________________________
