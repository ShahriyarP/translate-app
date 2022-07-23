import { BsSearch } from "react-icons/bs";
import Resault from "./Resault";
import { useState, useContext } from "react";
import ContextApi from "./ContextApi";
import InputGroup from "./InputGroup";
import Question from "./Question";
import Footer from "./Footer";

const ItemContent = () => {
  const {
    getData,
    setText,
    notify,
    text,
    language,
    res,
    ToastContainer,
    loading,
  } = useContext(ContextApi);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      notify("لطفا کلمه ی مورد نظر خود را وارد نمایید");
    } else if (language === "") {
      notify("لطفا زبان مورد نظر را انتخاب نمایید");
    } else {
      getData(language, text);
      setText("");
    }
  };

  return (
    <div className="box-border w-full h-full bg-gray-700">
      <div className="relative flex">
        <form onSubmit={handleSubmit} className="w-full mx-auto mt-6">
          <h4 className="text-3xl text-center text-white font-yekanBakh">
            دیکـشنری آنلاین شهـریار
          </h4>
          <p className="px-5 mt-4 text-lg text-center text-white lg:text-xl xl:text-xl 2xl:text-xl font-yekanBakh">
            دیکشنری چند زبانه ی شهریـار با هدف گسترش محتوای فارسی و آموزشی به
            طور رایگان منتشر شده است
          </p>

          <InputGroup />

          <div className="flex w-5/6 p-2 mx-auto mt-8 text-lg bg-white lg:h-20 md:w-3/4 xl:w-2/5 2xl:w-2/5 sm:w-4/4 lg:w-3/4 rounded-3xl">
            <div className="inline-flex items-center justify-between w-full ">
              <div className="flex items-center w-full">
                <BsSearch className="relative ml-2 mr-4" />
                <input
                  type="text"
                  placeholder="Search Here..."
                  className="w-full mr-2 text-xs outline-none sm:text-lg lg:text-lg xl:text-xl 2xl:text-xl "
                  dir="auto"
                  onChange={handleChange}
                  value={text}
                />
              </div>
              <button
                type="submit"
                className="w-1/3 p-3 text-sm text-white bg-purple-500 hover:bg-purple-600 font-yekanBakh rounded-2xl sm:text-lg lg:text-lg xl:text-xl 2xl:text-xl xl:w-36 lg:w-28 "
              >
                جستجو
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
      <Resault textShow={res} />
      <Question />
      <Footer />
    </div>
  );
};

export default ItemContent;
