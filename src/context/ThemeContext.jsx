import { createContext, useReducer, useEffect } from "react";

export const Data = createContext(null);

// 1. جلب القيمة من localStorage عند بدء التطبيق
const initialData = { 
  theme: localStorage.getItem("myTheme") || "light" 
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      // 2. تحديث الـ localStorage عند تغيير الثيم
      localStorage.setItem("myTheme", action.newValue);
      return { ...state, theme: action.newValue };
    default:
      return state;
  }
};

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  
  const changeTheme = (newTheme) => {
    dispatch({ type: "CHANGE_THEME", newValue: newTheme });
  };

  return (
    <Data.Provider value={{ ...firstState, changeTheme }}>
      {children}
    </Data.Provider>
  );
}