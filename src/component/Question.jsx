import question from "../asset/question.png";

const Question = () => {
  return (
    <div className="flex justify-end pb-8 mt-4 mr-4 sm:mr-11">
      <a target="_blank" href="https://shahriyarparhizkarnia.vercel.app/">
        <img
          className="w-12 transition ease-in-out delay-150 sm:w-16 hover:scale-110 hover:brightness-110 hover:transition-colors"
          width="70"
          src={question}
          alt="question"
        />
      </a>
    </div>
  );
};

export default Question;
