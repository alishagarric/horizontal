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
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";
import { ContactBlockClassName } from "../../ContactBlock/styles.scss";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const HeroColumnClassName = `hero-column`;

export const HeroColumnStyle = styled.section`
  &.${HeroColumnClassName} {
    width: 500px;
    margin-left: calc(${Root.ColumnGutter} * 2);
    margin-right: calc(${Root.ColumnGutter} * 2);

    a {
      color: ${Theme.Color.Text};
    }

    &.width--xl {
      width: 600px;
    }
    
    &.width--medium {
      width: 400px;
    }

    &.width--small {
      width: 300px;
    }

    .${ContactBlockClassName} {
      height: 100%;
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

    .${HeroColumnClassName}__inner > .${HeroColumnClassName}__header-container > *:not(h1), .${HeroColumnClassName}__inner > *:not(.${HeroColumnClassName}__header-container) {
      padding-right: 20%;
    }
  }
`;
