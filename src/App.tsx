import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Image } from "./components/images";
import { useEffect, useState } from "react";
import { CarouselCustom } from "./components/carousel";
import { TransparentImageText } from "./components/transparentImageText";
import { Accordion } from "./components/accordion";

import Image8 from "./assets/images/Image8.png";
import Image10 from "./assets/images/Image10.png";
import Image11 from "./assets/images/Image11.png";
import Image12 from "./assets/images/Image12.png";
import Image13 from "./assets/images/Image13.png";
import Image14 from "./assets/images/Image14.png";
import Image15 from "./assets/images/Image15.png";
import Image16 from "./assets/images/Image16.png";
import Image17 from "./assets/images/Image17.png";
import Image18 from "./assets/images/Image18.png";
import Image19 from "./assets/images/Image19.png";
import Image21 from "./assets/images/Image21.png";
import Image22 from "./assets/images/Image22.png";
import Image23 from "./assets/images/Image23.png";
import { Button } from "./components/buttons/Button";
import { IconType } from "./components/icons";
import { Helper } from "./utils";
import { ColourConfigurations } from "./constants/colourConfigurations";

const highlightText =
  "Contact us now to find out how we can assist your small business navigate in today's world of IT and Technology in a cost effective manner.";

const highlights = [
  { title: "Consultation", text: highlightText, image: Image16 },
  { title: "Hosting service", text: highlightText, image: Image17 },
  { title: "Small business", text: highlightText, image: Image18 },
];

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
      <div className="container pt-5">
        <Menu
          mobile={isMobile}
          menuElements={[
            {
              element: {
                label: "Home",
                url: "#",
              },
              multiElement: [],
              onSelected: (link: string) => console.log(link),
            },
            {
              element: {
                label: "About us",
                url: "#",
              },
              onSelected: (link: string) => console.log(link),
              multiElement: [
                { label: "Our Story", url: "#" },
                { label: "Our Vision", url: "#" },
              ],
            },
            {
              element: {
                label: "News",
                url: "#",
              },
              multiElement: [],
              onSelected: (link: string) => console.log(link),
            },
            {
              element: {
                label: "Career",
                url: "#",
              },
              multiElement: [],
              onSelected: (link: string) => console.log(link),
            },
          ]}
        />
        <CarouselCustom
          id="img-header"
          elements={[Image8, Image10, Image8, Image10]}
        />
        <div className="container-fluid container-background pb-5">
          <h2>Our Services</h2>
          <CarouselCustom
            id="services-carousel"
            card={true}
            cardElements={[
              {
                img: Image11,
                title: "Deciding on IT Solutions",
                colour: "rose",
              },
              {
                img: Image12,
                title: "Document Management",
                colour: "yellow",
              },
              {
                img: Image13,
                title: "Enterprise Resource Planning",
                colour: "peach",
              },
              {
                img: Image14,
                title: "IA and Usability",
                colour: "cyan",
              },
              {
                img: Image15,
                title: "Web Content Management",
                colour: "lilac",
              },
              {
                img: Image11,
                title: "Deciding on IT Solutions",
                colour: "rose",
              },
              {
                img: Image12,
                title: "Document Management",
                colour: "yellow",
              },
              {
                img: Image13,
                title: "Enterprise Resource Planning",
                colour: "peach",
              },
            ]}
          />
          <h2>Our Highlights</h2>
          <div className="row d-flex justify-content-center">
            {highlights.map((element, index) => (
              <div
                className="col-sm-3 col-xs-12 d-flex justify-content-center mt-1 mb-1"
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
          <p className="ask-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            lobortis auctor tincidunt. Nullam nec tortor felis. Praesent
            sollicitudin nisl lacus, et pellentesque mauris aliquet in. Fusce
            sit amet pulvinar velit. Curabitur rutrum est ac orci pellentesque,
            eget commodo orci tristique. Pellentesque at augue sit amet sem
            interdum interdum sit amet ut mauris. Aliquam rutrum tortor ac
            rhoncus aliquam. Ut luctus lacinia tortor, vitae bibendum eros
            pulvinar at. Proin eget rhoncus libero.
          </p>
          <Accordion
            id="ask-accordion"
            elements={[
              {
                title: "Are you able to support my small business?",
                paragraph:
                  "As a Microsoft Partner we are also recognized as a Microsoft Small Business Specialist. Click here to find us on Microsoft Pinpoint.",
              },
              {
                title: "What are the services you provide?",
                paragraph:
                  "As a Microsoft Partner we are also recognized as a Microsoft Small Business Specialist. Click here to find us on Microsoft Pinpoint.",
              },
              {
                title: "Are you hiring?",
                paragraph:
                  "As a Microsoft Partner we are also recognized as a Microsoft Small Business Specialist. Click here to find us on Microsoft Pinpoint.",
              },
              {
                title: "How do I contact you?",
                paragraph:
                  "As a Microsoft Partner we are also recognized as a Microsoft Small Business Specialist. Click here to find us on Microsoft Pinpoint.",
              },
            ]}
          />
        </div>
        <div className="container-fluid container-background main-panel-base position-relative">
          <h2>Project Management</h2>
          <div className="row ps-2 pe-2">
            <div className="col-sm-7 col-xs-12">
              <p className="ask-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus id lacus lacinia, volutpat dolor a, dictum odio. Donec
                aliquam, dui ac tristique laoreet, diam eros hendrerit eros, sed
                interdum ante nisl id nisl. Morbi risus ligula, malesuada a
                ullamcorper nec, lobortis quis felis. Phasellus orci turpis,
                tempus non est in, accumsan ullamcorper neque. Vestibulum
                faucibus sapien massa, nec imperdiet sapien maximus et. Sed
                felis nunc, sollicitudin in lectus et, pulvinar elementum nibh.
                Etiam ex tellus, congue id risus ut, ornare dapibus lorem. Sed
                venenatis eu nulla ac aliquam. Cras quis ipsum a nibh viverra
                egestas. In ut scelerisque diam, non eleifend ligula.
                Suspendisse lacinia non leo et aliquet. Fusce commodo tincidunt
                metus sed luctus. Proin congue et mauris non porta. Praesent
                eget auctor elit, quis suscipit erat. Maecenas libero urna,
                maximus non pellentesque ut, molestie et lorem.
              </p>
            </div>
            <div className="col-sm-1 d-none d-sm-block"></div>
            <div className="col-sm-4 d-none d-sm-block">
              <Image src={Image19} />
            </div>
          </div>
          <div className="row ps-2 pe-2">
            <div className="row col-sm-7 col-xs-12">
              <div className="col-sm-4 col-xs-12 d-flex justify-content-center">
                <Image src={Image21} className="w-25" />
              </div>
              <div className="col-sm-4 col-xs-12 d-flex justify-content-center">
                <Image src={Image22} className="w-25" />
              </div>
              <div className="col-sm-4 col-xs-12 d-flex justify-content-center">
                <Image src={Image23} className="w-25" />
              </div>
            </div>
            <div className="col-sm-1 d-none d-sm-block"></div>
            <div className="col-sm-4 d-none d-sm-block"></div>
          </div>
          <h2>Recommendations</h2>
          <CarouselCustom
            id="recommendations-carousel"
            card={true}
            cardElements={[
              {
                img: Image11,
                title: "Deciding on IT Solutions",
                colour: "primary",
              },
              {
                img: Image12,
                title: "Document Management",
                colour: "primary",
              },
              {
                img: Image13,
                title: "Enterprise Resource Planning",
                colour: "primary",
              },
              {
                img: Image14,
                title: "IA and Usability",
                colour: "primary",
              },
              {
                img: Image15,
                title: "Web Content Management",
                colour: "primary",
              },
              {
                img: Image11,
                title: "Deciding on IT Solutions",
                colour: "primary",
              },
              {
                img: Image12,
                title: "Document Management",
                colour: "primary",
              },
              {
                img: Image13,
                title: "Enterprise Resource Planning",
                colour: "primary",
              },
            ]}
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
          <div className="row col-sm-3 col-xs-12">
            <div className="col-6 d-flex tnc-div">
              <a href="#">Privacy Policy</a>
            </div>
            <div className="col-6 d-flex tnc-div">
              <a href="#">Terms of use</a>
            </div>
          </div>
          <div className="col-sm-6 d-none d-sm-block"></div>
          <div className="col-sm-3 col-xs-12 d-flex copyright-div">
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
