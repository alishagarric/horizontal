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
import { rotating, rotatingAndShrink } from "../../../constants/styles/Animation";
import { Base } from "../../../constants/styles/Base";
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

    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      top: calc(${(props) => props.diameter} / -2);
      left: calc(50% + calc(${(props) => props.diameter} / -2));
      -webkit-animation: ${rotatingAndShrink} 15s linear infinite;
      -moz-animation: ${rotatingAndShrink} 15s linear infinite;
      -ms-animation: ${rotatingAndShrink} 15s linear infinite;
      -o-animation: ${rotatingAndShrink} 15s linear infinite;
      animation: ${rotatingAndShrink} 15s linear infinite;
    }
  }
`;
