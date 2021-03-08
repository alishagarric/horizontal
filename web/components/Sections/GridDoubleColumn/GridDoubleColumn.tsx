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
  GridDoubleColumnClassName,
  GridDoubleColumnStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_GridDoubleColumn = {
  image: string;
  altText: string;
  secondaryImage?: string;
  header: string;
  content: string;
  reverse?: boolean;
  circleText?: {
    text: string;
    diameter: number;
  }
};

/**
 *
 * @name GridDoubleColumn
 * @author Alisha Garric
 * @requires /studio/sections/GridDoubleColumn
 *
 */
export const GridDoubleColumn: React.FunctionComponent<LMNTS_Section_GridDoubleColumn> = ({
  image,
  secondaryImage,
  altText,
  header,
  content,
  reverse,
  circleText,
}) => {


  return (
    <GridDoubleColumnStyle
      className={`${GridDoubleColumnClassName} ${secondaryImage ? GridDoubleColumnClassName + "--two-images" : ""} ${reverse ? GridDoubleColumnClassName + "--reversed" : ""}`}
    >
      <div className={`${GridDoubleColumnClassName}__img-container ${GridDoubleColumnClassName}__block`}>
        <LazyImage
          addClass={`${GridDoubleColumnClassName}__img`}
          src={image}
          alt={altText}
        />
      </div>

      { secondaryImage &&
        <div className={`${GridDoubleColumnClassName}__img-container ${GridDoubleColumnClassName}__block`}>
          <LazyImage
            addClass={`${GridDoubleColumnClassName}__img`}
            src={secondaryImage}
            alt={altText}
          />
        </div>
      }

      <div className={`${GridDoubleColumnClassName}__text-container ${GridDoubleColumnClassName}__block`}>
        {header && <h2>{header}</h2>}
        {content && <p>{content}</p>}
      </div>

      {circleText && <CircleText text={circleText.text} diameter={circleText.diameter} />}
    </GridDoubleColumnStyle>
  );
};

// End Component
// __________________________________________________________________________________________
