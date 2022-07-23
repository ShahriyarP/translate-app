import { useContext } from "react";
import ContextApi from "./ContextApi";
import Loading from "./Loading";

const Resault = ({ textShow }) => {
  const { loading } = useContext(ContextApi);

  const loadSearch = () => {
    if (loading) {
      textShow = "";
      return <Loading />;
    }
  };

  return (
    <div className="flex justify-center text-2xl text-white mt-9">
      {loadSearch()}
      {textShow}
    </div>
  );
};

export default Resault;
