/**
 *
 * MarqueeRow.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website MarqueeRow Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";

// Constants
import {} from "../../../constants/Root";
import {} from "../../../constants/styles/Animation";
import { Theme } from "../../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const MarqueeRowClassName = `marquee-row`;

export const MarqueeRowAnim = keyframes`
  0% {
    transform: translate3d(var(--marquee-row__move-initial), 0, 0);
  }

  100% {
    transform: translate3d(var(--marquee-row__move-final), 0, 0);
  }
`;

export const MarqueeRowStyle = styled.section`
  // @ts-ignore
  --marquee-row__offset: 0vw;
  --marquee-row__move-initial: calc(-25% + var(--marquee-row__offset));
  --marquee-row__move-final: calc(-50% + var(--marquee-row__offset));

  position: relative;
  overflow: hidden;

  padding-top: 1.5rem;


  .${MarqueeRowClassName}__inner {
    width: fit-content;
    display: flex;
    position: relative;
    transform: translate3d(var(--marquee-row__move-initial), 0, 0);
    animation: ${MarqueeRowAnim} 15s linear infinite;
    animation-play-state: running;
  }

  .${MarqueeRowClassName}__list {
    --${MarqueeRowClassName}__bullet-size: .15em;

    white-space: nowrap;

    /* display: flex;
    flex-wrap: nowrap; */

    &__item {
      display: inline-block;
      white-space: nowrap;

      font-size: 15vw;
      color: ${Theme.Color.varSecondary};
      font-weight: 600;
      padding: 0 calc(var(--${MarqueeRowClassName}__bullet-size) * 2);

      position: relative;

      flex-shrink: 0;

      @media(max-width: ${Theme.Base.Media.Width.Sm}) {
        font-size: 5rem;
      }

      &:after {
        content: '';

        position: absolute;

        top: 50%;
        right: calc(var(--${MarqueeRowClassName}__bullet-size) * -.5);

        transform: translate3d(0%, -50%, 0);
        transform-style: preserve-3d;

        width: calc(var(--${MarqueeRowClassName}__bullet-size) * 1);
        height: calc(var(--${MarqueeRowClassName}__bullet-size) * 1);

        border-radius: 50%;

        background: ${Theme.Color.varSecondary};
      }
    }
  }

  /* &:hover {
    .${MarqueeRowClassName}__inner {
      animation-play-state: paused;
    }
  } */

`;
