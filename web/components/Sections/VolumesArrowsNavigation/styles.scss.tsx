/**
 *
 * VolumesArrowsNavigation.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website VolumesArrowsNavigation Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";
import { hexToRGB } from "../../../utils/hexToRGB";
import { LogotypeClassName } from "../../_svg/Logotype/Logotype";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const VolumesArrowsNavigationClassName = `volumes--arrow-nav`;

export const VolumesArrowsNavigationStyle = styled.section`
  &.${VolumesArrowsNavigationClassName} {
    width: 100vw;
      position: fixed;
      top: ${Root.Nav.Size};
      left: 0;
      padding-left: ${Root.Grid.Gutter.Left};
      padding-right: ${Root.Grid.Gutter.Right};
      z-index: 999;

    .${VolumesArrowsNavigationClassName}__inner {

      height: calc(${Root.Nav.Size} * 0.75);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .${VolumesArrowsNavigationClassName}__col {

    }

  }
`;
