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
   // height: 100%;

    h4:not(.__exclude-border) {
      border-top: 1px solid ${Theme.Color.Text};
      padding-top: 10px;
      
    }
  }
`;
