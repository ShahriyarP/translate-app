import copyright from "../asset/copyright.png";

const Footer = () => {
  return (
    <div className="flex items-center justify-center pb-6 text-white">
      <h4 className="mr-2 text-sm">copyrighting 2022 </h4>
      <img width="15" src={copyright} alt="" />
      <a href="https://github.com/itsshahriyar">
        <h4 className="ml-2 text-sm">shahriyar parhizkarnia</h4>
      </a>
    </div>
  );
};

export default Footer;
