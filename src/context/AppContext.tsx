"use client";

import { createContext, useContext, useState } from "react";

interface AppContextType {
  accessToken: string;
  setAccessToken: (token: string) => void;
  refreshToken?: string;
  setRefreshToken?: (token: string) => void;
}

const AppContext = createContext<AppContextType>({
  accessToken: "",
  setAccessToken: (token: string) => {},
  refreshToken: "",
  setRefreshToken: (refreshToken: string) => {}
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  return context;
};

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [accessToken, setAccessToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");
  return (
    <AppContext.Provider
      value={{ accessToken, setAccessToken, refreshToken, setRefreshToken }}
    >
      {children}
    </AppContext.Provider>
  );
}
