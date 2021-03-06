/**
 *
 * SocialLinks.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website SocialLinks Styles. To be used in hero column in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Base } from "../../constants/styles/Base";
import { Theme } from "../../constants/Theme";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SocialLinksClassName = `social-links`;

export const SocialLinksStyle = styled.div`
  &.${SocialLinksClassName} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;

    ul {
      border-top: 1px solid ${Theme.Color.varForeground};
      padding-top: 10px;

      li {

        a {
          font-size: 4rem;
          line-height: 1.2;

        }
      }
    }

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      ul li a {
        font-size: 2.6rem;
      }
    }
  }
`;
