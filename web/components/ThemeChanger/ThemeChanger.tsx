// Core
import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { DefaultTheme, LMNTS_SiteVolume, Settings, SiteVolumes } from "../../constants/site/Settings";
//import { __DEBUG__ } from "../../constants/site/Settings";
import { ColorContext, LXLT_ColorTheme } from "../../constants/styles/Color";
import { CssUtils } from "../../constants/styles/CssUtils";
import { Theme } from "../../constants/Theme";
import { ThemeChangerClassName, ThemeChangerStyle } from "./styles.scss";

declare global {
  interface Window {
    laxaltUniversalTheme: LXLT_ColorTheme;
  }
}


// Begin Types
// __________________________________________________________________________________________

type LXLT_ThemeChanger = {
  setTheme: (theme: LXLT_ColorTheme) => void;
  theme: LXLT_ColorTheme;
};

// type LXLT_Theme = {
// name: "default" | "white" | "goldenrod" | "cadetblue" | "orangered" | "galaxy";
//   primary: string;
//   secondary: string;
//   background: string;
//   foreground: string;
// };

type LXLT_ThemeChangerState = {
  activeTheme?: LXLT_ColorTheme;
};

// Begin Component
// __________________________________________________________________________________________

/**
 * @name ThemeChangerWithHook
 * @author Peter Laxalt
 *
 */
export class ThemeChangerWithHook extends React.PureComponent<
  LXLT_ThemeChanger,
  LXLT_ThemeChangerState
> {
  constructor(props: LXLT_ThemeChanger) {
    super(props);

    this.state = {
      activeTheme: {
        name: "default",
        primary: Theme.Color.Primary,
        secondary: Theme.Color.Secondary,
        background: Theme.Color.Background,
        foreground: Theme.Color.Text,
      },
    };

    this.setNewTheme = this.setNewTheme.bind(this);
  }

  /*
  componentDidMount() {
    if (typeof window) {
      window.laxaltUniversalTheme = this.state.activeTheme;

      let nextBodyElement = document.getElementById("__next");

      if (nextBodyElement) {
        nextBodyElement.setAttribute("data-theme", this.state.activeTheme.name);
      }

      // _________________________
      // Change if dark mode detected
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.setNewTheme(this.state.availableThemes[0]); //TODO: change this to fig
      }

    //  __DEBUG__ && console.log("🎨 theme set", window.laxaltUniversalTheme);
    }
  }
  */

  setNewTheme(theme: LXLT_ColorTheme) {
    const { setTheme } = this.props;

    this.setState({
      activeTheme: theme,
    });

    if (typeof window) {
      window.laxaltUniversalTheme = theme;

      let nextBodyElement = document.getElementById("__next");

      if (nextBodyElement) {
        nextBodyElement.setAttribute("data-theme", theme.name);
      }
    }

    setTheme(theme);
  }

  render() {
    let { children, theme } = this.props;
    let { activeTheme,  } = this.state;

    // const SetGlobalTheme = createGlobalStyle`
    //   ${
    //     activeTheme
    //       ? CssUtils.CreateTheme(
    //           activeTheme.primary,
    //           activeTheme.secondary,
    //           activeTheme.background,
    //           activeTheme.foreground
    //         )
    //       : ""
    //   }
    // `;

    return (
      <>
        {/* {activeTheme && activeTheme.name !== "default" ? (
          <SetGlobalTheme />
        ) : null} */}
        <ThemeChangerStyle 
          onMouseOver={() => this.setNewTheme(theme)} 
          onMouseLeave={() => this.setNewTheme(DefaultTheme)} 
          className={""/*`${ThemeChangerClassName}`*/}
        >
          {children}

          {/*<div
            className={`${ThemeChangerClassName}__option ${ThemeChangerClassName}__option--${
              volume.theme.name === activeTheme.name
                ? "active"
                : "inactive"
            }`}
            style={{
              backgroundColor: volume.theme.background,
              border: `1px solid ${volume.theme.foreground}`,
            }}
          ></div>*/}
        </ThemeChangerStyle>
      </>
      
    );
  }
}

export const ThemeChanger: React.FunctionComponent<{theme: LXLT_ColorTheme}> = ({theme, children}) => {
  const { setTheme } = useContext(ColorContext);

  return <ThemeChangerWithHook theme={theme} setTheme={setTheme}>{children}</ThemeChangerWithHook>;
};
