import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../lib/supabase";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  console.log("🚀 ~ AuthProvider ~ session:", session);

  const [adminInfo, setAdminInfo] = useState({});

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
     
    });
      console.log("🚀 ~ supabase.auth.getSession ~ session:", session)
  }, []);
 
  useEffect(() => {
    const newAdmin = async () => {
      if (session) {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("uid", session?.user?.id)
          .single();
          setAdminInfo(data)
      }
    };
    newAdmin();
  }, [session]);

  return (
    <AuthContext.Provider value={{ session, setSession, adminInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
