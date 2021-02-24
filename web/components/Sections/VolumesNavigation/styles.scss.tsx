/**
 *
 * VolumesNavigation.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website VolumesNavigation Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";
import { hexToRGB } from "../../../utils/hexToRGB";
import { LogotypeClassName } from "../../_svg/Logotype/Logotype";
import { MarqueeRowClassName, MarqueeRowStyle } from "../MarqueeRow/styles.scss";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const VolumesNavigationClassName = `volumes-nav`;

export const VolumesNavigationStyle = styled.section`
  &.${VolumesNavigationClassName} {
    .${VolumesNavigationClassName}__inner {
      height: 100vh;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      overflow: hidden; // temporary;
    }

    .${VolumesNavigationClassName}__branding {
      display: flex;
      justify-content: center;
      width: 100%;

      &__brandmark {
        display: none; // temporary
      }

      &__logotype-marquee {
        width: calc(100vw - (${Root.Grid.Gutter.Right} * 2));
        position: relative;

        .${MarqueeRowClassName} {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          ~ .${LogotypeClassName} {
            opacity: 0;
          }
        }

        .${LogotypeClassName} {
          width: calc(100vw - (${Root.Grid.Gutter.Right} * 2));
          /* height: 30vh; */
          height: auto;

          path {
            fill: ${Theme.Color.varSecondary};
          }
        }
      }
    }

    .${VolumesNavigationClassName}__bottom-text {
      display: none; // temporary
    }

    .${VolumesNavigationClassName}__volumes {
      position: relative;
      z-index: 1;

      overflow-x: auto;
      overflow-y: hidden;

      max-width: 100vw;

      &__listings--solid {
        position: absolute;
        left: 0;
        top: 0;

        z-index: 5;

        .${VolumesNavigationClassName}__volumes__listings__item {
          &--is-active {
            .${VolumesNavigationClassName}__volumes__listings__item__el {
              color: ${Theme.Color.varSecondary};
            }
          }
        }

        .${VolumesNavigationClassName}__volumes__listings__item__el {
          color: ${Theme.Color.varBackground};

          &:hover {
            color: ${Theme.Color.varSecondary};
          }
        }
      }

      &__listings--outline {
        position: relative;
        z-index: 1;

        .${VolumesNavigationClassName}__volumes__listings__item__el {
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${Theme.Color.varSecondary};
        }
      }

      &__listings {
        display: flex;

        &__item {
          font-weight: 500;
          font-size: 25vw;
          line-height: 0.8;

          padding: 0.125em;

          &:first-of-type {
            padding-left: 0;
          }

          &:last-of-type {
            padding-left: 0;
          }


          &__el {
            color: ${Theme.Color.varBackground};

            &:hover {
              text-decoration: none;
            }
          }
        }
      }
    }
  }
`;
