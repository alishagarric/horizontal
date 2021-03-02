/**
 *
 * getVolumeNav.tsx
 * @author Alisha Garric
 * @description Get variables used for volume navigation
 * @example getVolumeNav(router);
 *
 */

import { NextRouter } from "next/router";
import { SiteVolumes } from "../constants/site/Settings";

export type volumeNav = false | {
  number: string;
  title: string;
  prevNumber: string;
  nextNumber: string;
  prevLink: string;
  nextLink: string;
  prevTitle: string;
  nextTitle: string;
}

export const getVolumeNav = (router: NextRouter) => {
  
  let volumeIndex = -1;

  SiteVolumes.forEach((volume, index) => {
    if ( volume.link == router.asPath) {
      volumeIndex = index;
    }
  });

  if ( volumeIndex != -1 ){
    return {
      "number": SiteVolumes[volumeIndex].number,
      "title": SiteVolumes[volumeIndex].name,
      "prevNumber": SiteVolumes[volumeIndex - 1] ? SiteVolumes[volumeIndex - 1].number : SiteVolumes[SiteVolumes.length - 1].number,
      "nextNumber": SiteVolumes[volumeIndex + 1] ? SiteVolumes[volumeIndex + 1].number : SiteVolumes[0].number,
      "prevLink": SiteVolumes[volumeIndex - 1] ? SiteVolumes[volumeIndex - 1].link : SiteVolumes[SiteVolumes.length - 1].link,
      "nextLink": SiteVolumes[volumeIndex + 1] ? SiteVolumes[volumeIndex + 1].link : SiteVolumes[0].link,
      "prevTitle": SiteVolumes[volumeIndex - 1] ? SiteVolumes[volumeIndex - 1].name : SiteVolumes[SiteVolumes.length - 1].name,
      "nextTitle": SiteVolumes[volumeIndex + 1] ? SiteVolumes[volumeIndex + 1].name : SiteVolumes[0].name,
    }
  } else {
    return false;
  }
};