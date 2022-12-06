import { Image } from "../images";
import SIMSYS from "../../assets/images/Image9.png";
import "./menu.css";
import { Button } from "../buttons/Button";
import { IconType } from "../icons";
import { Helper } from "../../utils";
import { ColourConfigurations } from "../../constants/colourConfigurations";
import { useState } from "react";

export type menuSubElement = {
  label: string;
  url: string;
};

interface MenuElementProps {
  /**
   * Main element
   */
  element: menuSubElement;
  /**
   * Active?
   */
  active?: string;
  /**
   * Mobile?
   */
  mobile?: boolean;
  /**
   * multiElement?
   */
  multiElement?: Array<menuSubElement>;
  /**
   * onClick callback?
   */
  onSelected: (link: string) => void;
}

const MenuElements = ({
  element,
  active,
  mobile,
  multiElement = [],
  onSelected,
  ...props
}: MenuElementProps) => {
  return (
    <li
      className={`nav-item ${active === element.label && "active"} ${
        multiElement?.length !== 0 && "dropdown"
      }`}
    >
      {multiElement?.length === 0 && (
        <a
          className={`nav-link ${active === element.label && "active"}`}
          href={element?.url}
          onClick={() => onSelected(element.label)}
        >
          {element?.label}
        </a>
      )}
      {multiElement?.length !== 0 && (
        <>
          <a
            className={`nav-link dropdown-toggle ${
              active === element.label && "active"
            }`}
            data-bs-toggle={mobile ? "collapse" : "dropdown"}
            href="#collapseMenu"
            role="button"
            aria-expanded="false"
            aria-controls="collapseMenu"
            onClick={() => onSelected(element.label)}
          >
            {element?.label}
          </a>
          <div
            className={`${mobile ? "collapse" : "dropdown dropdown-menu"} ${
              active === element.label && "show"
            }`}
            id="collapseMenu"
          >
            {multiElement.map((ele, index) => (
              <a
                className={`dropdown-item ${active === ele.label && "active"}`}
                href={ele.url}
                onClick={() => onSelected(ele.label)}
                key={index}
              >
                {ele.label}
              </a>
            ))}
          </div>
        </>
      )}
    </li>
  );
};

interface MenuProps {
  /**
   * Menu elements
   */
  menuElements: Array<MenuElementProps>;
  /**
   * Custom class for additional styling required
   */
  className?: string;
  /**
   * Flag if view is in mobile view
   */
  mobile?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Menu = ({
  mobile = false,
  menuElements,
  className = "",
  onClick,
  ...props
}: MenuProps) => {
  const [activeElement, setActiveElement] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="container-fluid">
      {mobile && (
        <div className="row align-items-center justify-content-between background-mobile">
          <div className="col-1">
            <Button
              primary={false}
              shape="square"
              icon={IconType.menu}
              iconColour={Helper.getConstantColour(ColourConfigurations.text)}
              onClick={() => setMobileNav((mobile) => !mobile)}
            />
          </div>
          <div className="col-10 d-flex justify-content-center">
            <Image
              src={SIMSYS}
              clickable={true}
              onClick={() => (window.location.href = "#")}
              className="w-50"
            />
          </div>
          <div className="col-1">
            <Button
              primary={false}
              shape="square"
              icon={IconType.search}
              iconColour={Helper.getConstantColour(ColourConfigurations.text)}
            />
          </div>
          <nav className={`sidebar ${mobileNav && "sidebar-active"}`}>
            <div className="sidebar-header">
              <a
                href="#"
                className="closebtn"
                onClick={() => setMobileNav((mobile) => !mobile)}
              >
                &times;
              </a>
            </div>
            <ul className="list-unstyled components">
              {menuElements.map((e, index) => (
                <MenuElements
                  element={e.element}
                  multiElement={e.multiElement}
                  active={activeElement}
                  mobile={true}
                  onSelected={(link) => setActiveElement(link)}
                  key={index}
                />
              ))}
            </ul>
          </nav>
        </div>
      )}
      {!mobile && (
        <div className="row align-items-end">
          <div className="col-1 background"></div>
          <div className="col-2">
            <Image
              src={SIMSYS}
              clickable={true}
              onClick={() => (window.location.href = "#")}
            />
          </div>
          <div className="col-9">
            <nav className="navbar background navbar-expand-md d-flex justify-content-between d-flex align-items-end">
              <nav className="nav">
                <ul className="navbar-nav mr-auto">
                  {menuElements.map((e, index) => (
                    <MenuElements
                      element={e.element}
                      multiElement={e.multiElement}
                      active={activeElement}
                      onSelected={(link) => setActiveElement(link)}
                      key={index}
                    />
                  ))}
                </ul>
              </nav>
              <div className="form-inline">
                <Button
                  primary={false}
                  shape="square"
                  icon={IconType.search}
                  iconColour={Helper.getConstantColour(
                    ColourConfigurations.text
                  )}
                />
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
