import { createContext, useContext, useReducer } from "react";
import { uiReducer } from "../reducers/uiReducer";

export const UiContext = createContext();

let mode = null;
if (typeof window !== "undefined") {
  mode = JSON.parse(localStorage.getItem("JobIt-Next-theme-mode"));
}

const initialState = {
  isDropdownOpen: false,
  isNotificationsOpen: false,
  isSidebarOpen: false,
  isFilterMenuOpen: false,
  isEventFiltersOpen: false,
  darkMode: mode !== null ? mode : false,
};

export const UiProvider = ({ children }) => {
  const [ui, dispatch] = useReducer(uiReducer, initialState);

  return (
    <UiContext.Provider value={{ ...ui, dispatch }}>
      {children}
    </UiContext.Provider>
  );
};

export const useUiContext = () => useContext(UiContext);
