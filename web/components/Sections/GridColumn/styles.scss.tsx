/**
 *
 * GridColumn.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website GridColumn Styles. To be used in horizontal loop
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
import { GridDoubleColumnClassName } from "../GridDoubleColumn/styles.scss";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const GridColumnClassName = `grid-column`;

export const GridColumnStyle = styled.section`
  &.${GridColumnClassName} {
    height: 100%;
    margin-left: calc(${Root.ColumnGutter} * 2);
    margin-right: calc(${Root.ColumnGutter} * 2);
    width: calc(var(--horizontalScrollSectionHeight) / 2);
    display: grid;
    grid-template-rows: 50% 50%;
    position: relative;
    background: ${Theme.Color.varBackground};

    &--double-width {
      width: var(--horizontalScrollSectionHeight);
    }

    &--two-items {

      .${GridColumnClassName}__block  {
        width: calc(100% - ${Root.ColumnGutter});

        //top item
        &:first-of-type {
          height: calc(100% - ${Root.ColumnGutter});
          margin-bottom: ${Root.ColumnGutter}; 
          margin-right: ${Root.ColumnGutter}; 
          grid-row: 1 / 2;
        }

        //bottom item
        &:last-of-type {
          grid-row: 2 / 3;
          height: calc(100% - ${Root.ColumnGutter});
          margin-top: ${Root.ColumnGutter}; 
          margin-right: ${Root.ColumnGutter}; 
        }
      }
    }

    &--reversed .${GridColumnClassName}__block {

      //bottom item
      &:first-of-type { 
        grid-row: 2 / 3;
        margin-top: ${Root.ColumnGutter}; 
        margin-bottom: 0;
      }

      //top item
      &:last-of-type {
        grid-row: 1 / 2;
        margin-bottom: ${Root.ColumnGutter}; 
        margin-top: 0;
      }
    }

    .${GridColumnClassName}__block  {
      grid-row: 1 / 3;
      width: 100%;
    }

    .${GridColumnClassName}__img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    .${GridColumnClassName}__img-container {
      position: relative;

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

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {
      grid-template-rows: auto;
      grid-template-columns: 50% 50%;

      .${GridColumnClassName}__img-container  {
        grid-row: 1 / 2;
        grid-column: 1 / 3;
        height: calc(50vw - ${Root.Grid.Gutter.Left});
      }

      .${GridColumnClassName}__img {
        position: absolute;
        top: 0;
        left: 0;
      }

      &--double-width {
        width: auto;

        .${GridColumnClassName}__img-container {
          grid-column: 1 / 3;
          height: calc(100vw - calc(${Root.Grid.Gutter.Left} * 2)); 
        }
      }

      &--two-items {

        .${GridColumnClassName}__block  {
          width: auto;

          h2 {
            font-size: 1.2rem;
          }

          //left item
          &:first-of-type {
            height: calc(50vw - calc(${Root.Grid.Gutter.Left} * 1.5));
            margin-bottom: 0; 
            grid-row: 1 / 2;
            grid-column: 1 / 2;
          }

          //right item
          &:last-of-type {
            height: calc(50vw - calc(${Root.Grid.Gutter.Left} * 1.5));
            grid-row: 1 / 2;
            margin-top: 0; 
            margin-right: 0;
            grid-column: 2 / 3;
            margin-left: ${Root.ColumnGutter}; 
          }
        }
      }

      &--reversed .${GridColumnClassName}__block {

        //right item
        &:first-of-type { 
          grid-column: 2 / 3;
          margin-left: ${Root.ColumnGutter}; 
          margin-right: 0;
          margin-top: 0;
        }

        //left item
        &:last-of-type {
          grid-column: 1 / 2;
          margin-right: ${Root.ColumnGutter}; 
          margin-left: 0;
          margin-bottom: 0;
        }
      }
    }
  }

  //Section kerning
  + section.${GridColumnClassName}, + section.grid-double-column {
    margin-left: 0;

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {
      margin-left: ${Root.Grid.Gutter.Left};
      margin-bottom: 0;
    }
  }
`;