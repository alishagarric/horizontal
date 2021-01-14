// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../../constants/Root";

import { CssUtils } from "../../../constants/styles/CssUtils";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name HorizontalScrollSectionClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const HorizontalScrollSectionClassName = "x-scroll";

/**
 *
 * @name HorizontalScrollSectionStyle
 * @author Peter Laxalt
 *
 */
export const HorizontalScrollSectionStyle = styled.section<{
  forceFullWidth: boolean;
}>`
  ${(props) =>
    props.forceFullWidth ? CssUtils.ForceFullWidth(Root.Grid.Gutter.Left) : ""};

  &.${HorizontalScrollSectionClassName} {
    .${HorizontalScrollSectionClassName}__content-wrapper {
      padding-left: ${(props) =>
        props.forceFullWidth ? Root.Grid.Gutter.Left : 0};
    }
  }
`;
