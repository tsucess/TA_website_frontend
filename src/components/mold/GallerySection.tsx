const GalleryData = [
  {
    image_url: "/images/gallery_1.png",
  },
  {
    image_url: "/images/gallery_2.png",
  },
  {
    image_url: "/images/gallery_3.png",
  },
  {
    image_url: "/images/gallery_4.png",
  },
  {
    image_url: "/images/gallery_5.png",
  },
  {
    image_url: "/images/gallery_6.png",
  },
  {
    image_url: "/images/gallery_7.png",
  },
  {
    image_url: "/images/gallery_8.png",
  },
  {
    image_url: "/images/gallery_9.png",
  },
];

const GallerySection = () => {
  return (
    <div className="bg-white text-black p-6 py-18 md:px-16 lg:py-22">
      <div>
        <p className="text-[4vw] md:text-[1.5vw] font-Oswald mb-2">
          PHOTO / VIDEO ARCHIVE
        </p>
        <div className="flex flex-col md:flex-row justify-between items-baseline">
          <h2 className="text-[6.8vw]  md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-10 ">
            Moments from the journey.
          </h2>
          <a href="#" className="text-black hover:underline">
            VIEW MOLD GALLERY
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between  md:flex-wrap   ">
        {GalleryData.map((data, i) => (
          <div className="p-4 md:basis-1/3" key={i}>
            <img className="w-full rounded-2xl" src={data.image_url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
