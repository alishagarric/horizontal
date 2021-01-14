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

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const NavigationClassName = `nav`;
export const BottomNavSize = `calc(${Root.Nav.Size} * 1.15)`;

export const NavigationStyle = styled.nav`
  &.${NavigationClassName} {
    position: relative;
    z-index: 800;

    // @TODO: Convert to if route is NOT home with &:not()
    &.${NavigationClassName}--route-is-sample-page {
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
        transform: translateY(12%) scale(0.65);
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

        position: absolute;

        display: block;

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

      padding-bottom: calc(${Root.Size} * 1.75);

      align-items: flex-end;

      &:before,
      &:after {
        width: calc(100% - (${Root.Grid.Gutter.Left} * 2));
      }

      &:before {
        bottom: ${Root.Size};
      }

      &:after {
        top: 0;
      }
    }

    .${NavigationClassName}__menu-btn {
      appearance: none;

      border: 0;
      outline: 0;

      cursor: pointer;

      padding: 0;
      margin: 0;

      transform: translateY(12%) scale(1);
      transform-origin: bottom center;
      transition: transform 2s ease;
      will-change: transform;

      background: none;

      font-size: 4vw;
      text-transform: uppercase;
    }

    .${NavigationClassName}__link {
      color: ${Theme.Color.varForeground};
      text-transform: uppercase;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;
