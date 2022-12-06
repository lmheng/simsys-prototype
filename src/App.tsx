import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Image } from "./components/images";
import { useEffect, useState } from "react";
import { CarouselCustom } from "./components/carousel";
import { TransparentImageText } from "./components/transparentImageText";
import { Accordion } from "./components/accordion";
import { Button } from "./components/buttons/Button";
import { IconType } from "./components/icons";
import { Helper } from "./utils";
import { ColourConfigurations } from "./constants/colourConfigurations";

import Image19 from "./assets/images/Image19.png";
import Image21 from "./assets/images/Image21.png";
import Image22 from "./assets/images/Image22.png";
import Image23 from "./assets/images/Image23.png";
import { Constants } from "./constants/constants";

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  return (
    <div className="App">
      <Header />
      <div className="container pt-5 main-div">
        <Menu mobile={isMobile} menuElements={Constants.menuElements} />
        <CarouselCustom id="img-header" elements={Constants.imgHeader} />
        <div className="container-fluid container-background pb-5">
          <h2>Our Services</h2>
          <CarouselCustom
            id="services-carousel"
            card={true}
            cardElements={Constants.servicesCarousel}
          />
          <h2>Our Highlights</h2>
          <div className="row d-flex justify-content-center">
            {Constants.highlights.map((element, index) => (
              <div
                className="col-lg-3 col-xs-12 d-flex justify-content-center mt-1 mb-1"
                key={index}
              >
                <TransparentImageText
                  index={index}
                  title={element.title}
                  text={element.text}
                  img={element.image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="container-fluid">
          <h2>Ask @Simsys</h2>
          <p className="ask-paragraph">{Constants.askParagraph}</p>
          <Accordion id="ask-accordion" elements={Constants.askAccordion} />
        </div>
        <div className="container-fluid container-background main-panel-base position-relative">
          <h2>Project Management</h2>
          <div className="row ps-2 pe-2">
            <div className="col-lg-7 col-xs-12">
              <p className="ask-paragraph">{Constants.askPrjManagement}</p>
            </div>
            <div className="col-lg-1 d-none d-lg-block"></div>
            <div className="col-lg-4 d-none d-lg-block">
              <Image src={Image19} />
            </div>
          </div>
          <div className="row ps-2 pe-2">
            <div className="row col-lg-7 col-xs-12">
              <div className="col-lg-4 col-xs-12 d-flex justify-content-center">
                <Image src={Image21} className="w-25 small-img" />
              </div>
              <div className="col-lg-4 col-xs-12 d-flex justify-content-center">
                <Image src={Image22} className="w-25 small-img" />
              </div>
              <div className="col-lg-4 col-xs-12 d-flex justify-content-center">
                <Image src={Image23} className="w-25 small-img" />
              </div>
            </div>
            <div className="col-lg-1 d-none d-lg-block"></div>
            <div className="col-lg-4 d-none d-lg-block"></div>
          </div>
          <h2>Recommendations</h2>
          <CarouselCustom
            id="recommendations-carousel"
            card={true}
            cardElements={Constants.recommendationsCarousel}
          />
          <div className="row d-flex justify-content-center">
            <Button
              primary={false}
              shape="rectangle"
              iconSize={48}
              icon={IconType.doubleUp}
              iconColour={Helper.getConstantColour(ColourConfigurations.white)}
              onClick={() => window.scrollTo(0, 0)}
              className="scroll-up-button position-absolute"
            />
          </div>
        </div>
        <div className="row footer pt-2 footer-text-panel">
          <div className="row col-md-3 col-xs-12">
            <div className="col-6 d-flex tnc-div">
              <a href="#">Privacy Policy</a>
            </div>
            <div className="col-6 d-flex tnc-div">
              <a href="#">Terms of use</a>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block"></div>
          <div className="col-md-3 col-xs-12 d-flex copyright-div">
            <div>
              <p className="footer-paragraph">
                © 2022 Simple Solution Systems.
                <br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div className="base-rect w-100"></div>
        <div className="background-accent"></div>
      </div>
    </div>
  );
}

export default App;
