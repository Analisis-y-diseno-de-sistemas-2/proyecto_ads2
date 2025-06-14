import React, { createContext, useContext, useReducer } from "react";

// Crear el contexto
const RegFormContext = createContext();
export const useRegFormContext = () => {
  return useContext(RegFormContext);
};

// Reducer para manejar el estado del formulario
const regFormReducer = (state, action) => {
  switch (action.type) {
    case "SET_MATRICULA_STEP":
      return { ...state, step: action.payload };
    case "SET_REGISTRAR_DATOS_STEP":
      return { ...state, personalDetails: action.payload };
    case "SET_FINALIZADO_STEP":
      return { ...state, applicationDetails: action.payload };
    case "CAMBIAR_PROGRESO": {
      return { ...state, progress: action.data };
    }
    default:
      return state;
  }
};

// Proveedor del contexto
export const RegFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(regFormReducer, { progress: 1 });

  return (
    <RegFormContext.Provider value={{ state, dispatch }}>
      {children}
    </RegFormContext.Provider>
  );
};
