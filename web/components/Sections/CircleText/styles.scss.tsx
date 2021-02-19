/**
 *
 * CircleText.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website CircleText Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { rotating } from "../../../constants/styles/Animation";
import { Theme } from "../../../constants/Theme";
import { GridColumnClassName } from "../GridColumn/styles.scss";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CircleTextClassName = `circle-text`;

export const CircleTextStyle = styled.section<{
  diameter: string;
}>`
  &.${CircleTextClassName} {
    z-index: 2;
    max-width: 0px;
    position: relative;
    -webkit-animation: ${rotating} 15s linear infinite;
    -moz-animation: ${rotating} 15s linear infinite;
    -ms-animation: ${rotating} 15s linear infinite;
    -o-animation: ${rotating} 15s linear infinite;
    animation: ${rotating} 15s linear infinite;

    svg {
      height: ${(props) => props.diameter};
      width: ${(props) => props.diameter};
      fill: transparent;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(calc(-50% +  ${Root.ColumnGutter}), -50%);
      overflow: visible;
      

      text {
        fill: ${Theme.Color.Text};
        font-size: 30px;
        text-transform: uppercase;
        font-weight: 600;
        mix-blend-mode: difference;
      }
    }
  }

  //Section kerning
  + section.${GridColumnClassName} {
    margin-left: 0;
  }
`;
