const Newsletter = () => {
  return (
    <div className="p-4 py-10 md:p-30 lg:px-40 xl:px-60">
      <div className="bg-[url('/images/newsletter_photo.png')] bg-no-repeat bg-cover h-50 md:h-80 xl:h-160 rounded-t-4xl"></div>
      <div className="bg-black rounded-b-4xl p-4 md:p-8 xl:px-15 py-8 md:py-12 lg:py-20">
        <h2 className="text-white text-[6vw]  md:text-[3.5vw] xl:text-[3vw] font-Oswald font-semibold uppercase leading-6 md:leading-8 lg:leading-12 xl:leading-18 mb-4 md:mb-4 text-center ">
          2 Million Readers. <br />1 Life-Changing Newsletter.
        </h2>
        <p className="text-white text-center text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] mb-8">
          Simple, inspiring and direct.
        </p>
        <form action="" method="post" className="text-center">
          <div className="flex flex-col md:flex-row gap-4 md:mb-4">
            <input
              type="text"
              className="w-full rounded-md bg-white text-text-dark mb-2 p-2 md:p-2 lg:p-3 outline-0"
              placeholder="Full Name*"
            />
            <input
              type="email"
              className="w-full rounded-md bg-white text-text-dark p-2 md:p-2 lg:p-3 outline-0 mb-2"
              placeholder="Email Address*"
            />
          </div>
          <p className="text-white text-center text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] my-2 md:mb-4">
            Yes! Sign me up for Tunde Adisa's Newsletter. In doing so, I agree
            to the Privacy Policy and Terms of Use.
          </p>
          <input
            type="submit"
            className="w-full md:w-60 lg:w-80 rounded-md bg-white text-text-dark p-2 lg:p-3 xl:p-4"
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
