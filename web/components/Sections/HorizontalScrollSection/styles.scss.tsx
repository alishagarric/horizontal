// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";

import { CssUtils } from "../../../constants/styles/CssUtils";
import { Theme } from "../../../constants/Theme";
import { BottomNavMargin, BottomNavSize } from "../../Navigation/styles.scss";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name HorizontalScrollSectionClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const HorizontalScrollSectionClassName = "x-scroll";

/**
 *
 * @name HorizontalScrollSectionStyle
 * @author Peter Laxalt
 *
 */
export const HorizontalScrollSectionStyle = styled.section<{
  forceFullWidth: boolean;
}>`
  ${(props) =>
    props.forceFullWidth ? CssUtils.ForceFullWidth(Root.Grid.Gutter.Left) : ""};

  &.${HorizontalScrollSectionClassName} {
    --horizontalScrollSectionSpace: ${Theme.Base.Size.Sm};
    --horizontalScrollSectionHeight: calc(100vh - (${Root.Nav.Size} + ${BottomNavSize} + ${BottomNavMargin} + var(--horizontalScrollSectionSpace) + var(--horizontalScrollSectionSpace)));
    --horizontalScrollSectionTopBarHeight: calc(${Root.Nav.Size} * 0.5);

    &.${HorizontalScrollSectionClassName}--has-topbar {
      --horizontalScrollSectionHeight: calc(100vh - (${Root.Nav.Size} + ${BottomNavSize} + ${BottomNavMargin} + var(--horizontalScrollSectionSpace) + var(--horizontalScrollSectionSpace) + var(--horizontalScrollSectionTopBarHeight)));

      .${HorizontalScrollSectionClassName}__content-wrapper {
        > section {
          margin-top: calc(calc(${Root.Nav.Size} + var(--horizontalScrollSectionSpace)) + var(--horizontalScrollSectionTopBarHeight));
        }
      }
    }


    .${HorizontalScrollSectionClassName}__content-wrapper {
      padding-left: ${(props) =>
        props.forceFullWidth ? Root.Grid.Gutter.Left : 0};

      > section {
        margin-top: calc(${Root.Nav.Size} + var(--horizontalScrollSectionSpace));
        margin-bottom: calc(${BottomNavSize} + ${BottomNavMargin} + var(--horizontalScrollSectionSpace));
        height: var(--horizontalScrollSectionHeight);
        max-height: var(--horizontalScrollSectionHeight);

        &:last-of-type {
          margin-right: 150px;
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: portrait) {
      --horizontalScrollSectionTopBarHeight: calc(${Root.Nav.Size} * 0.75);

      &.${HorizontalScrollSectionClassName}--has-topbar {
        --horizontalScrollSectionHeight: calc(100vh - (${Root.Nav.Size} + ${BottomNavSize} + ${BottomNavMargin} + var(--horizontalScrollSectionSpace) + var(--horizontalScrollSectionSpace) + var(--horizontalScrollSectionTopBarHeight)));
  
        .${HorizontalScrollSectionClassName}__content-wrapper {
          > section {
            margin-top: 0;

            &:first-of-type {
              margin-top: calc(calc(${Root.Nav.Size} + var(--horizontalScrollSectionSpace)) + var(--horizontalScrollSectionTopBarHeight));
            }
          }
        }
      }

      .${HorizontalScrollSectionClassName}__content-wrapper {

        > section {
          height: auto;
          max-height: none;
          margin-top: calc(${Root.ColumnGutter} * 2);
          margin-bottom: calc(${Root.ColumnGutter} * 2);
          margin-left: ${Root.Grid.Gutter.Left};
          margin-right: ${Root.Grid.Gutter.Right};
          width: auto;

          &:first-of-type {
            margin-top: calc(${Root.Nav.Size} + var(--horizontalScrollSectionSpace));
          }

          &:last-of-type {
            margin-right: ${Root.Grid.Gutter.Right};
          }
        }

      }
    }
  }
`;
