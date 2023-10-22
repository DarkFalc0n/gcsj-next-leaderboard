const Stats = (props: any) => {
  return (
    <div className="my-6 md:my-6 py-4 bg-gradient-to-br from-sky-300 to-blue-600 md:py-12 rounded-xl md:rounded-[25px] w-full md:flex md:flex-row justify-center text-center md:drop-shadow-stat drop-shadow-mstat">
      <div className="mx-4 text-md font-bold md:text-xl">
        Overall Completions:{" "}
        <span className="font-black text-xl md:text-3xl">
          {props.allCompleted}
        </span>
      </div>
      <div className="mx-4 text-md font-bold md:text-xl">
        GenAI completions:{" "}
        <span className="font-black text-xl md:text-3xl">
          {props.genaiCompleted}
        </span>
      </div>
    </div>
  );
};

export default Stats;
