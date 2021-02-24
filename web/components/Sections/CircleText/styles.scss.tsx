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

export const CircleTextStyle = styled.svg<{
  diameter: string;
}>`
  &.${CircleTextClassName} {
      height: ${(props) => props.diameter};
      width: ${(props) => props.diameter};
      fill: transparent;
      position: absolute;
      top: calc(50% + calc(${(props) => props.diameter} / -2));
      left: calc(${(props) => props.diameter} / -2);
      overflow: visible;
      -webkit-animation: ${rotating} 15s linear infinite;
      -moz-animation: ${rotating} 15s linear infinite;
      -ms-animation: ${rotating} 15s linear infinite;
      -o-animation: ${rotating} 15s linear infinite;
      animation: ${rotating} 15s linear infinite;
      mix-blend-mode: overlay;
      
      text {
        fill: ${Theme.Color.varForeground};
        font-size: 30px;
        text-transform: uppercase;
        font-weight: 600;
      }
    }


  //Section kerning
  + section.${GridColumnClassName} {
    margin-left: 0;
  }
`;
