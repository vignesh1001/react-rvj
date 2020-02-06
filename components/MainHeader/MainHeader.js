import React, { useState } from "react";
import style from "./MainHeader.module.css";
import MainNav from "../MainNav/MainNav";
import Logo from "./images/logo.svg";
import DownArrow from "../SVGIcons/DownArrow";
import { Link } from "@reach/router";
import CloseThick from "../SVGIcons/CloseThick";
//import { useMediaQuery } from "react-responsive";

const title = "U.S. Bank SinglePoint";
const MainHeader= (props)=>{
  
  const initialState = {
    showMenu: false,
    showMobileMenuBar: false,
    MobileHeader: true,
    isMobile: window.innerWidth < 768, // useMediaQuery({ query: "(max-device-width: 768px)" }),
  };
  const [state, setState]=useState(initialState);

  const renderMenu = ()=> {
    return (
      <div className="DropdownMenu">
        <div className={style["nav-dropdown"]}>
          <div>
            <ul>
              <li>Home</li>
              <li>Menu Item 1</li>
              <li>Menu Item 1</li>
              <li>Menu Item 1</li>
              <li>Menu Item 1</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Settings</li>
              <li>
                <Link to="/logout">Log Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  const handleMainMenuClick = () => {
    setState({
      MobileHeader: true,
      showMobileMenuBar: false
    });
  }
  const renderSubMenuLink = () => {
    const { showMenu } = state;
    return (
      <>
        <span
          onClick={() => setState({ showMenu: !showMenu })}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={showMenu}
        >
          Bob Bazzle{" "}
        </span>
        <DownArrow
          fill={"#ffffff"}
          width={20}
          height={20}
          viewBox="0 0 20 20"
          aria-labelledby={"Dropdown arrow"}
        />
      </>
    );
  }

  const renderSubMenuBar = () => {
    const { isMobile,MobileHeader } = state;
    return (
      isMobile ? MobileHeader && (
        <div
          className={style.MobileHeader}
          onClick={() => setState({ MobileHeader: false })}
        >
          <span className={style.MobileMenu}>
            <div
              className={style.menuLine}
              onClick={() => this.setState({ showMobileMenuBar: true })}
            >
              <hr className={style.menuLine} />
              <hr className={style.menuLine} />
              <hr className={style.menuLine} />
            </div>
            <img className={style.MobileLogo} src={Logo} alt={title} />
          </span>
        </div>
      ) : (<div className={style.Heading}>
        <img className={style.Logo} src={Logo} alt={title} />
      </div>)
    );
  }

  const render = () => {
    const { showMenu, showMobileMenuBar, isMobile } = this.state;
    return (
      <div>
        <header role="banner" className={isMobile?style.MobileMainHeader:style.MainHeader}>
          {this.renderSubMenuBar()}
          <div className={(isMobile)?(showMobileMenuBar?style.mobileMenuData:style.hidden):''}>
            <div
              className={style.mobileMenuBarCloseIcon}
              onClick={() =>
                this.setState({
                  MobileHeader: true,
                  showMobileMenuBar: false
                })
              }
            >
              <CloseThick
                fill={"#ffffff"}
                width={40}
                height={40}
                viewBox="0 0 30 30"
                onClick={() =>
                  this.setState({
                    MobileHeader: true,
                    showMobileMenuBar: false
                  })
                }
              />
            </div>
            <div className={isMobile?(style.MobileLoginDetail):style.LoginName}>
              <p>Welcome,</p>
              <div
                className={isMobile?style.mobileRightNav:style.rightNav}
                onClick={() => this.setState({ showMenu: !showMenu })}
              >
                {isMobile?(<div>{this.renderSubMenuLink()}</div>):this.renderSubMenuLink()}
                {showMenu && this.renderMenu()}
              </div>
            </div>
            <MainNav
              {...this.props}
              handleMainMenuClick={() => this.handleMainMenuClick()}
            />
          </div>
        </header>
      </div>
    );
  }
  return render();
}
export default MainHeader;
