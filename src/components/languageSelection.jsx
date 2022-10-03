import React from "react";
import {AppContext} from "../context/appContext";
import { getLanguageSelectionData } from "../data/index";

export class LanguageSelection extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className="haveMargin">
            {console.log(context)}
            <label className="labels">
              {context.state.localeObj && context.state.localeObj.languageLabel}
              :{" "}
            </label>
            <select
              value={context.state.localeObj && context.state.localeObj.locale}
              onChange={context.updateLocale}
            >
              <option value="en-US">English</option>
              <option value="fr-FR">French</option>
              <option value="es-ES">Spanish</option>
            </select>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
