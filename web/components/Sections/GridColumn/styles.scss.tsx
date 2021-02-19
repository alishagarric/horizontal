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

    &--double-width {
      width: var(--horizontalScrollSectionHeight);
    }

    &--two-items {

      .${GridColumnClassName}__img, .${GridColumnClassName}__text-container  {
        width: calc(100% - ${Root.ColumnGutter});

        //top item
        &:first-child {
          height: calc(100% - ${Root.ColumnGutter});
          margin-bottom: ${Root.ColumnGutter}; 
          margin-right: ${Root.ColumnGutter}; 
          grid-row: 1 / 2;
        }

        //bottom item
        &:last-child {
          grid-row: 2 / 3;
          height: calc(100% - ${Root.ColumnGutter});
          margin-top: ${Root.ColumnGutter}; 
          margin-right: ${Root.ColumnGutter}; 
        }
      }
    }

    &--reversed .${GridColumnClassName}__img, &--reversed .${GridColumnClassName}__text-container  {

      //bottom item
      &:first-child { 
        grid-row: 2 / 3;
        margin-top: ${Root.ColumnGutter}; 
        margin-bottom: 0;
      }

      //top item
      &:last-child {
        grid-row: 1 / 2;
        margin-bottom: ${Root.ColumnGutter}; 
        margin-top: 0;
      }
    }

    .${GridColumnClassName}__img, .${GridColumnClassName}__text-container  {
      grid-row: 1 / 3;
      width: 100%;
    }

    .${GridColumnClassName}__img {
      object-fit: cover;
      height: 100%;
    }

  }

  //Section kerning
  + section.${GridColumnClassName} {
    margin-left: 0;
  }
`;