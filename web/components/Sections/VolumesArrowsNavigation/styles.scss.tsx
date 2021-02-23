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

export const VolumesArrowsNavigationClassName = `volumes-arrow-nav`;

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
      height: calc(${Root.Nav.Size} * 0.5);
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }

    .${VolumesArrowsNavigationClassName}__col {
      padding-bottom: 0;
      
      &--left, &--right {
        text-transform: uppercase;
        display: flex;
        align-items: center;
        position: relative;

        a {
          color: ${Theme.Color.varForeground};
          padding: 0 calc(${Theme.Base.Size.Sm} / 4);
        }
      }

      &--left::before, &--right::after {
        content: "";
        width: ${Theme.Base.Size.Sm};
        height: 2px;
        transform: scaleY(.5);
        background-color: ${Theme.Color.varForeground};
        display: block;
      }

      &--left::after, &--right::before {
        content: "";
        position: absolute;
        width: ${Theme.Base.Size.Sm};
        height: ${Theme.Base.Size.Sm};
        border-left: 2px solid ${Theme.Color.varForeground};
        border-top: 2px solid ${Theme.Color.varForeground};
        display: block;
        top: 0;
      }

      &--left::after {
        left: calc(${Theme.Base.Size.Sm} / -4);
        transform: rotate(-45deg) scale(.5);
      }

      &--right::before {
        right: calc(${Theme.Base.Size.Sm} / -4);
        transform: rotate(135deg) scale(.5);
      }


    }

  }
`;
