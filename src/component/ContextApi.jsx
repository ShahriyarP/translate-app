import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("");
  const [res, setres] = useState();

  const getData = async (lang, text) => {
    const response = await fetch(
      `${process.env.REACT_APP_API}?token=${process.env.REACT_APP_TOKEN}&action=google&lang=${lang}&q=${text}`
    );
    const { result } = await response.json();
    setres(result);
  };

  const notify = (textNotify) => {
    toast.error(textNotify, {
      position: toast.POSITION.TOP_CENTER,
      theme: "colored",
    });
  };

  return (
    <ContextApi.Provider
      value={{
        text,
        setText,
        language,
        setLanguage,
        res,
        getData,
        notify,
        ToastContainer,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextApi;
