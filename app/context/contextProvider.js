import { createContext, useReducer } from "react";
import AppContext from "./appContext";

const defaultCartState = {
  language: "eng",
};

const AppReducer = (state, action) => {
  if (action.type == "lang") {
    const lang = action.item;
    return {
      language: lang,
    };
  }
  return defaultCartState;
};

const AppContextProvider = (props) => {
  const [appState, dispatchAppActions] = useReducer(
    AppReducer,
    defaultCartState
  );
  const changeLangHandler = (item) => {
    dispatchAppActions({ type: "lang", item: item });
  };
  const appContext = {
    language: appState.language,
    setLanguage: changeLangHandler,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
