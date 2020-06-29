import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <h1><span role="img" aria-label="Smiley">😀</span>
        Emoji Search
        <span role="img" aria-label="Smiley">😀</span></h1>
      </header>
    );
  }
}
