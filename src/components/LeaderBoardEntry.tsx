import React from "react";

const LeaderBoardEntry = (props: any) => {
  return (
    <div
      className={`w-full my-2 md:my-4 px-1 py-2 md:px-2 md:py-4 md:text-2xl font-bold rounded-lg md:rounded-2xl flex flex-row justify-between ${
        props.isComplete
          ? " bg-gradient-to-br from-amber-500 to-orange-500 md:drop-shadow-winner drop-shadow-mwinner"
          : ""
      }`}
    >
      <div className="w-12">{props.rank}</div>
      <div className="w-2/4 text-center">{props.name}</div>
      <div className="w-2/5">
        {props.isComplete && (
          <>
            <div className="font-medium text-center md:block hidden">
              Completed:{" "}
              {new Date(props.lastBadgeDate).toLocaleString("default", {
                month: "short",
                day: "2-digit",
              })}
            </div>
            <div className="font-medium text-center md:hidden">
              {new Date(props.lastBadgeDate).toLocaleString("default", {
                day: "2-digit",
              })}
              /
              {new Date(props.lastBadgeDate).toLocaleString("default", {
                month: "2-digit",
              })}
            </div>
          </>
        )}
        {!props.isComplete && (
          <>
            <div className="font-medium text-center md:block hidden">
              {props.badges} Badge(s) earned
            </div>
            <div className="font-medium text-center md:hidden">
              {props.badges} badge(s)
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeaderBoardEntry;
