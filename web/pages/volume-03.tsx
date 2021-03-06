/**
 *
 * index.js
 * @author Alisha Garric
 * @description Volume 03
 *
 */

// Core
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import React from "react";
import { BottomNavSize } from "../components/Navigation/styles.scss";
import { CircleText } from "../components/Sections/CircleText";
import { GridColumn } from "../components/Sections/GridColumn";
import { HeroColumn } from "../components/Sections/HeroColumn";
import { HorizontalScrollSection } from "../components/Sections/HorizontalScrollSection";
import { LargeText } from "../components/Sections/LargeText";
import { MobileFooter } from "../components/Sections/MobileFooter";
import { VolumesArrowsNavigation } from "../components/Sections/VolumesArrowsNavigation/VolumesArrowsNavigation";
import { Root } from "../constants/Root";
import { Theme } from "../constants/Theme";
import { getVolumeNav, volumeNav } from "../utils/getVolumeNav";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_Volume03 = {};

export const Volume03ClassName = "route__volume-03";

/**
 *
 * @name Volume03
 * @author Alisha Garric
 *
 */
const Volume03: NextPage<LMNTS_Volume03> = () => {
  const router: NextRouter = useRouter();
  let nav: volumeNav = getVolumeNav(router); 
  
  return (
    <div className={`${Volume03ClassName}`}>
      <VolumesArrowsNavigation />
      <HorizontalScrollSection hasTopbar={true}>
        <HeroColumn 
          header="Wondering Moments"
          subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        >
          <h3>Lorem ipsum dolor</h3>
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
          circleText={{
            text: "New Beginnings ?????New Beginnings ??? New Beginnings ??? ",
            diameter: 270
          }}
        />
        <GridColumn 
          image="https://source.unsplash.com/600x1200/?modern"
          header={"Lorem ipsum"}
          content={"lorem ipsum dolor iset"}
          altText="Volume Industries"
        />
        <GridColumn 
          image="https://source.unsplash.com/600x1200/?architecture"
          altText="Volume Industries"
        /> 
        <LargeText 
          width={"medium"} 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor"
        />
        { nav &&
          <MobileFooter 
            caption="Next Volume"
            header={nav.nextTitle}
            link={nav.nextLink}
          />
        }
      </HorizontalScrollSection>
    </div>
  );
};

export default Volume03;
