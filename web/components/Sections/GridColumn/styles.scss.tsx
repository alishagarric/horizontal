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

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const GridColumnClassName = `grid-column`;

export const GridColumnStyle = styled.section`
  &.${GridColumnClassName} {
    height: 100%;
    margin-left: calc(var(--columnGutter) * 2);
    margin-right: calc(var(--columnGutter) * 2);
    width: calc(var(--horizontalScrollSectionHeight) / 2);
    display: grid;
    grid-template-rows: 50% 50%;

    &--double-width {
      width: var(--horizontalScrollSectionHeight);
    }

    &--two-items {

      .${GridColumnClassName}__img, .${GridColumnClassName}__text-container  {
        width: calc(100% - var(--columnGutter));

        //top item
        &:first-child {
          height: calc(100% - var(--columnGutter));
          margin-bottom: var(--columnGutter); 
          margin-right: var(--columnGutter); 
          grid-row: 1 / 2;
        }

        //bottom item
        &:last-child {
          grid-row: 2 / 3;
          height: calc(100% - var(--columnGutter));
          margin-top: var(--columnGutter); 
          margin-right: var(--columnGutter); 
        }
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