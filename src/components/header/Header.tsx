import { ColourConfigurations } from "../../constants/colourConfigurations";
import { Helper } from "../../utils";
import { Button } from "../buttons/Button";
import { Icon, IconType, IconVariant } from "../icons";
import "./header.css";

export const Header = () => {
  return (
    <div className="container-fluid header-background position-fixed">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10 col-xs-12 d-flex justify-content-between align-items-center">
          <div className="col-sm-5 cl-xs-6 d-flex justify-content-start align-items-center">
            <Icon
              type={IconType.facebook}
              variant={IconVariant.clickable}
              onClick={() => (window.location.href = "#")}
              colour={Helper.getConstantColour(ColourConfigurations.text)}
              className="ms-2 me-2"
            />
            <Icon
              type={IconType.youtube}
              variant={IconVariant.clickable}
              onClick={() => (window.location.href = "#")}
              colour={Helper.getConstantColour(ColourConfigurations.text)}
              className="ms-2 me-2"
            />
          </div>
          <div className="col-sm-5 cl-xs-6 d-flex justify-content-end">
            <Button
              label="Contact"
              onClick={() => (window.location.href = "#")}
              className="ms-1 me-1"
            />
            <Button
              label="Feedback"
              onClick={() => (window.location.href = "#")}
              className="ms-1 me-1"
            />
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};
