import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://avatars3.githubusercontent.com/u/63988114?s=460&u=1dfc4cc474ab100d82e36f1144a5f005efbc0853&v=4"
        message="Wow this works!"
        timestamp="This is timestamp"
        username="arqia"
        image="https://www.telegraph.co.uk/content/dam/Travel/2018/August/adults%20iStock-672425798-xlarge.jpg"
      />

      <Post
        profilePic="https://avatars3.githubusercontent.com/u/63988114?s=460&u=1dfc4cc474ab100d82e36f1144a5f005efbc0853&v=4"
        message="Wow this works!"
        timestamp="This is timestamp"
        username="arqia"
        image="https://www.telegraph.co.uk/content/dam/Travel/2018/August/adults%20iStock-672425798-xlarge.jpg"
      />
    </div>
  );
}

export default Feed;
