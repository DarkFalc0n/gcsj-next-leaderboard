import Image from "next/image";
import { Montserrat } from "next/font/google";
import Stats from "@/components/Stats";
import LeaderBoard from "@/components/LeaderBoard";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { MongoClient } from "mongodb";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home(props: any) {
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState<any>(null);
  const [completion, setCompletion] = useState({ genAi: 0, all: 0 });
  useEffect(() => {
    fetch("/api/db")
      .then((res) => res.json())
      .then((data) => {
        let genAi = 0,
          all = 0;

        data.dataArray.filter((student: any) => {
          if (student.allCompleted) all++;
          if (student.genAIbadges === 1) genAi++;
        });
        setCompletion({ genAi, all });
        const sortedData = data.dataArray.sort((a: any, b: any) => {
          const aBadges = a.skillBadges + a.genAIbadges + a.courseBadges;
          const bBadges = b.skillBadges + b.genAIbadges + b.courseBadges;
          if (aBadges > bBadges) return -1;
          if (aBadges < bBadges) return 1;
          if (aBadges === bBadges) {
            if (a.badgeDates < b.badgeDates) return -1;
            if (a.badgeDates > b.badgeDates) return 1;
          }
          return 0;
        });
        setStudentData(sortedData);
        console.log(sortedData);
        setLoading(false);
      });
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start py-16 md:py-24 md:px-12 px-4 ${montserrat.className}`}
    >
      <div className="md:text-5xl text-3xl font-bold text-center">
        Google Cloud Study Jam 2023
      </div>
      <div className="my-2 font-medium md:text-lg text-gray-300">
        by GDSC JGEC
      </div>
      {loading && (
        <div className="my-24 text-4xl text-center ">
          Loading
          <BarLoader color="white" className="mx-auto mt-8" />
        </div>
      )}
      {!loading && (
        <Stats
          allCompleted={completion.all}
          genaiCompleted={completion.genAi}
        />
      )}
      {!loading && <LeaderBoard data={studentData} />}
    </main>
  );
}
