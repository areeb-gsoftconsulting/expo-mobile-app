import React, { createContext } from "react";

const AppContext = createContext({
  language: "eng",
  setLanguage: () => {},
});

export default AppContext;
