// Core
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
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
  style: { width: `${dynamicBarWidth}px`, transform: `translateX(${translateX}px) scaleY(1.5)` },
}))`
  height: var(--scrollBarHeight);;
  background: ${Theme.Color.varForeground};
  transform-origin: left center;
  display: block;
`;

const ScrollbarContainer = styled.span.attrs(({ dynamicBarContainerWidth }) => ({
  style: { transform: `scaleX(${dynamicBarContainerWidth })` },
}))`
  --scrollBarHeight: 2px;
  transform-origin: left center;
  left: ${Root.Grid.Gutter.Left};
  position: fixed;
  right: 0;
  z-index: 999;
  bottom: calc(${BottomNavMargin } + ${BottomNavSize} - var(--scrollBarHeight));
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
  const objectWidth = ref && ref.current ? ref.current.scrollWidth : 0;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const handleDynamicBarWidth = (ref, setDynamicBarWidth) => {
  const objectWidth = ref && ref.current ? ref.current.scrollWidth: 0;
  const dynamicBarWidth = calcDynamicBarWidth(objectWidth);
  setDynamicBarWidth(dynamicBarWidth);
};

const handleDynamicBarContainerWidth = (ref, setDynamicBarContainerWidth) => {
  const vw = window.innerWidth;
  const gutterSpace = Base.Grid.Gutter.Lg.Left + Base.Grid.Gutter.Lg.Right
  const dynamicBarWidth = (vw - gutterSpace) / vw;
  setDynamicBarContainerWidth(dynamicBarWidth < 1 ? dynamicBarWidth : 1);
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
  const [dynamicBarContainerWidth, setDynamicBarContainerWidth] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const [translateBarX, setBarTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    handleDynamicBarWidth(objectRef, setDynamicBarWidth);
    handleDynamicBarContainerWidth(objectRef, setDynamicBarContainerWidth);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    handleDynamicBarWidth(objectRef, setDynamicBarWidth);
    handleDynamicBarContainerWidth(objectRef, setDynamicBarContainerWidth);
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
      <ScrollbarContainer dynamicBarContainerWidth={dynamicBarContainerWidth}>
        <Scrollbar dynamicBarWidth={dynamicBarWidth} translateX={translateBarX}></Scrollbar>
      </ScrollbarContainer>
    </HorizontalScrollSectionStyle>
  );
};

// End Component
// ______________________________________________________________________________
