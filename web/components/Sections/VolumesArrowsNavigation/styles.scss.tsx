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

      //arrow line
      &--left::before, &--right::after {
        content: "";
        width: ${Theme.Base.Size.Sm};
        height: 2px;
        transform: scaleY(.5);
        background-color: ${Theme.Color.varForeground};
        display: block;
      }

      //arrow top
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

      //arrow top on left
      &--left::after {
        left: calc(${Theme.Base.Size.Sm} / -4);
        transform: rotate(-45deg) scale(.5);
      }

      //arrow top on right
      &--right::before {
        right: calc(${Theme.Base.Size.Sm} / -4);
        transform: rotate(135deg) scale(.5);
      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      background-color: ${Theme.Color.varBackground};

      .${VolumesArrowsNavigationClassName}__inner {
        align-items: center;
        height: calc(${Root.Nav.Size} * 0.75);

        &:after {
          position: absolute;
          content: "";
          height: 20px;
          bottom: -20px;
          background: linear-gradient(${Theme.Color.varBackground}, transparent);
          left: 0;
          right: 0;
        }
      }


      .${VolumesArrowsNavigationClassName}__col--left span, 
      .${VolumesArrowsNavigationClassName}__col--right span {
        opacity: 0;
        white-space: nowrap;
        max-width: 1px;
        display: inline-block;
      }

    }
  }
`;
