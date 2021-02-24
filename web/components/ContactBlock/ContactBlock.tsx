// Core
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  LMNTS_SiteVolume,
  SiteVolumes,
} from "../../constants/site/Settings";
import LazyImage from "../../utils/lazyImage";
import { Brandmark } from "../_svg/Brandmark/Brandmark";
import { Logotype } from "../_svg/Logotype/Logotype";

// Styles
import {
  ContactBlockClassName,
  ContactBlockStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_ContactBlock = {
  header: string;
  border?: boolean;
  style?: any; //TODO: What is this
  contact: {
    label?: string;
    href?: string;
    break?: boolean;
  }[];
};

/**
 *
 * @name ContactBlock
 * @author Alisha Garric
 * @requires /studio/sections/ContactBlock
 *
 */
export const ContactBlock: React.FunctionComponent<LMNTS_Section_ContactBlock> = ({
  header,
  contact,
  border,
  style,
  children
}) => {

  return (
    <ContactBlockStyle className={`${ContactBlockClassName}`} style={style}>
      <div className={children ? "__mobile-space" : ""}>
        {children}
      </div>
      <div>
        <h2 className={`${border == false ? "__exclude-border" : ""} h4`}>
          {header}
        </h2>
        {contact && contact.length > 0 &&
          <p>
            {contact.map((item, idx: number) => {
              return (
                <span key={idx}>
                  {item.href && item.label &&
                    <a href={`${item.href}`}>{item.label}</a>
                  }
                  {!item.href && item.label &&
                    <span>{item.label}</span>
                  }
                  {idx != contact.length - 1 && <br />}
                </span>
              );
            })}
          </p>
        }
      </div>
    </ContactBlockStyle>
  );
};

// End Component
// __________________________________________________________________________________________
