/**
 *
 * index.js
 * @author Alisha Garric
 * @description Los Angeles
 *
 */

// Core
import { Strong } from "gsap";
import { NextPage } from "next";
import React from "react";
import { ContactBlock } from "../components/ContactBlock";
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

type LMNTS_LosAngeles = {};

export const LosAngelesClassName = "route__los-angeles";

/**
 *
 * @name LosAngeles
 * @author Alisha Garric
 *
 */
const LosAngeles: NextPage<LMNTS_LosAngeles> = () => {
  return (
    <div className={`${LosAngelesClassName}`}>
      <HorizontalScrollSection>
        <HeroColumn 
          header="Los Angeles"
          subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        >
          <ContactBlock
            header="We're hiring in LA"
            contact={[
              {
                "label": "+1 123 456 6789",
                "href": "tel:1234567890"
              },
              {
                "label": "careers@volumeindustri.es",
                "href": "mailto:careers@volumeindustri.es"
              },
            ]}
          >
            <p>
              <a href="tel:1234567890"><strong>+1 123 456 6789</strong></a>
              <br/>
              <a href="mailto:la@volumeindustri.es"><strong>la@volumeindustri.es</strong></a>
            </p>
            <br/>
            <p>
              <a href="https://www.google.com/maps" target="_blank">
                <strong>
                  <span>5-39 46th Ave</span>
                  <br />
                  <span>Los Angeles, CA 11101</span>
                </strong>
              </a>
            </p>
          </ContactBlock>
        </HeroColumn>
        <GridColumn 
          image="https://source.unsplash.com/600x1200/?beach"
          secondaryImage="https://source.unsplash.com/600x1200/?ocean"
          altText="Volume Industries"
        />
        <GridColumn 
          image="https://source.unsplash.com/600x1200/?shore"
          altText="Volume Industries"
          circleText={{
            text: "New Beginnings • New Beginnings • New Beginnings • ",
            diameter: 270
          }}
        />  
        <GridColumn 
          image="https://source.unsplash.com/600x1200/?palmtree"
          secondaryImage="https://source.unsplash.com/600x1200/?surf"
          altText="Volume Industries"
        />
        <LargeText 
          width={"medium"} 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor"
        />
      </HorizontalScrollSection>
    </div>
  );
};

export default LosAngeles;
