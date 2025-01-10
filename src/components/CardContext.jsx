import { createContext, useEffect, useState } from "react";
import supabase from "../lib/supabase";

export const CardContext = createContext();
export const CardProvider = ({ children }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const cardItem = async () => {
      let { data, error } = await supabase.from("Products").select("*");

      if (data) {
        setCardData(data);
      } else {
        console.log(error);
      }
    };
    cardItem();
  }, []);

  return (
    <CardContext.Provider value={{ cardData, setCardData }}>
      {children}
    </CardContext.Provider>
  );
};
