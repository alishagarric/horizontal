/**
 *
 * HeroColumn.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website HeroColumn Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Theme } from "../../../constants/Theme";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const HeroColumnClassName = `hero-column`;

export const HeroColumnStyle = styled.section`
  &.${HeroColumnClassName} {
    width: 500px;
    margin-left: calc(var(--columnGutter) * 2);
    margin-right: calc(var(--columnGutter) * 2);

    a {
      color: ${Theme.Color.Text};
    }
    
    &.width--medium {
      width: 400px;
    }

    &.width--small {
      width: 300px;
    }

    .${HeroColumnClassName}__inner {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .${HeroColumnClassName}__sub-header {
      font-size: 20px;
      padding-bottom: calc(${Theme.Base.Size.Lg} * 3);
    }

    .${HeroColumnClassName}__inner > div > *:not(h1) {
      padding-right: 20%;
    }
  }
`;
