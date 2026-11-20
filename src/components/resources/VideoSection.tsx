import { assetUrl } from "../../lib/assets";

const VideoSection = () => {
  return (
    <div className="bg-black p-2 py-8 md:p-10 flex justify-center">
        <img src={assetUrl("/images/video_cover.png")} alt="Video Cover Photo"  />
    </div>
  )
}

export default VideoSection