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
    width: 100vw;

    &.width--medium {
      width: 75vw;
    }

    &.width--small {
      width: 50vw;
    }

    p {
      font-size: 10vw;
      line-height: 1;
    }
  }
`;
