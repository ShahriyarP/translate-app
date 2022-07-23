import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("");
  const [res, setres] = useState();
  const [loading, setLoading] = useState();

  const getData = async (lang, text) => {
    setLoading(true);
    const response = await fetch(
      `${process.env.REACT_APP_API}?token=${process.env.REACT_APP_TOKEN}&action=google&lang=${lang}&q=${text}`
    );
    const { result } = await response.json();
    setres(result);
    setLoading(false);
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
        loading,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextApi;
