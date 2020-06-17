import React from "react";

const OnBoardStateContext = React.createContext();
const OnBoardDispatchContext = React.createContext();

function onBoardReducer(state, action) {
  switch (action.type) {
    case "board": {
      return { onBoarded: true };
    }
    case "unboard": {
      return { onBoarded: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function OnBoardProvider({ children }) {
  const [state, dispatch] = React.useReducer(onBoardReducer, {
    onBoarded: false,
  });
  return (
    <OnBoardStateContext.Provider value={state}>
      <OnBoardDispatchContext.Provider value={dispatch}>
        {children}
      </OnBoardDispatchContext.Provider>
    </OnBoardStateContext.Provider>
  );
}

function useOnBoardState() {
  const context = React.useContext(OnBoardStateContext);
  if (context === undefined) {
    throw new Error("useOnBoardState must be used within a OnBoardProvider");
  }
  return context;
}

function useOnBoardDispatch() {
  const context = React.useContext(OnBoardDispatchContext);
  if (context === undefined) {
    throw new Error("useOnBoardDispatch must be used within a OnBoardProvider");
  }
  return context;
}

export { OnBoardProvider, useOnBoardState, useOnBoardDispatch };
