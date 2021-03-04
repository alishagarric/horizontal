/**
 *
 * MobileFooter.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website MobileFooter Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const MobileFooterClassName = `mobile-footer`;

export const MobileFooterStyle = styled.section`
  &.${MobileFooterClassName} {
    --mobileFooterArrowSize: 40px;
    display: none;

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: portrait) {
      display: block;
      position: relative;

      .${MobileFooterClassName}__inner {
        height: calc(50vw - ${Root.Grid.Gutter.Left});
        background: ${Theme.Color.varForeground};
        padding: ${Root.Grid.Gutter.Left};
        color: ${Theme.Color.varBackground};
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: calc(var(--mobileFooterArrowSize) * 1.66);
        margin-top: 25vw;

        &:before, &:after {
          content: "";
          position: absolute;
          left: 50%;
        }

        &:before {
          border-left: 1px solid ${Theme.Color.varForeground};
          height: 20vw;
          top: -20vw;
        }

        &:after {
          border-left: 1px solid ${Theme.Color.varBackground};
          height: ${Root.Grid.Gutter.Left};
          top: 0;
        }

        p {
          padding-bottom: 0;
        }

        &:hover {
          text-decoration: none;
        }
      }

      .${MobileFooterClassName}__arrow {
        position: absolute;
        bottom: calc(var(--mobileFooterArrowSize) / 3);
        right: calc(var(--mobileFooterArrowSize) / 3);

        &:before, &:after, span:after {
          content: "";
          border: 1px solid ${Theme.Color.varBackground};
          display: block;
          position: absolute;
        }

        &:before {
          width: var(--mobileFooterArrowSize);
          height: var(--mobileFooterArrowSize);
          border-radius: 50%;
          bottom: 0;
          right: 0;
        }

        &:after {
          width: calc(var(--mobileFooterArrowSize) / 2);
          bottom: calc(var(--mobileFooterArrowSize) / 2);
          right: calc(var(--mobileFooterArrowSize) / 4);
          transform: translateY(-50%);
          border-bottom: none;
        }

        span {
          display: block;

          &:after {
            width: calc(var(--mobileFooterArrowSize) / 3);
            height: calc(var(--mobileFooterArrowSize) / 3);
            transform: rotate(45deg);
            border-bottom: none;
            border-left: none;
            right: calc(var(--mobileFooterArrowSize) / 3.6);
            bottom: calc(var(--mobileFooterArrowSize) / 3);
          }
        }
      }
    }
  }
`;
