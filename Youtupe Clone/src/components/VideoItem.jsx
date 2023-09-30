import { Link } from "react-router-dom";


function VideoItem({ video }) {
    const { snippet } = video;

    return (
        <Link to={(video.id.videoId) ? `/video/${video.id.videoId}` : ""}>
            <div className="bg-gray-800 flex flex-col hover:w-[50]">
                <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title}></img>
                <div className="p-5">
                    <p>{snippet?.title}</p>
                </div>
                <Link to={snippet?.channelTitle || "" } className="p-5 text-gray-500">{snippet.channelTitle}</Link>
            </div>
        </Link>
    )
}

export default VideoItem
