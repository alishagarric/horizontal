// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { CssUtils } from "../../constants/styles/CssUtils";
import { Root } from "../../constants/Root";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name AccordionsListingClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const AccordionsListingClassName = "accordions-listing";

/**
 *
 * @name AccordionsListingStyle
 * @author Alisha Garric
 *
 */
export const AccordionsListingStyle = styled.li`
  h2 {
    font-size: 10vw;
    font-weight: 400;
    line-height: 0.8;
    padding-bottom: calc(${Root.ColumnGutter} * 3);

    &:hover {
      opacity: 0.2;
      cursor: pointer;
    }
  }

  &.__is-open {
    .${AccordionsListingClassName}__accordion {
      max-height: 100vh;
    }
  }
`;
