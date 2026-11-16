const ConversationChannelsSection = () => {
  return (
    <section className="p-6 py-18 lg:px-16 lg:py-22">
      <div className=" md:w-[50vw] mx-auto gap-8 md:gap-6 text-center xl:gap-0 mb-8">
        <p className="text-[4vw] md:text-[1.5vw] font-Oswald font-semibold mb-2 tracking-wide">
          CONVERSATIONS & AUDIO
        </p>
        <h2 className="text-[6vw]  md:text-[3.2vw]  font-Oswald font-bold uppercase leading-7 lg:leading-12 xl:leading-18 mb-2">
          Listen to the conversation
        </h2>
        <p className="text-[3.5vw] md:text-[1.3vw] lg:text-[1.4vw] font-Instrument mb-3 md:mb-4 xl:mb-10">
          Take the conversation with you. Explore audio teachings, interviews
          and conversations you can listen to wherever you are.
        </p>
      </div>
      <div className="md:w-[50vw] mx-auto mb-8">
        <div className="flex flex-row  justify-between items-center mb-8">
          <a href="#">
            <img
              src="./images/logos/sportify.png"
              alt="Sportify Logo"
              className="w-[14vw] md:w-[8vw] "
            />
          </a>
          <a href="#">
            <img
              src="./images/logos/apple-podcast.png"
              className="w-[14vw] md:w-[8vw] "
              alt="Apple Podcast Logo"
            />
          </a>
          <a href="#">
            <img
              src="./images/logos/youtube.png"
              alt="Youtube Logo"
              className="w-[14vw] md:w-[8vw] border border-gray-200"
            />
          </a>
          <a href="#">
            <img
              src="./images/logos/audio-mack.png"
              alt="Audio Mack Logo"
              className="w-[14vw] md:w-[8vw] border border-gray-200"
            />
          </a>
        </div>
        <div className="flex flex-row  justify-between items-center">
          <a href="#">
            <img
              src="./images/logos/sportify.png"
              alt="Sportify Logo"
              className="w-[14vw] md:w-[8vw] "
            />
          </a>
          <a href="#">
            <img
              src="./images/logos/apple-podcast.png"
              className="w-[14vw] md:w-[8vw] "
              alt="Apple Podcast Logo"
            />
          </a>
          <a href="#">
            <img
              src="./images/logos/youtube.png"
              alt="Youtube Logo"
              className="w-[14vw] md:w-[8vw] border border-gray-200"
            />
          </a>
          <a href="#">
            <img
              src="./images/logos/audio-mack.png"
              alt="Audio Mack Logo"
              className="w-[14vw] md:w-[8vw] border border-gray-200"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConversationChannelsSection;
