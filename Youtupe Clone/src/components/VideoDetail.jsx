import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { fetchFromApi } from "../utils/fetchData";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import VideoItem from "./VideoItem";

function VideoDetail() {

    const [videoDeltail, setVideo] = useState();
    const [Videos, setVideos] = useState(null);
    const { id } = useParams();

    useEffect(function () {
        fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideo(data.items[0]));

        fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items))
    }, [id]);

    if (!videoDeltail?.snippet || !Videos) return <div className="bg-gray-900 text-white border-t-2 border-r-2 border-gray-600 p-5 text-center text-[50px]" >Loading...</div>;
    return (
        <div className="bg-gray-900 text-white border-t-2 border-r-2 border-gray-600 p-5">
            <div className="lg:justify-between lg:flex ">
                <div className="w-[100%]">
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width="100%" height="70vh" controls></ReactPlayer>
                    <div>
                        <div>
                            <p className="text-[30px]">{videoDeltail.snippet.title}</p>
                            <Link to={`/channel/${videoDeltail.snippet.channelId}`} className="text-gray-300">{videoDeltail.snippet.channelTitle}</Link>
                            <div className="flex justify-between w-[95%]">
                                <p>
                                    {parseInt(videoDeltail.statistics.viewCount).toLocaleString()} views
                                </p>
                                <p>
                                    {parseInt(videoDeltail.statistics.likeCount).toLocaleString()} likes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 m-5">
                    {Videos.map((item) =>
                        <div>
                            {item.id.videoId && <VideoItem video={item}></VideoItem>}
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default VideoDetail
