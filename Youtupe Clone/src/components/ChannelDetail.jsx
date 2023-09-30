import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { fetchFromApi } from "../utils/fetchData";
import Videos from "./Videos";
import VideoItem from "./VideoItem";

function ChannelDetail() {
    const { id } = useParams();
    const [channelData, setChannelData] = useState(null);
    const [videos, setVideos] = useState([]);
    useEffect((function () {
        fetchFromApi(`channels?part="snippet&id=${id}`).then((data) => setChannelData(data));

        fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data) => setVideos(data));
    }), [id]);
    console.log(videos)
    return (
        <div className="bg-gray-900 text-white border-t-2 border-gray-600">
            <div style={{
                height: '300px',
                background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                zIndex: 10,
            }} />
            <div className="bg-gray-800 flex flex-col items-center p-9" >
                <div className="mt-[-200px]">
                    <img src={channelData?.items[0]?.snippet?.thumbnails?.high?.url} alt={channelData?.items[0]?.snippet.title} className="rounded-full w-[300px] "></img>
                    {channelData?.items[0]?.snippet?.thumbnails?.high?.url ? "" : <p>Error</p>}
                    <div className="p-5 flex flex-col items-center">
                        <p className="text-[30px]">{channelData?.items[0]?.snippet?.title}</p>
                        <p className="text-[15px] text-gray-400"> {parseInt(channelData?.items[0]?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {videos?.items?.map((item) =>
                    <div>
                        {item.id.videoId && <VideoItem video={item}></VideoItem>}
                    </div>)}
                {videos?.items?.map((item) =>
                    <div>
                        {item.id.videoId && <VideoItem video={item}></VideoItem>}
                    </div>)}
            </div>
        </div>
    )
}

export default ChannelDetail
