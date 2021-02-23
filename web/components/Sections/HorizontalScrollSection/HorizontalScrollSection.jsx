// Core
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";
import { BottomNavMargin, BottomNavSize } from "../../Navigation/styles.scss";

// Components

// Styles
import {
  HorizontalScrollSectionClassName,
  HorizontalScrollSectionStyle,
} from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

// Begin Component
// __________________________________________________________________________________________

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
`;


const Scrollbar = styled.span.attrs(({ dynamicBarWidth, translateX }) => ({
  style: { width: `${dynamicBarWidth}px`, transform: `translateX(${translateX}px) scaleX( .85)` },
}))`
  --scrollBarHeight: 4px;
  height: var(--scrollBarHeight);
  background: ${Theme.Color.varSecondary};
  position: fixed;
  transform-origin: left bottom;
  bottom: calc(${BottomNavMargin } + ${BottomNavSize});
  margin-left: ${Root.Grid.Gutter.Left};
  margin-right: ${Root.Grid.Gutter.Right};
  left: 0;
  right: 0;
  z-index: 999;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` },
}))`
  position: absolute;
  height: 100%;
  transition: transform 0.5s ease-out;
  will-change: transform;
`;

const ContentWrapper = styled.div`
  position: relative;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh ;//+ 150;
};

const calcWidthRatio = (objectWidth) => {
  const vw = window.innerWidth;
  const ratio = (objectWidth / vw);
  return ratio;
};

const calcDynamicBarWidth = (objectWidth) => {
  const ratio = calcWidthRatio(objectWidth);
  return window.innerWidth / ratio;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const handleDynamicBarWidth = (ref, setDynamicBarWidth) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicBarWidth = calcDynamicBarWidth(objectWidth);
  setDynamicBarWidth(dynamicBarWidth);
};

const applyScrollListener = (ref, setTranslateX, setBarTranslateX) => {
  window.addEventListener("scroll", () => {
    const offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;
    const barOffset = ref && ref.current ? (offsetTop * -1) / (ref.current.firstChild.clientWidth / window.innerWidth) : 0;
    setTranslateX(offsetTop);
    setBarTranslateX(barOffset);
  });
};

export const HorizontalScrollSection = ({
  addClass = "",
  children,
  hasTopbar = false,
  forceFullWidth = false,
  style = {},
}) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [dynamicBarWidth, setDynamicBarWidth] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const [translateBarX, setBarTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    handleDynamicBarWidth(objectRef, setDynamicBarWidth);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    handleDynamicBarWidth(objectRef, setDynamicBarWidth);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX, setBarTranslateX);
  }, []);

  return (
    <HorizontalScrollSectionStyle
      style={style}
      forceFullWidth={forceFullWidth}
      className={`${HorizontalScrollSectionClassName} ${HorizontalScrollSectionClassName}--${
        hasTopbar ? "has-topbar" : ""
      } ${addClass && addClass}`}
    >
      <TallOuterContainer dynamicHeight={dynamicHeight}>
        <StickyInnerContainer ref={containerRef}>
          <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
            <HorizontalSection>
              <ContentWrapper
                className={`${HorizontalScrollSectionClassName}__content-wrapper`}
              >
                {children}
              </ContentWrapper>
            </HorizontalSection>
          </HorizontalTranslateContainer>
        </StickyInnerContainer>
      </TallOuterContainer>
      <Scrollbar dynamicBarWidth={dynamicBarWidth} translateX={translateBarX}></Scrollbar>
    </HorizontalScrollSectionStyle>
  );
};

// End Component
// ______________________________________________________________________________
