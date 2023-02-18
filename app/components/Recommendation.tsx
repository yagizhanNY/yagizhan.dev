"use client";
"use client";

import Music from "./Music";
import Podcast from "./Podcast";

export default function Recommendation() {
  return (
    <div className="flex flex-col w-full justify-center max-w-xl">
      <p className="my-2 text-gray-400">Recommendations</p>
      <h3 className="text-lg font-bold mb-2">Music 🎵</h3>
      <Music
        publishedDate="5 Mar. 2016"
        trackName="Fordham Spring Weekend Audition 2"
        trackLink="https://soundcloud.com/ya-zhan-necat-yakali/sets/recommendations?si=549674ab17c246c69d35173d5a9f1505&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        icon="soundcloud"
      ></Music>
      <Music
        publishedDate="24 April 2012"
        trackName="The Hobbit - Over The Misty Mountains Cold"
        trackLink="https://soundcloud.com/kieren-leonardo-hovasapian/the-hobbit-over-the-misty?in=ya-zhan-necat-yakali/sets/recommendations&si=ef9efb643e574cfe8545bb718278d321&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        icon="soundcloud"
      ></Music>
      <Music
        publishedDate="01 Dec. 2022"
        trackName="Shaun Farrugia - Dear God"
        trackLink="https://music.youtube.com/watch?v=s3FAw63hmQ8&feature=share"
        icon="youtube"
      ></Music>

      <h3 className="text-lg font-bold my-2">Podcast 🎙</h3>

      <Podcast
        podcastName="Barış Özcan ile 111 Hz (for my Turkish friends 😉)"
        podcastLink="https://open.spotify.com/show/5NbxzMRbuun0SIOh7GKMbk?si=a7439d19603a4c9f"
        icon="spotify"
      ></Podcast>

      <hr className="my-10" />
    </div>
  );
}
