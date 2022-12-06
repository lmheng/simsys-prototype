import { CardProps } from "../components/card";

import Image8 from "../assets/images/Image8.png";
import Image10 from "../assets/images/Image10.png";
import Image11 from "../assets/images/Image11.png";
import Image12 from "../assets/images/Image12.png";
import Image13 from "../assets/images/Image13.png";
import Image14 from "../assets/images/Image14.png";
import Image15 from "../assets/images/Image15.png";
import Image16 from "../assets/images/Image16.png";
import Image17 from "../assets/images/Image17.png";
import Image18 from "../assets/images/Image18.png";

const highlightText =
  "Contact us now to find out how we can assist your small business navigate in today's world of IT and Technology in a cost effective manner.";

const highlights = [
  { title: "Consultation", text: highlightText, image: Image16 },
  { title: "Hosting service", text: highlightText, image: Image17 },
  { title: "Small business", text: highlightText, image: Image18 },
];

const menuElements = [
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
];

const imgHeader = [Image8, Image10, Image8, Image10];

const servicesCarousel = [
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
] as CardProps[];

const askParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            lobortis auctor tincidunt. Nullam nec tortor felis. Praesent
            sollicitudin nisl lacus, et pellentesque mauris aliquet in. Fusce
            sit amet pulvinar velit. Curabitur rutrum est ac orci pellentesque,
            eget commodo orci tristique. Pellentesque at augue sit amet sem
            interdum interdum sit amet ut mauris. Aliquam rutrum tortor ac
            rhoncus aliquam. Ut luctus lacinia tortor, vitae bibendum eros
            pulvinar at. Proin eget rhoncus libero.`;

const askAccordion = [
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
];

const askPrjManagement = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                maximus non pellentesque ut, molestie et lorem.`;

const recommendationsCarousel = [
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
] as CardProps[];

export const Constants = {
  highlightText,
  highlights,
  menuElements,
  imgHeader,
  servicesCarousel,
  askParagraph,
  askAccordion,
  askPrjManagement,
  recommendationsCarousel,
};
