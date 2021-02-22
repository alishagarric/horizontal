// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";
import {} from "../../constants/styles/CssUtils";
//import { CaptionTextStyles } from "../../constants/styles/Font";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name ThemeChangerClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const ThemeChangerClassName = "theme-changer";

/**
 *
 * @name ThemeChangerStyle
 * @author Alisha Garric
 *
 */
export const ThemeChangerStyle = styled.div`
  &.${ThemeChangerClassName} {
    /*

    .${ThemeChangerClassName}__option {
      border: 2px solid ${Theme.Color.varBackground};

      box-shadow: 0px 0px 0px 1px ${Theme.Color.varForeground};

      &:hover {
        box-shadow: 0px 0px 0px 2px ${Theme.Color.varForeground};
      }

      &--active {
        box-shadow: 0px 0px 0px 2px ${Theme.Color.varForeground};

        &:hover {
          box-shadow: 0px 0px 0px 2px ${Theme.Color.varForeground};
        }
      }
    }
    */
  }
`;
