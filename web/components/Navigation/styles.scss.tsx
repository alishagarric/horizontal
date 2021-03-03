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
import { Base } from "../../constants/styles/Base";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const NavigationClassName = `nav`;
export const BottomNavSize = Root.Nav.Size;
export const BottomNavMargin = Theme.Base.Size.Sm;

export const NavigationStyle = styled.nav`
  &.${NavigationClassName} {
    position: relative;
    z-index: 800;
    
    //Special homepage navigation changes
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
      // Industries Button
      .${NavigationClassName}__industries-btn {
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
              width: calc(${Root.Nav.Size} * .75);
              height: calc(${Root.Nav.Size} * .75);
            }
          }

          .${NavigationClassName}__logotype {
            transform: translateY(-83%);
            opacity: 1;

            .${LogotypeClassName} {
              height: calc(${Root.Nav.Size} * .75);
              width: 100%;
            }
          }
        }
      }
    }

    //Hide menu overy on desktop
    .${NavigationClassName}__menu-overlay {
      display: none;
    }

    //Top and bottom shared styles
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

    //Top nav styles
    .${NavigationClassName}__top {
      top: 0;

      height: ${Root.Nav.Size};

      align-items: center;

      &:before {
        bottom: 0;

        width: calc(100% - (${Root.Grid.Gutter.Left} * 2));
      }

      .__mobile-link {
        display: none;
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
            width: calc(${Root.Nav.Size} * .75);
            height: calc(${Root.Nav.Size} * .75);
          }
        }

        .${NavigationClassName}__logotype {
          transform: translateY(17%);
          opacity: 0;

          .${LogotypeClassName} {
            height: calc(${Root.Nav.Size} * .75);
            width: 100%;
          }
        }

        svg {
          max-width: 100%;
        }
      }
    }

    //Bottom nav styles
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
      }

      &__col--center {
        position: fixed;
        pointer-events: none;
        left: 0;
        top: ${Root.Nav.Size};
        height: calc(100vh - ${Root.Nav.Size});
        transform: translateY( calc(calc(100vh - ${Root.Nav.Size}) - ${BottomNavSize} - ${BottomNavMargin}) );
        width: 100vw;
        text-align: center;
        z-index: 2;
        will-change: transform, overflow, background;
        transition: transform 1s, background .25s ease 1s;
      }
    }

    //Industries and mobile menu button styles
    .${NavigationClassName}__menu-btn, .${NavigationClassName}__industries-btn {
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

    //Industries menu itself styles
    .${NavigationClassName}__menu-nav {
      position: relative;
      opacity: 0;
      will-change: opacity;
      transition: opacity .25s ease 1s; 

      &__list {   
        padding-bottom: 25vh; 

        &__item {
          text-align: center;

          label h2 {
            font-size: 10vw;
            font-weight: 400;
            padding-bottom: 0;
          }

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

    //Industries menu accordion styles
    .${NavigationClassName}__accordion {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: calc(${Root.ColumnGutter} * 2);
      max-height: 0px;
      overflow: hidden;

      &__image-container {
        padding-top: 100%;
        position: relative;

        &:after {
          background: ${Theme.Color.varForeground};
          opacity: 0.1;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: "";
        }

        img {
          ${CssUtils.ObjectFit()};
        }
      }

      &__text-container { 
        text-align: left;
        font-size: 1.5vw;
      }
    }

    //Nav link global styles
    .${NavigationClassName}__link {
      color: ${Theme.Color.varForeground};
      text-transform: uppercase;
      display: block;
      will-change: transform, opacity;
      transition: transform .25s ease 1s, opacity .25s ease 1s;

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

    .${NavigationClassName}__menu-exit {
      height: ${Root.Nav.Size};
      width: ${Root.Nav.Size};
      position: fixed;
      top: 0;
      right: ${Root.Grid.Gutter.Left};
      transform: translateX(calc(${Root.Nav.Size} * 1.5)) scale(0.8);
      transform-origin: center right;
      will-change: transform, opacity;
      transition: transform .25s ease, opacity .25s ease;

      &:hover {
        cursor: pointer;
        
        span {
          opacity: 0.2;
        }

        &:before {
          transform: rotate(-45deg) scale(0.8);
        }

        &:after {
          transform: rotate(45deg) scale(0.8);
        }
      }
      
      span {
        width: 100%;
        height: 100%;
        background: ${Theme.Color.varForeground};
        opacity: 0.1;
        display: block;
        will-change: opacity;
        transition: opacity .25s ease;
      }
      
      &:before, &:after {
        content: "";
        position: absolute;
        width: 1px;
        display: block;
        background: ${Theme.Color.varForeground};
        top: 0;
        bottom: 0;
        will-change: transform;
        transition: transform .25s ease;
      }

      &:before {
        left: 50%;
        transform: rotate(-45deg);
      }

      &:after {
        right: 50%;
        transform: rotate(45deg);
      }
    }

    //Styles changes when the industries menu is expanded
    &.__industries-expanded {

      .${NavigationClassName}__link {
        transition: transform .25s ease, opacity .25s ease;
      }

      .${NavigationClassName}__top__col--left, .${NavigationClassName}__bottom__col--left {
        .${NavigationClassName}__link {
          transform: translateX(-150%);
          opacity: 0;          
        }
      }

      .${NavigationClassName}__top__col--right, .${NavigationClassName}__bottom__col--right {
        .${NavigationClassName}__link {
          transform: translateX(150%);
          opacity: 0;          
        }
      }

      .${NavigationClassName}__bottom {
        &__col--center {
          transform: translateY(0);
          overflow: auto;
          background: ${Theme.Color.varBackground};
          transition: transform 1s ease 0.25s, background 0.25s;
          pointer-events: all;

          .${NavigationClassName}__industries-btn {
            transform: translateY(0%) scale(0.55);
          }

          .${NavigationClassName}__menu-nav {
            opacity: 1;
            transition: opacity .25s;
          }

          ~ .${NavigationClassName}__bottom__col {
            transition: transform .25s;
          }
        }
      }
    }

    //Styles changes when either industries or overlay menu is expanded
    &.__industries-expanded, &.__menu-expanded {
      .${NavigationClassName}__menu-btn {
        opacity: 0;  
      }

      .${NavigationClassName}__menu-exit {
        transform: scale(0.8);
      }
    }


    //Screens smaller than small screen
    @media (max-width: ${Base.Media.Width.Sm + "px"}) {

      //hide a bunch of desktop specific stuff
      .${NavigationClassName}__bottom__col--left,
      .${NavigationClassName}__bottom__col--right, 
      .${NavigationClassName}__industries-btn,
      .${NavigationClassName}__top__col--left .__desktop-link, 
      .${NavigationClassName}__top__col--right .__desktop-link {
        display: none;
      }

      //hide a bunch of desktop specific pseudo items
      .${NavigationClassName}__bottom:before,
      .${NavigationClassName}__bottom:after {
        content: none;
      }

      //show a bunch of mobile specific stuff
      .${NavigationClassName}__top__col--left .__mobile-link, 
      .${NavigationClassName}__top__col--right .__mobile-link {
        display: block;
      }

      //Top nav styles
      .${NavigationClassName}__top {
        background-color: ${Theme.Color.varBackground};


        //industry and menu buttons
        .${NavigationClassName}__menu-btn {
          transform: none;
          font-size: 0.7rem;
          transition: opacity .25s ease;
        }

        .${NavigationClassName}__top__col--center {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);

          .${NavigationClassName}__link--branding {
            .${NavigationClassName}__logotype {
              .${LogotypeClassName} {
                height: calc(${Root.Nav.Size} * .5);
              }
            }
          }
        }
      }

      //Bottom nav styles
      .${NavigationClassName}__bottom {
        &__col--center {
          transform: translateY( calc(100vh - ${Root.Nav.Size}));
          text-align: left;
          transition: none;
        }

        .${NavigationClassName}__menu-nav {
          &__list {
            padding-top: ${Root.Size};

            label h2 {
              font-size: 14vw;
            }

            &__item {
              //make the last image the biggest image in the accordion grid
              &:nth-of-type(even) .${NavigationClassName}__accordion__image-container:nth-of-type(8) {
                grid-row: 2 / 4;
                grid-column: 1 / 3;
              }

              //make the last image the biggest image in the accordion grid
              &:nth-of-type(odd) .${NavigationClassName}__accordion__image-container:nth-of-type(8) {
                grid-row: 2 / 4;
                grid-column: 2 / 4;
              }

              //make another image the biggest image in the accordion grid
              &:nth-of-type(even) .${NavigationClassName}__accordion__image-container:nth-of-type(5) {
                grid-row: 5 / 7;
                grid-column: 1 / 3;
              }

              //make another image the biggest image in the accordion grid
              &:nth-of-type(odd) .${NavigationClassName}__accordion__image-container:nth-of-type(5) {
                grid-row: 5 / 7;
                grid-column: 1 / 3;
              }

              //make an image tall
              &:nth-of-type(even) .${NavigationClassName}__accordion__image-container:nth-of-type(4) {
                grid-row: 3 / 5;
                grid-column: 3 / 4;
              }

              //make an image tall
              &:nth-of-type(odd) .${NavigationClassName}__accordion__image-container:nth-of-type(4) {
                grid-row: 3 / 5;
                grid-column: 1 / 2;
              }

            }
          }
        }

        .${NavigationClassName}__accordion {
          gap: calc(${Root.ColumnGutter} * 1);
          grid-template-columns: repeat(3,1fr);

          &__text-container { 
            font-size: 1rem;
            grid-column: 1 / 4;
          }
        }
      }

      //Menu overlay styles
      .${NavigationClassName}__menu-overlay {
        display: flex;
        flex-direction: column;
        left: 0;
        right: 0;
        position: fixed;
        top: ${Root.Nav.Size};
        height: calc(100vh - ${Root.Nav.Size});
        background: ${Theme.Color.varBackground};
        color: ${Theme.Color.varForeground};
        padding: ${Root.Grid.Gutter.Left};
        transform: translateY(calc(100vh - ${Root.Nav.Size}));
        overflow: auto;

        .${NavigationClassName}__spacer {
          flex-grow: 1;
        }

        a {
          color: ${Theme.Color.varForeground};
          display: block;

          &:hover, &:active {
            text-decoration: none;
          }
        }

        &__site-pages:before, .h1 {
          opacity: 0.4;
        }

        &__site-pages:before {
          content: "";
          height: 1vw;
          width: 100px;
          background: ${Theme.Color.varForeground};
          grid-column: 1 / 3;
          margin-top: calc(${Root.Size} * 3);
          margin-bottom: calc(${Root.Size} / 2);
        }

        &__site-pages {
          display: grid;
          grid-template-columns: repeat(2, 1fr);

          a {
            padding: calc(${Root.Size} / 3) 0;
            font-size: 5vw;
          }
        }

        &__site-volumes {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: ${Root.Grid.Gutter.Left};

          a {
            font-size: 5vw;
            font-weight: 600;
            display: flex;
            flex-direction: column;
            height: 100%;
            position: relative;


            &:after, &:before {
              content: "";
              background: ${Theme.Color.varForeground};
              opacity: 0.4;
              position: absolute; 
            }

            &:after {
              bottom: 0;
              width: 1px;
              right: calc(${Root.Grid.Gutter.Left} / -2);
              top: 0;
            }

            &:before {
              right: 0;
              width: 100%;
              height: 1px;
              top: calc(${Root.Grid.Gutter.Left} / -2);
            }
          }

          li:nth-of-type(even) a:after {
            content: none;
          }

          li:nth-of-type(1) a:before, li:nth-of-type(2) a:before {
            content: none;
          }

          &__number {
            font-size: 30vw;
            font-weight: 600;
            display: block;
            text-align: center;
          }

          &__name {
            flex-grow: 1;
            display: block;
            width: 100%;
            padding: calc(${Root.Size} / 3) 0 calc(${Root.Size}) 0;
            display: grid;
            place-content: center;
            text-align: center;
            position: relative;
          }
        }
      }

      //Special homepage navigation changes
      &:not(.${NavigationClassName}--route-is-home) {
        .${NavigationClassName}__top {
          .${NavigationClassName}__link--branding {

            .${NavigationClassName}__logotype {
              transform: translateY(-100%);
            }
          }
        }
      }

      //Styles changes when the industries menu is expanded
      &.__industries-expanded {
        .${NavigationClassName}__bottom__col--center {
          transition: none;
        }
      }

      //Styles changes when the overlay menu is expanded
      &.__menu-expanded {
        .${NavigationClassName}__menu-overlay {
          transform: none;
        }
      }
    }
  }
`;
