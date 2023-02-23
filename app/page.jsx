import LatestPost from "./components/LatestPost";
import Posts from "./components/Posts";
import Recommendation from "./components/Recommendation";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <LatestPost></LatestPost>
      <Recommendation></Recommendation>
      <Posts></Posts>
    </main>
  );
}
