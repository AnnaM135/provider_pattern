import React, { useState, useEffect } from "react";
import { getLocaleCode, getlocaleByCode } from "../data/index";
import { AppContext } from "./appContext";

export const AppProvider = (props) => {

  const [state, setState] = useState({
    localeCodes: [],
    localeObj: {},
    theme: "light"
  })
  const updateLocalCode = async (e) => {
    try {
      const localeObj = await getlocaleByCode(e.target.value);
      setState(() => (
        {...state, localeObj}
      ));
    } catch (err) {
      console.log(err);
    }
  };

  const updateTheme = (e) => {
    setState(() => (
      { ...state, theme: e.target.checked ? "dark" : "light" }
    ));
  };

  useEffect(() => {
    func()
  }, [])

  const func = async () => {
    try {
      const localeCodes = await getLocaleCode();
      const localeObj = await getlocaleByCode();
      setState({ localeCodes, localeObj });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AppContext.Provider
      value={{
        state: state,
        updateLocale: updateLocalCode,
        updateTheme: updateTheme
      }}
    >
      <div className={state.theme}>{props.children}</div>
    </AppContext.Provider>
  );


}
