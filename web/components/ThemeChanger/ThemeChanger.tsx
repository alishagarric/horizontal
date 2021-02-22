// Core
import React from "react";
//import { __DEBUG__ } from "../../constants/site/Settings";
import { ColorUtils, LXLT_ColorTheme } from "../../constants/styles/Color";

declare global {
  interface Window {
    laxaltUniversalTheme: LXLT_ColorTheme;
  }
}


// Begin Types
// __________________________________________________________________________________________

type LXLT_ThemeChanger = {
  theme: LXLT_ColorTheme;
};

type LXLT_ThemeChangerState = {
  active: boolean;
};

// Begin Component
// __________________________________________________________________________________________

/*
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

  const SecondTheme = ColorUtils.SetThemeFromServer(OysterTheme);
*/

export class ThemeChanger extends React.PureComponent<
  LXLT_ThemeChanger,
  LXLT_ThemeChangerState
> {
  constructor(props: LXLT_ThemeChanger) {
    super(props);

    this.state = {
      active: false,
    };

    this.removeTheme = this.removeTheme.bind(this);
    this.addTheme = this.addTheme.bind(this);
  }

  removeTheme() {
    this.setState({
      active: false,
    });
  }

  addTheme() {
    this.setState({
      active: true,
    });
  }



  render() {
    let { children, theme } = this.props;
    let { active  } = this.state;
    let HoverTheme = ColorUtils.SetThemeFromServer(theme);

    return (
      <div           
        onMouseOver={() => this.addTheme()} 
        onMouseLeave={() => this.removeTheme()} 
      >
        { active && <HoverTheme />}
        {children}
      </div>
    );
  }
};
