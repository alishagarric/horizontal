/**
 *
 * GridDoubleColumn.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website GridDoubleColumn Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";
import { hexToRGB } from "../../../utils/hexToRGB";
import { GridColumnClassName } from "../GridColumn/styles.scss";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const GridDoubleColumnClassName = `grid-double-column`;

export const GridDoubleColumnStyle = styled.section`
  &.${GridDoubleColumnClassName} {
    height: 100%;
    margin-left: calc(${Root.ColumnGutter} * 2);
    margin-right: calc(${Root.ColumnGutter} * 2);
    width: var(--horizontalScrollSectionHeight);
    display: grid;
    grid-template-rows: 50% 50%;
    position: relative;
    background: ${Theme.Color.varBackground};

    .${GridDoubleColumnClassName}__block  {
      width: 100%;
    }

    .${GridDoubleColumnClassName}__img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    .${GridDoubleColumnClassName}__text-container {
      position: relative;
      grid-row: 2 / 3;
      margin-top: ${Root.ColumnGutter};
    }

    .${GridDoubleColumnClassName}__img-container {
      position: relative;
      grid-row: 1 / 2;
      margin-bottom: ${Root.ColumnGutter};

      &:after {
        background: ${Theme.Color.varForeground};
        opacity: 0.1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
      }
    }

    &--two-images {
      grid-template-columns: 50% 50%;

      .${GridDoubleColumnClassName}__img-container  {
        width: calc(100% - ${Root.ColumnGutter});

        //left image
        &:first-of-type {
          grid-column: 1 / 2;
        }

        //right image
        &:nth-of-type(2) {
          grid-column: 2 / 3;
          margin-left: ${Root.ColumnGutter}; 
        }
      }

      .${GridDoubleColumnClassName}__text-container {
        grid-column: 1 / 3;
      }
    }

    &--reversed {
      .${GridDoubleColumnClassName}__img-container {
        grid-row: 2 / 3;
        margin-top: ${Root.ColumnGutter}; 
        margin-bottom: 0;
      }

      .${GridDoubleColumnClassName}__text-container {
        grid-row: 1 / 2;
        margin-bottom: ${Root.ColumnGutter}; 
        margin-top: 0;
      }
    }


    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {
      grid-template-rows: auto;
      
      .${GridDoubleColumnClassName}__img-container  {
        height: calc(50vw - ${Root.Grid.Gutter.Left});
      }

      h2 {
        font-size: 1.2rem;
      }
    }
  }

  //Section kerning
  + section.${GridColumnClassName}, + section.${GridDoubleColumnClassName}  {
    margin-left: 0;

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {
      margin-left: ${Root.Grid.Gutter.Left};
      margin-bottom: 0;
    }
  }
`;