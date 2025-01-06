import { createContext, useState } from "react";

export const CardContext = createContext();
export const CardProvider = ({ children }) => {
  const [cardData, setCardData] = useState([
    {
      product: 1,
      price: "$39.99",
      title: " Premium WordPress Theme",
      imageUrl:
        "https://img.freepik.com/free-psd/smiley-woman-wearing-sunglasses-landing-page-template_23-2148782097.jpg?t=st=1736100689~exp=1736104289~hmac=cd4b6a8904179ee43f4980245d2b36750c47914f6cd43b11a5a423c65fdb1018&w=1060",
      description:
        "A beautifully designed theme with fast performance and customizable options. Perfect for any website.",
    },
    {
      product: 2,
      price: "$19.99",
      title: " Powerful WordPress Plugin",
      imageUrl:
        "https://img.freepik.com/free-psd/design-landing-page-template_23-2148947823.jpg?t=st=1736100895~exp=1736104495~hmac=a1d1c5d717734ca8d42c8b04b91928bfb1290b92f08540f707858be1d4cf918d&w=1060",
      description:
        "Enhance your website’s functionality with this powerful plugin. Easy installation and full support.",
    },
    {
      product: 3,
      price: " $49.99",
      title: " Creative WordPress Theme",
      imageUrl:
        "https://img.freepik.com/free-psd/wellness-concept-landing-page-template_23-2150094962.jpg?t=st=1736100761~exp=1736104361~hmac=00136a452a9f0af57588fa33136dae939f44d0aa2d777897f09b7874ad3e4b2d&w=1060",
      description:
        " A theme designed for creative portfolios and agencies.Beautiful layouts and fast loading times.",
    },
  ]);
  return (
    <CardContext.Provider value={{ cardData, setCardData }}>
      {children}
    </CardContext.Provider>
  );
};
