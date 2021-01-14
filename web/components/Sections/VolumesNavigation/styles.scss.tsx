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

      &__logotype {
        width: calc(100vw - (${Root.Grid.Gutter.Right} * 2));

        .${LogotypeClassName} {
          width: calc(100vw - (${Root.Grid.Gutter.Right} * 2));
          /* height: 30vh; */
          height: auto;
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
              color: ${Theme.Color.varForeground};
            }
          }
        }

        .${VolumesNavigationClassName}__volumes__listings__item__el {
          color: ${Theme.Color.varBackground};

          &:hover {
            color: ${Theme.Color.Secondary};
          }
        }
      }

      &__listings--outline {
        position: relative;
        z-index: 1;

        .${VolumesNavigationClassName}__volumes__listings__item__el {
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${Theme.Color.varForeground};
        }
      }

      &__listings {
        display: flex;

        &__item {
          font-weight: 500;
          font-size: 25vw;
          line-height: 0.8;

          margin-right: 0.25em;

          &__el {
            color: ${Theme.Color.Background};

            &:hover {
              text-decoration: none;
            }
          }
        }
      }
    }
  }
`;
