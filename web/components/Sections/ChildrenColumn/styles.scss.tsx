/**
 *
 * ChildrenColumn.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website ChildrenColumn Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ChildrenColumnClassName = `children-column`;

export const ChildrenColumnStyle = styled.section`
  &.${ChildrenColumnClassName} {
    width: 500px;
    margin-left: calc(${Root.ColumnGutter} * 2);
    margin-right: calc(${Root.ColumnGutter} * 2);
    display: flex;
    flex-direction: column;

    a {
      color: ${Theme.Color.Text};
    }

    &.width--xl {
      width: 600px;
    }
    
    &.width--medium {
      width: 400px;
    }

    &.width--small {
      width: 300px;
    }

    &.justify--flex-start {
      justify-content: flex-start;
    }
    
    &.justify--flex-end {
      justify-content: flex-end;
    }

    &.justify--space-between {
      justify-content: space-between;
    }
  }
`;
