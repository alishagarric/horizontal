/**
 *
 * index.js
 * @author Alisha Garric
 * @description About
 *
 */

// Core
import { NextPage } from "next";
import React from "react";
import { BottomNavSize } from "../components/Navigation/styles.scss";
import { CircleText } from "../components/Sections/CircleText";
import { GridColumn } from "../components/Sections/GridColumn";
import { HeroColumn } from "../components/Sections/HeroColumn";
import { HorizontalScrollSection } from "../components/Sections/HorizontalScrollSection";
import { LargeText } from "../components/Sections/LargeText";
import { Root } from "../constants/Root";
import { Theme } from "../constants/Theme";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_AboutPage = {};

export const AboutPageClassName = "route__about-page";

/**
 *
 * @name AboutPage
 * @author Alisha Garric
 *
 */
const AboutPage: NextPage<LMNTS_AboutPage> = () => {
  return (
    <div className={`${AboutPageClassName}`}>
      <HorizontalScrollSection>
        <HeroColumn 
          header="Volume Industries is a full service shop bringing ideas from conception to reality"
          subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          width="xl"
        >
          <h5>Lorem ipsum dolor</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Qquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </HeroColumn>
        <GridColumn 
          image="https://source.unsplash.com/600x1200/?building"
          secondaryImage="https://source.unsplash.com/600x1200/?city"
          altText="Volume Industries"
        />
        <GridColumn 
          image="https://source.unsplash.com/600x1200/?industrial"
          doubleWidth={true}
          altText="Volume Industries"
        />
        <GridColumn 
          image="https://source.unsplash.com/600x1200/?building"
          secondaryImage="https://source.unsplash.com/600x1200/?city"
          altText="Volume Industries"
        />
        <GridColumn 
          image="https://source.unsplash.com/600x1200/?architecture"
          altText="Volume Industries"
        /> 
      </HorizontalScrollSection>
    </div>
  );
};

export default AboutPage;
