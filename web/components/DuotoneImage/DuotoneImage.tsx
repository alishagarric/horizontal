// Core
import React from "react";

// Styles
import { DuotoneImageClassName, DuotoneImageStyle } from "./styles.scss";
import LazyImage from "../../utils/lazyImage";
import { CSSProperties } from "styled-components";

// Begin Types
// __________________________________________________________________________________________

export type LMNTS_DuotoneImage = {
  addClass?: string;
  src: string;
  style?: CSSProperties;
  aspectRatio?: number;
  alt: string;
};

// Begin Data
// __________________________________________________________________________________________

/**
 *
 * @name DuotoneImage
 * @author Peter Laxalt
 *
 */

export const DuotoneImage: React.FunctionComponent<LMNTS_DuotoneImage> = ({
  addClass,
  src,
  style,
  alt,
  aspectRatio,
}) => {
  return (
    <>
      <DuotoneImageStyle
        className={`${DuotoneImageClassName} ${addClass}`}
        style={{
          ...style,
          paddingBottom: aspectRatio ? `calc(100% * ${aspectRatio})` : 0,
        }}
      >
        <LazyImage
          addClass={`${DuotoneImageClassName}__image ${DuotoneImageClassName}__image--filtered`}
          src={src}
          alt={alt}
        />
        <LazyImage
          addClass={`${DuotoneImageClassName}__image ${DuotoneImageClassName}__image--normal`}
          src={src}
          alt={alt}
        />
      </DuotoneImageStyle>
    </>
  );
};

// End Component
// ______________________________________________________________________________
