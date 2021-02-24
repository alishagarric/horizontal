/**
 *
 * index.js
 * @author Alisha Garric
 * @description New York City
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

type LMNTS_NewYorkCity = {};

export const NewYorkCityClassName = "route__new-york-city";

/**
 *
 * @name NewYorkCity
 * @author Alisha Garric
 *
 */
const NewYorkCity: NextPage<LMNTS_NewYorkCity> = () => {
  return (
    <div className={`${NewYorkCityClassName}`}>
      <HorizontalScrollSection>
        <HeroColumn 
          header="New York City"
          subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        >
          <ContactBlock
            header="We're hiring in NYC"
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
              <a href="mailto:nyc@volumeindustri.es"><strong>nyc@volumeindustri.es</strong></a>
            </p>
            <br/>
            <p>
              <a href="https://www.google.com/maps" target="_blank">
                <strong>
                  <span>5-39 46th Ave</span>
                  <br />
                  <span>Long Island City, NY 11101</span>
                </strong>
              </a>
            </p>
          </ContactBlock>
        </HeroColumn>
        <GridColumn 
          image="https://source.unsplash.com/600x1200/?skyscraper"
          secondaryImage="https://source.unsplash.com/600x1200/?city"
          altText="Volume Industries"
        />
        <GridColumn 
          image="https://source.unsplash.com/600x1200/?skyscrapers"
          altText="Volume Industries"
          circleText={{
            text: "New Beginnings • New Beginnings • New Beginnings • ",
            diameter: 270
          }}
        />  
        <GridColumn 
          image="https://source.unsplash.com/600x1200/?building"
          secondaryImage="https://source.unsplash.com/600x1200/?nyc"
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

export default NewYorkCity;
