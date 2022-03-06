// Context provider (1)
import { createContext, useState } from "react";

export const LogsContext = createContext(); // Export context itself

// This contextProvider is passed to any component requiring the context
// create useState to preserve logs
export const LogsProvider = ({ children }) => {
  const [state, setState] = useState({
    logs: [],
  });

  // Adding existing log method
  const addLog = (ids, action) => {
    setState((data) => ({
      ...data,
      logs: [...data.logs, { action, items: ids, time: Date.now() }],
    }));
  };

  return (
    <LogsContext.Provider
      value={{
        state,
        addLog,
      }}
    >
      {children}
    </LogsContext.Provider>
  );
};
