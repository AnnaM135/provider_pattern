import React from "react";
import {AppContext} from "../context/appContext";

export class Content extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <h2>{context.state.localeObj && context.state.localeObj.content}</h2>
        )}
      </AppContext.Consumer>
    );
  }
}

