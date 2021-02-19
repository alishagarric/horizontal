/**
 *
 * index.js
 * @author Alisha Garric
 * @description Contact
 *
 */

// Core
import { NextPage } from "next";
import React from "react";
import { ContactBlock } from "../components/ContactBlock";
import { BottomNavSize } from "../components/Navigation/styles.scss";
import { CircleText } from "../components/Sections/CircleText";
import { ChildrenColumn } from "../components/Sections/ChildrenColumn";
import { GridColumn } from "../components/Sections/GridColumn";
import { HeroColumn } from "../components/Sections/HeroColumn";
import { HorizontalScrollSection } from "../components/Sections/HorizontalScrollSection";
import { LargeText } from "../components/Sections/LargeText";
import { SocialLinks } from "../components/SocialLinks";
import { Root } from "../constants/Root";
import { Theme } from "../constants/Theme";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_ContactPage = {};

export const ContactPageClassName = "route__contact-page";

/**
 *
 * @name ContactPage
 * @author Alisha Garric
 *
 */
const ContactPage: NextPage<LMNTS_ContactPage> = () => {
  return (
    <div className={`${ContactPageClassName}`}>
      <HorizontalScrollSection hasSidebar={true}>
        <HeroColumn 
          header="Let's Connect"
          subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        >
          <SocialLinks
            links={[
              {
                "label": "Instagram",
                "href": "instagram.com"
              },
              {
                "label": "LinkedIn",
                "href": "linkedin.com"
              },
              {
                "label": "Vimeo",
                "href": "vimeo.com"
              },
            ]}
          />
        </HeroColumn>
        <GridColumn 
          image="https://source.unsplash.com/600x1200/?moon"
          altText="Volume Industries"
        />
        <ChildrenColumn
          justify="flex-start"
        >
          <ContactBlock
            header="New York City"
            border={false}
            style={{ paddingBottom: "40px"}}
            contact={[
              {
                "label": "+1 123 456 6789",
                "href": "tel:1234567890"
              },
              {
                "label": "nyc@volumeindustri.es",
                "href": "mailto:nyc@volumeindustri.es"
              },
              {
                "break": true
              },
              {
                "label": "5-39 46th Ave",
              },
              {
                "label": "Long Island City, NY 11101",
              },
            ]}
          />
          <ContactBlock
            header="Los Angeles"
            style={{ paddingBottom: "40px"}}
            contact={[
              {
                "label": "+1 123 456 6789",
                "href": "tel:1234567890"
              },
              {
                "label": "la@volumeindustri.es",
                "href": "mailto:la@volumeindustri.es"
              },
              {
                "break": true
              },
              {
                "label": "5-39 46th Ave",
              },
              {
                "label": "Los Angeles, CA 11101",
              },
            ]}
          />
          <ContactBlock
            header="We're hiring!"
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
          />
        </ChildrenColumn>
      </HorizontalScrollSection>
    </div>
  );
};

export default ContactPage;
