// Core
import React from "react";

// Types
import { NextPage } from "next";
import { Brandmark } from "../components/_svg/Brandmark/Brandmark";
import { Logotype } from "../components/_svg/Logotype/Logotype";
import { VolumesNavigation } from "../components/Sections/VolumesNavigation";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_HomePage = {};

export const HomePageClassName = "route__home-page";

/**
 *
 * @name HomePage
 * @author Peter Laxalt
 *
 */
const HomePage: NextPage<LMNTS_HomePage> = () => {
  return (
    <div className={`${HomePageClassName}`}>
      <VolumesNavigation />
    </div>
  );
};

export default HomePage;
