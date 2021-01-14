/**
 *
 * index.js
 * @author Peter Laxalt
 * @description The website home page.
 *
 */

// Core
import { NextPage } from "next";
import React from "react";
import { BottomNavSize } from "../components/Navigation/styles.scss";
import { HorizontalScrollSection } from "../components/Sections/HorizontalScrollSection";
import { Root } from "../constants/Root";
import { Theme } from "../constants/Theme";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_LocationsFrontPage = {};

export const SamplePageClassName = "route__home-page";

/**
 *
 * @name SamplePage
 * @author Peter Laxalt
 *
 */
const SamplePage: NextPage<LMNTS_LocationsFrontPage> = () => {
  return (
    <div className={`${SamplePageClassName}`}>
      <HorizontalScrollSection hasSidebar={true}>
        <div
          style={{
            width: "50vw",
            marginTop: `${Root.Nav.Size}`,
            marginBottom: `${BottomNavSize}`,
            height: `calc(100vh - (${Root.Nav.Size} + ${BottomNavSize}))`,
            flexShrink: 0,
            position: "relative",
            borderRight: `2px solid ${Theme.Color.varForeground}`,
          }}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            Sample Section
          </span>
        </div>

        <div
          style={{
            width: "50vw",
            marginTop: `${Root.Nav.Size}`,
            marginBottom: `${BottomNavSize}`,
            height: `calc(100vh - (${Root.Nav.Size} + ${BottomNavSize}))`,
            flexShrink: 0,
            position: "relative",
            borderRight: `2px solid ${Theme.Color.varForeground}`,
          }}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            Sample Section
          </span>
        </div>

        <div
          style={{
            width: "50vw",
            marginTop: `${Root.Nav.Size}`,
            marginBottom: `${BottomNavSize}`,
            height: `calc(100vh - (${Root.Nav.Size} + ${BottomNavSize}))`,
            flexShrink: 0,
            position: "relative",
            borderRight: `2px solid ${Theme.Color.varForeground}`,
          }}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            Sample Section
          </span>
        </div>

        <div
          style={{
            width: "50vw",
            marginTop: `${Root.Nav.Size}`,
            marginBottom: `${BottomNavSize}`,
            height: `calc(100vh - (${Root.Nav.Size} + ${BottomNavSize}))`,
            flexShrink: 0,
            position: "relative",
            borderRight: `2px solid ${Theme.Color.varForeground}`,
          }}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            Sample Section
          </span>
        </div>

        <div
          style={{
            width: "50vw",
            marginTop: `${Root.Nav.Size}`,
            marginBottom: `${BottomNavSize}`,
            height: `calc(100vh - (${Root.Nav.Size} + ${BottomNavSize}))`,
            flexShrink: 0,
            position: "relative",
            borderRight: `2px solid ${Theme.Color.varForeground}`,
          }}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            Sample Section
          </span>
        </div>

        <div
          style={{
            width: "50vw",
            marginTop: `${Root.Nav.Size}`,
            marginBottom: `${BottomNavSize}`,
            height: `calc(100vh - (${Root.Nav.Size} + ${BottomNavSize}))`,
            flexShrink: 0,
            position: "relative",
            borderRight: `2px solid ${Theme.Color.varForeground}`,
          }}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            Sample Section
          </span>
        </div>

        <div
          style={{
            width: "50vw",
            marginTop: `${Root.Nav.Size}`,
            marginBottom: `${BottomNavSize}`,
            height: `calc(100vh - (${Root.Nav.Size} + ${BottomNavSize}))`,
            flexShrink: 0,
            position: "relative",
            borderRight: `2px solid ${Theme.Color.varForeground}`,
          }}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            Sample Section
          </span>
        </div>

        <div
          style={{
            width: "50vw",
            marginTop: `${Root.Nav.Size}`,
            marginBottom: `${BottomNavSize}`,
            height: `calc(100vh - (${Root.Nav.Size} + ${BottomNavSize}))`,
            flexShrink: 0,
            position: "relative",
            borderRight: `2px solid ${Theme.Color.varForeground}`,
          }}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            Sample Section
          </span>
        </div>

        <div
          style={{
            width: "50vw",
            marginTop: `${Root.Nav.Size}`,
            marginBottom: `${BottomNavSize}`,
            height: `calc(100vh - (${Root.Nav.Size} + ${BottomNavSize}))`,
            flexShrink: 0,
            position: "relative",
            borderRight: `2px solid ${Theme.Color.varForeground}`,
          }}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            Sample Section
          </span>
        </div>

        <div
          style={{
            width: "50vw",
            marginTop: `${Root.Nav.Size}`,
            marginBottom: `${BottomNavSize}`,
            height: `calc(100vh - (${Root.Nav.Size} + ${BottomNavSize}))`,
            flexShrink: 0,
            position: "relative",
            borderRight: `2px solid ${Theme.Color.varForeground}`,
          }}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            Sample Section
          </span>
        </div>

      </HorizontalScrollSection>
    </div>
  );
};

export default SamplePage;
