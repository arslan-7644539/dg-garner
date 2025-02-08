import { createContext, useEffect, useState } from "react";
import supabase from "../lib/supabase";

export const CardContext = createContext();
export const CardProvider = ({ children }) => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // -------------------------

  useEffect(() => {
    const cardItem = async () => {
      let { data, error } = await supabase.from("Products").select("*");

      if (data) {
        setCardData(data);
        setLoading(false);
      } else {
        console.log(error);
        setLoading(true);
      }
    };
    cardItem();
  }, [page]);

  return (
    <CardContext.Provider
      value={{ cardData, setCardData, loading, setLoading,  page, setPage }}
    >
      {children}
    </CardContext.Provider>
  );
};
