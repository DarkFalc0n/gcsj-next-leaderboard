import LeaderBoardEntry from "./LeaderBoardEntry";

const LeaderBoard = (props: any) => {
  return (
    <div className="w-full">
      <div className="mt-12 mb-12 md:text-3xl text-xl font-black text-center">
        LeaderBoard
      </div>
      {props.data.map((student: any, index: number) => (
        <LeaderBoardEntry
          key={student._id}
          rank={index + 1}
          name={student.name}
          badges={
            student.genAIbadges + student.skillBadges + student.courseBadges
          }
          isComplete={student.allCompleted}
          lastBadgeDate={student.lastBadgeDate}
        />
      ))}
    </div>
  );
};

export default LeaderBoard;
