import { useEffect, useState } from "react"
import { fetchFromApi } from "../utils/fetchData"
import VideoItem from "./VideoItem";
import ChannelCard from "./ChannelCard";
function Videos({ selectedCat, setSelctedCat }) {
    const [Videos, setVideos] = useState([]);
    useEffect(function () {
        fetchFromApi(`search?part=snippet&q=${selectedCat}`).then((data) => setVideos(data.items))
    }, [selectedCat])

    return (
        <div className="bg-gray-900 text-white border-t-2 border-gray-600 p-5">
            <h1 className="text-[30px] italic font-bold m-8">{selectedCat} <span className="text-red-500">Videos</span></h1>
            <div className="grid grid-cols-3 gap-5">
                {Videos.map((item) =>
                    <div>
                        {item.id.videoId && <VideoItem video={item}></VideoItem>}
                        {item.id.channelId && <ChannelCard channel={item}></ChannelCard>}
                    </div>)}
                {Videos.map((item) =>
                    <div>
                        {item.id.videoId && <VideoItem video={item}></VideoItem>}
                        {item.id.channelId && <ChannelCard channel={item}></ChannelCard>}
                    </div>)}
            </div>
        </div>
    )
}

export default Videos
