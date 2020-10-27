import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.pinimg.com/originals/e8/cb/b9/e8cbb926ce264ed0867fe43dd7c3ef19.jpg"
        profileSrc="https://avatars3.githubusercontent.com/u/63988114?s=460&u=1dfc4cc474ab100d82e36f1144a5f005efbc0853&v=4"
        title="Arqi Alfaritsi"
      />
      <Story
        image="https://i.pinimg.com/736x/57/ef/6c/57ef6cea9b2d4ccceeb4d45d0267412f.jpg"
        profileSrc="https://avatars3.githubusercontent.com/u/68628662?s=460&u=584ec7adb3b1c8e52e22bc7ea59932071f1c6d25&v=4"
        title="Arif Rahman"
      />
      <Story
        image="https://i.pinimg.com/originals/71/09/c3/7109c335e05aabe421ca6727ee425248.jpg"
        profileSrc="https://avatars3.githubusercontent.com/u/58078070?s=460&u=2bd92c36a3400d5523909fc8319025a703a68461&v=4"
        title="Bagas Afrizal"
      />
      <Story
        image="https://i.pinimg.com/originals/af/a6/91/afa691e3278b4f808277f402670bee25.jpg"
        profileSrc="https://avatars1.githubusercontent.com/u/66796874?s=460&u=9923d61a23f9bb11683c3f5c523387b87a41c455&v=4"
        title="Dimas Prayoga"
      />
      <Story
        image="https://i.pinimg.com/originals/09/1b/e3/091be35a86d52ef7f10814ee339e437b.jpg"
        profileSrc="https://avatars0.githubusercontent.com/u/40691793?s=460&u=c7e55f304f17695ffdb22a405aa530b9b9e268a7&v=4"
        title="Galuh Prahadi"
      />
    </div>
  );
}

export default StoryReel;
