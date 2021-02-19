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
  }
`;
