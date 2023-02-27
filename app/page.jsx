import LatestPost from "./components/LatestPost";
import Libraries from "./components/Libraries";
import Posts from "./components/Posts";
import Recommendation from "./components/Recommendation";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex flex-col justify-center items-center">
      <LatestPost></LatestPost>
      <Libraries></Libraries>
      <Recommendation></Recommendation>
      <Posts posts={posts}></Posts>
    </main>
  );
}

async function getPosts(){
  const isProd = process.env.NODE_ENV === 'production' ? true : false;
  const apiUrl = isProd ? process.env.PROD_API_URL : process.env.DEV_API_URL;
  const response = await fetch(apiUrl + '/api/posts', {
    method: 'GET',
    cache: 'no-store'
  })
  return await response.json();
}
