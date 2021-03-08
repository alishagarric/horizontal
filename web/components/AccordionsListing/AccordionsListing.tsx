// Core
import React, { createRef, PureComponent } from "react";

// Styles
import { AccordionsListingClassName, AccordionsListingStyle } from "./styles.scss";
import LazyImage from "../../utils/lazyImage";
import { CSSProperties } from "styled-components";
import { LMNTS_SiteIndustry } from "../../constants/site/Settings";
import { NavigationClassName } from "../Navigation/styles.scss";
import { throws } from "assert";

// Begin Types
// __________________________________________________________________________________________

export type LMNTS_AccordionsListing = {
  listings: LMNTS_SiteIndustry[];
  openState: boolean;
};

export type LMNTS_AccordionsListing_State = {
  openAccordion: number;
  openState: boolean;
}

// Begin Data
// __________________________________________________________________________________________

/**
 *
 * @name AccordionsListing
 * @author Alisha Garric
 *
 */


export class AccordionsListing extends PureComponent<
  LMNTS_AccordionsListing,
  LMNTS_AccordionsListing_State
> {

  constructor(props: LMNTS_AccordionsListing) {
    super(props);

    this.state = {
      openAccordion: 0,
      openState: this.props.openState,
    };

    this.updateOpenAccordion = this.updateOpenAccordion.bind(this);
  }

  updateOpenAccordion(index: number) {
    let accordionsContainer = this.accordionsRef && this.accordionsRef.current && this.accordionsRef.current.closest("ul");

    if (accordionsContainer){

      //if open accordion is clicked, close all
      if ( index == this.state.openAccordion ) {
        accordionsContainer.children[index].classList.remove("__is-open");
        this.setState({openAccordion: 0});
      }
      // if closed accordion is clicked, open it
      else {
        accordionsContainer.children[this.state.openAccordion].classList.remove("__is-open");
        this.setState({openAccordion: index});
        accordionsContainer.children[index].classList.add("__is-open");
      }
    }
  }

  componentDidUpdate(prevProps) {
    if ( prevProps.openState == false && this.state.openAccordion != 0){
      this.updateOpenAccordion(this.state.openAccordion);
    }
  }

  accordionsRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

  render() {
    

    let { listings } = this.props;
    return (
      <>
        <li key={0} onClick={() => this.updateOpenAccordion(0)} className={`${AccordionsListingClassName}__menu-nav__list__intro ${AccordionsListingClassName}__menu-nav__list__item ${NavigationClassName}__menu-nav__list__intro ${NavigationClassName}__menu-nav__list__item __is-open`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Qquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </li>

        {listings.map((listing: LMNTS_SiteIndustry, idx: number) => {
          return (
          <AccordionsListingStyle
            key={idx + 1}
            className={`${AccordionsListingClassName}__menu-nav__list__item ${NavigationClassName}__menu-nav__list__item`}
            onClick={() => this.updateOpenAccordion(idx + 1)}
          >
              <h2>{listing.name}</h2>
              <div className={`${AccordionsListingClassName}__accordion`} ref={this.accordionsRef}>
      
                {listing.description && 
                  <p className={`${AccordionsListingClassName}__accordion__text-container`}>
                    {listing.description}
                  </p>
                }
      
                {listing.images.length > 0 &&
                  listing.images.map((image, idxx: number) => {
                    return (
                      <div className={`${AccordionsListingClassName}__accordion__image-container`} key={idxx}>
                        <LazyImage
                          src={image.image}
                          alt={"Volume Industries"}
                        />
                      </div>
                    );
                  })
                }
            </div>
          </AccordionsListingStyle>
          );
        })}
      </>
    );
  }
}

// End Component
// ______________________________________________________________________________
