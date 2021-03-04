/**
 *
 * LargeText.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website LargeText Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Base } from "../../../constants/styles/Base";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const LargeTextClassName = `large-text`;

export const LargeTextStyle = styled.section`
  &.${LargeTextClassName} {
    width: 200vh;
    overflow: auto;

    &.width--medium {
      width: 150vh;
    }

    &.width--small {
      width: 100vh;
    }

    p {
      font-size: 16.5vh;
      line-height: 1;
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: portrait) {

      &.width--medium, &.width--small {
        width: auto;
      }

      p {
        font-size: 9vw;
      }
    }
  }
`;
