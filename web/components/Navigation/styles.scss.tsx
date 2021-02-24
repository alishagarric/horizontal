/**
 *
 * Navigation.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website Navigation Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";
import { BrandmarkClassName } from "../_svg/Brandmark/Brandmark";
import { LogotypeClassName } from "../_svg/Logotype/Logotype";
import { CssUtils } from "../../constants/styles/CssUtils";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const NavigationClassName = `nav`;
export const BottomNavSize = Root.Nav.Size;
export const BottomNavMargin = Theme.Base.Size.Sm;

export const NavigationStyle = styled.nav`
  &.${NavigationClassName} {
    position: relative;
    z-index: 800;

    &:not(.${NavigationClassName}--route-is-home) {
      // _________________________________
      // Transition Navigation
      .${NavigationClassName}__top, .${NavigationClassName}__bottom {
        // _________________________________
        // Lines
        &:before,
        &:after {
          transform: scaleX(1);
        }
      }

      // _________________________________
      // Menu Button
      .${NavigationClassName}__menu-btn {
       // transform: translateY(12%) scale(0.65);
       transform: translateY(0%) scale(0.65);
       height: ${BottomNavSize};
      }

      // _________________________________
      // Transition Brandmark
      .${NavigationClassName}__top {
        .${NavigationClassName}__link--branding {
          .${NavigationClassName}__brandmark,
            .${NavigationClassName}__logotype {
            transition: transform 2s ease, opacity 2s ease;
            will-change: transform, opacity;
          }

          .${NavigationClassName}__brandmark {
            transform: translateY(-100%);
            opacity: 0;

            .${BrandmarkClassName} {
              width: 60px;
              height: 60px;
            }
          }

          .${NavigationClassName}__logotype {
            transform: translateY(-83%);
            opacity: 1;

            .${LogotypeClassName} {
              height: 60px;
              width: 100%;
            }
          }
        }
      }
    }

    .${NavigationClassName}__top, .${NavigationClassName}__bottom {
      position: fixed;
      left: 0;

      width: 100vw;

      display: flex;
      justify-content: space-between;

      padding: 0 ${Root.Grid.Gutter.Left};

      &:before,
      &:after {
        content: "";
        opacity: 0.4;

        position: absolute;

        display: block;
        z-index: 1;

        left: ${Root.Grid.Gutter.Left};

        transform: scaleX(0);
        /* transform-origin: left center; */
        transition: transform 2s ease;
        will-change: transform;

        width: 0px;
        height: 2px;

        background: ${Theme.Color.varForeground};
      }
    }

    .${NavigationClassName}__top {
      top: 0;

      height: ${Root.Nav.Size};

      align-items: center;

      &:before {
        bottom: 0;

        width: calc(100% - (${Root.Grid.Gutter.Left} * 2));
      }

      .${NavigationClassName}__link--branding {
        width: 250px;
        height: ${Root.Nav.Size};
        overflow: hidden;

        display: block;

        .${NavigationClassName}__brandmark, .${NavigationClassName}__logotype {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .${NavigationClassName}__brandmark, .${NavigationClassName}__logotype {
          transition: transform 2s ease, opacity 2s ease;
          will-change: transform, opacity;
        }

        .${NavigationClassName}__brandmark {
          transform: translateY(17%);
          opacity: 1;

          .${BrandmarkClassName} {
            width: 60px;
            height: 60px;
          }
        }

        .${NavigationClassName}__logotype {
          transform: translateY(17%);
          opacity: 0;

          .${LogotypeClassName} {
            height: 60px;
            width: 100%;
          }
        }

        svg {
          max-width: 100%;
        }
      }
    }

    .${NavigationClassName}__bottom {
      bottom: 0;

      height: ${BottomNavSize};
      margin-bottom: ${BottomNavMargin};

      align-items: center;

      &:before,
      &:after {
        width: calc(100% - (${Root.Grid.Gutter.Left} * 2));
      }

      &:before {
        bottom: 0;
      }

      &:after {
        top: 0;
      }

      &__col--left, &__col--right {
        position: relative;
        z-index: 3;
        will-change: transform;
        transition: transform .25s ease 1s;
      }

      &__col--center {
        position: fixed;
        left: 0;
        top: ${Root.Nav.Size};
        height: calc(100vh - ${Root.Nav.Size});
        transform: translateY( calc(calc(100vh - ${Root.Nav.Size}) - ${BottomNavSize} - ${BottomNavMargin}) );
        width: 100vw;
        text-align: center;
        z-index: 2;
        will-change: transform, overflow, background;
        transition: transform 1s, background .25s ease 1s;
        

        &.__expanded {
          transform: translateY(0);
          overflow: auto;
          background: ${Theme.Color.varBackground};
          transition: transform 1s ease 0.25s, background 0.25s;

          .${NavigationClassName}__menu-nav {
            opacity: 1;
            transition: opacity .25s;
          }

          ~ .${NavigationClassName}__bottom__col {
            transition: transform .25s;
          }

          ~ .${NavigationClassName}__bottom__col--left {
            transform: translateX(-150%);
          }

          ~ .${NavigationClassName}__bottom__col--right {
            transform: translateX(150%);
          }
        }
      }
    }

    .${NavigationClassName}__menu-btn {
      appearance: none;
      color: ${Theme.Color.varForeground};

      border: 0;
      outline: 0;

      cursor: pointer;

      padding: 0;
      margin: 0;

     // transform: translateY(12%) scale(1);
     //  transform-origin: bottom center;
      transform: translateY(0%) scale(1);
      transform-origin: center center;
      transition: transform 2s ease;
      will-change: transform;

      background: none;

      font-size: 4vw;
      text-transform: uppercase;
    }

    .${NavigationClassName}__menu-nav {
      position: relative;
      opacity: 0;
      will-change: opacity;
      transition: opacity .25s ease 1s; 

      &__list {   
        padding-bottom: 25vh; 

        &__item {
          font-size: 10vw;
          text-align: center;

          label:hover {
            opacity: 0.2;
            cursor: pointer;
          }

          input[type=checkbox] {
            display: none;
          }

          input[type=checkbox]:checked + .${NavigationClassName}__accordion {
            padding: calc(${Root.ColumnGutter} * 4) calc(${Root.ColumnGutter} * 4) calc(${Root.ColumnGutter} * 8) calc(${Root.ColumnGutter} * 4);
            max-height: 100000000px;
          }

          //make the last image the biggest image in the accordion grid
          &:nth-of-type(even) .${NavigationClassName}__accordion__image-container:nth-of-type(8) {
            grid-row: 2 / 4;
            grid-column: 2 / 4;
          }

          //make the last image the biggest image in the accordion grid
          &:nth-of-type(odd) .${NavigationClassName}__accordion__image-container:nth-of-type(8) {
            grid-row: 2 / 4;
            grid-column: 3 / 5;
          }
        }
      }
    }

    .${NavigationClassName}__accordion {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: calc(${Root.ColumnGutter} * 2);
      max-height: 0px;
      overflow: hidden;

      &__image-container {
        padding-top: 100%;
        position: relative;

        img {
          ${CssUtils.ObjectFit()};
        }
      }

      &__text-container { 
        text-align: left;
        font-size: 1.5vw;
      }
    }

    .${NavigationClassName}__link {
      color: ${Theme.Color.varForeground};
      text-transform: uppercase;

      &.__active {
        position: relative;

        &:after {
          --circleSize: ${Theme.Base.Size.Sm};
          content: "";
          width: calc(100% + var(--circleSize));
          height: calc(100% + var(--circleSize));
          border-radius: 50%;
          border: 1px solid ${Theme.Color.varForeground};
          left: calc(var(--circleSize) / -2);
          top: calc(var(--circleSize) / -2);
          position: absolute;
        }
      }

      &:hover {
        text-decoration: none;
      }
    }
  }
`;
