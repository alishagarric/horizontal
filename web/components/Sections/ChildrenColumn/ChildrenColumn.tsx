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
  ChildrenColumnClassName,
  ChildrenColumnStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_ChildrenColumn = {
  width?: "large" | "medium" | "small" | "xl";
  justify: "flex-start" | "flex-end" | "space-between";
};

/**
 *
 * @name ChildrenColumn
 * @author Alisha Garric
 * @requires /studio/sections/ChildrenColumn
 *
 */
export const ChildrenColumn: React.FunctionComponent<LMNTS_Section_ChildrenColumn> = ({
  children,
  width,
  justify
}) => {

  return (
    <ChildrenColumnStyle
      className={`${ChildrenColumnClassName} width--${width ? width : "default"} justify--${justify ? justify : "default"}`}
    >
      {children}
    </ChildrenColumnStyle>
  );
};

// End Component
// __________________________________________________________________________________________
