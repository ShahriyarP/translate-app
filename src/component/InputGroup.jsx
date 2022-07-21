import { useContext } from "react";
import ContextApi from "./ContextApi";

const InputGroup = () => {
  const { setLanguage } = useContext(ContextApi);

  const onLanguageChange = (e) => {
    setLanguage(e.currentTarget.value);
  };

  const classInput =
    "w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none";

  const classLable =
    "form-check-label text-white inline-block font-yekanBakh mr-2";

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div>
        <label className={classLable} htmlfor="flexRadioDefault1">
          ترجمه به فارسی
        </label>
        <input
          className={classInput}
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="fa"
          onChange={onLanguageChange}
        ></input>
      </div>

      <div>
        <label className={classLable} htmlfor="flexRadioDefault1">
          ترجمه به انگلیسی
        </label>
        <input
          className={classInput}
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="en"
          onChange={onLanguageChange}
        ></input>
      </div>
      <div>
        <label className={classLable} htmlfor="flexRadioDefault1">
          ترجمه به آلمانی
        </label>
        <input
          className={classInput}
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="de"
          onChange={onLanguageChange}
        ></input>
      </div>
      <div>
        <label className={classLable} htmlfor="flexRadioDefault1">
          ترجمه به اسپانیایی
        </label>
        <input
          className={classInput}
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="es"
          onChange={onLanguageChange}
        ></input>
      </div>
      <div>
        <label className={classLable} htmlfor="flexRadioDefault1">
          ترجمه به لهستانی
        </label>
        <input
          className={classInput}
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="pl"
          onChange={onLanguageChange}
        ></input>
      </div>
      <div>
        <label className={classLable} htmlfor="flexRadioDefault1">
          ترجمه به تایلندی
        </label>
        <input
          className={classInput}
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="th"
          onChange={onLanguageChange}
        ></input>
      </div>
      <div>
        <label className={classLable} htmlfor="flexRadioDefault1">
          ترجمه به فرانسوی
        </label>
        <input
          className={classInput}
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="fr"
          onChange={onLanguageChange}
        ></input>
      </div>
      <div>
        <label className={classLable} htmlfor="flexRadioDefault1">
          ترجمه به ترکی
        </label>
        <input
          className={classInput}
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="tr"
          onChange={onLanguageChange}
        ></input>
      </div>
    </div>
  );
};

export default InputGroup;
