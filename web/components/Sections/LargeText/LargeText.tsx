// Core
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  LMNTS_SiteVolume,
  SiteVolumes,
} from "../../../constants/site/Settings";
import LazyImage from "../../../utils/lazyImage";
import { Brandmark } from "../../_svg/Brandmark/Brandmark";
import { Logotype } from "../../_svg/Logotype/Logotype";

// Styles
import {
  LargeTextClassName,
  LargeTextStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_LargeText = {
  width: "large" | "medium" | "small";
  text: string;
};

/**
 *
 * @name LargeText
 * @author Alisha Garric
 * @requires /studio/sections/LargeText
 *
 */
export const LargeText: React.FunctionComponent<LMNTS_Section_LargeText> = ({
  text,
  width,
}) => {

  return (
    <LargeTextStyle
      className={`${LargeTextClassName} width--${width}`}
    >
      <div className={`${LargeTextClassName}__inner`}>
        <p>{text}</p>
      </div>
    </LargeTextStyle>
  );
};

// End Component
// __________________________________________________________________________________________
