/**
 *
 * ContactBlock.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website ContactBlock Styles. To be used in hero column in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../constants/Root";
import { Base } from "../../constants/styles/Base";
import { Theme } from "../../constants/Theme";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ContactBlockClassName = `contact-block`;

export const ContactBlockStyle = styled.div`
  &.${ContactBlockClassName} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .h4:not(.__exclude-border) {
      border-top: 1px solid ${Theme.Color.varForeground};
      padding-top: 10px;
      
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      > .__mobile-space {
        padding-bottom: calc(${Root.ColumnGutter} * 4);
      }
    }
  }
`;
