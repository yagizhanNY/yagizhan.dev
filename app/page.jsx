import { getServerSession } from "next-auth";
import LatestPost from "./components/LatestPost";
import Posts from "./components/Posts";
import Recommendation from "./components/Recommendation";

export default function Home() {
  getServerSession()
  .then(session => {
    console.log("MAIN PAGE SESSION: ", session);
  })
  return (
    <main className="flex flex-col justify-center items-center">
      <LatestPost></LatestPost>
      <Recommendation></Recommendation>
      <Posts></Posts>
    </main>
  );
}
