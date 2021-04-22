import React from "react";
import LinkMenu from "../buttons/LinkMenu";
import { Link } from "react-router-dom";
import SocialButton from "../buttons/SocialButton";
import SocialDarkButton from "../buttons/SocialButtonDark";
import menuConf from "./../../config/menu.json";
import socialConf from "./../../config/social.json";
import socialDarkConf from "./../../config/social_dark.json";
import { faAlignLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Menu.css";

class Menu extends React.Component {
  displayName = Menu.name;

  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.setState({
      collapse: this.state.collapse ? false : true
    });
  }

  closeMenu() {
    this.setState({
      collapse: false
    });
    console.log("closemenu");
  }

  render() {
    const links = menuConf.map((item) => {
      return <LinkMenu key={item.id} link={item} onClick={this.closeMenu} />;
    });

    const socialLinks = socialConf.map((item) => {
      return <SocialButton key={item.id} data={item} />;
    });

    const socialDarkLinks = socialDarkConf.map((item) => {
      if (item.active) {
        return <SocialDarkButton key={item.id} data={item} />;
      } else {
        return "";
      }
    });

    let isCollapse = this.state.collapse
      ? "collapse-menu open"
      : "collapse-menu";

    return (
      <div className="main-menu">
        <div className="menu">
          <ul>{links}</ul>
        </div>
        <div className={isCollapse}>
          <div className="navbar-title">
            <Link to="/">Victor Santal</Link>
          </div>
          <div className="menu-content-collapse">
            <ul>
              <li className="home-btn">
                <p>Victor Santal</p>
              </li>
              <li>
                <button
                  type="button"
                  className="close-btn"
                  onClick={this.closeMenu}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              </li>
              {links}
            </ul>
          </div>
          <div className="menu-social-collapse">
            <ul>{socialDarkLinks}</ul>
          </div>
          <button
            type="button"
            className="menu-collapse-btn"
            onClick={this.openMenu}
          >
            <FontAwesomeIcon icon={faAlignLeft} />
          </button>
        </div>
        <div className="social">
          <ul>{socialLinks}</ul>
        </div>
      </div>
    );
  }
}
export default Menu;
