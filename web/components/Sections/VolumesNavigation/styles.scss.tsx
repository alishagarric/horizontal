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
import { dissapear, reveal, rotating } from "../../../constants/styles/Animation";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";
import { hexToRGB } from "../../../utils/hexToRGB";
import { BrandmarkClassName } from "../../_svg/Brandmark/Brandmark";
import { LogotypeClassName } from "../../_svg/Logotype/Logotype";
import { MarqueeRowClassName, MarqueeRowStyle } from "../MarqueeRow/styles.scss";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const VolumesNavigationClassName = `volumes-nav`;

export const VolumesNavigationStyle = styled.section`
  &.${VolumesNavigationClassName} {
    height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;

    .${VolumesNavigationClassName}__inner {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .${VolumesNavigationClassName}__branding {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      &__brandmark {
        display: none;
      }

      &__logotype-marquee {
        width: 100vw;
        height: 18.8vw;
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
          width: 100%;
          height: 100%;
          transform: scale(0.95);

          path {
            fill: ${Theme.Color.varSecondary};
          }
        }
      }
    }

    .${VolumesNavigationClassName}__animated-items-container {
      position: relative;
    }

    .${VolumesNavigationClassName}__bottom-text {
      //TODO: Make a global style to apply to both instances of "Industries"
      width: 100%;
      height: 15vw;
      font-weight: 400;
      text-transform: uppercase;
      padding-bottom: 0;
      letter-spacing: normal;
      font-size: 12vw;
      text-align: center;
      line-height: 1.15;  
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(calc(29vw + 18.8vw));
      pointer-events: none;

      display: none;     
    }

    .${VolumesNavigationClassName}__volumes {
      position: relative;
      z-index: 1;
      max-width: 100vw;
      // overflow-x: auto;


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
          height: 25vw;
          line-height: 0.8;
          padding: 0 0.125em;
          display: flex;
          flex-direction: column;
          justify-content: center;


          &__el {
            color: ${Theme.Color.varBackground};

            &:hover {
              text-decoration: none;
            }
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      .${VolumesNavigationClassName}__branding {

        //hide hover interaction on mobile
        &__logotype-marquee {
          .${MarqueeRowClassName} {
            display: none;

            ~ .${LogotypeClassName} {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
