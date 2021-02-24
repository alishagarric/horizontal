// Core
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  LMNTS_SiteVolume,
  SiteVolumes,
} from "../../../constants/site/Settings";
import LazyImage from "../../../utils/lazyImage";
import { CircleText } from "../CircleText";

// Styles
import {
  GridColumnClassName,
  GridColumnStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_GridColumn = {
  image: string;
  altText: string;
  secondaryImage?: string;
  header?: string;
  content?: string;
  doubleWidth?: boolean;
  reverse?: boolean;
  circleText?: {
    text: string;
    diameter: number;
  }
};

/**
 *
 * @name GridColumn
 * @author Alisha Garric
 * @requires /studio/sections/GridColumn
 *
 */
export const GridColumn: React.FunctionComponent<LMNTS_Section_GridColumn> = ({
  image,
  secondaryImage,
  altText,
  header,
  content,
  doubleWidth,
  reverse,
  circleText,
}) => {

  let twoItems: boolean = secondaryImage != null ||  header != null || content != null;

  return (
    <GridColumnStyle
      className={`${GridColumnClassName} ${doubleWidth ? GridColumnClassName + "--double-width" : ""} ${twoItems ? GridColumnClassName + "--two-items" : ""} ${twoItems && reverse ? GridColumnClassName + "--reversed" : ""}`}
    >
      <div className={`${GridColumnClassName}__img-container ${GridColumnClassName}__block`}>
        <LazyImage
          addClass={`${GridColumnClassName}__img`}
          src={image}
          alt={altText}
        />
      </div>
      {twoItems &&
        <>
        { secondaryImage ?
          <div className={`${GridColumnClassName}__img-container ${GridColumnClassName}__block`}>
            <LazyImage
              addClass={`${GridColumnClassName}__img`}
              src={secondaryImage}
              alt={altText}
            />
          </div>
        :
          <div className={`${GridColumnClassName}__text-container ${GridColumnClassName}__block`}>
            {header && <h2>{header}</h2>}
            {content && <p>{content}</p>}
          </div>
        }
        </>
      }
      {circleText && <CircleText text={circleText.text} diameter={circleText.diameter} />}
    </GridColumnStyle>
  );
};

// End Component
// __________________________________________________________________________________________
