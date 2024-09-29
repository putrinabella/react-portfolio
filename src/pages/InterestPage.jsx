import profileImage from "../assets/Profile.jpg";

const InterestPage = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-base-200">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mt-10">
          Let&apos;s Talk About Interests
        </h1>
        <div className="my-5 mx-10 lg:mx-80 md:mx-36">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Interviewer
              {/* <time className="text-xs opacity-50">12:45</time> */}
            </div>
            <div className="chat-bubble chat-bubble-warning">
              Tell me about something you&apos;re interested in.
            </div>
            {/* <div className="chat-footer opacity-50">Send</div> */}
          </div>
          <div className="chat chat-end mb-5">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={profileImage}
                />
              </div>
            </div>
            <div className="chat-header">Putri Nabella</div>
            <div className="chat-bubble chat-bubble-warning">
              Web Developer - As an aspiring web developer, I am constantly
              honing my skills by creating innovative and user-friendly
              websites.
            </div>
          </div>
          <div className="chat chat-end mb-5">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={profileImage}
                />
              </div>
            </div>
            <div className="chat-header">Putri Nabella</div>
            <div className="chat-bubble chat-bubble-warning">
              Online Course - I enrolled in an online course to deepen my
              understanding of programming languages and enhance my web
              development capabilities.
            </div>
          </div>
          <div className="chat chat-end mb-5">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={profileImage}
                />
              </div>
            </div>
            <div className="chat-header">Putri Nabella</div>
            <div className="chat-bubble chat-bubble-warning">
              Reading - I immerse myself in the captivating worlds of novels,
              particularly those that explore the depths of romance, the wonders
              of fantasy, and the thrill of action, finding solace and
              inspiration in every page.
            </div>
          </div>
          <div className="chat chat-end mb-5">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={profileImage}
                />
              </div>
            </div>
            <div className="chat-header">Putri Nabella</div>
            <div className="chat-bubble chat-bubble-warning">
              Listening to Music - I relish the art of music, often curating
              playlists on YouTube that accompany me from the moment I rise to
              the time I drift off to sleep, transforming my day into a melodic
              journey.
            </div>
          </div>
          <div className="chat chat-end mb-5">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={profileImage}
                />
              </div>
            </div>
            <div className="chat-header">Putri Nabella</div>
            <div className="chat-bubble chat-bubble-warning">
              Watching Movies - I indulge in the cinematic experience, where
              each film becomes a portal to new adventures and emotions,
              allowing me to escape reality and explore diverse narratives from
              the comfort of my couch.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestPage;
