import {AppContext} from "../context/appContext";

export const Content = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <h2>{context.state.localeObj && context.state.localeObj.content}</h2>
      )}
    </AppContext.Consumer>
  );
}

