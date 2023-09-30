import { useEffect, useState } from "react"
import { fetchFromApi } from "../utils/fetchData"
import VideoItem from "./VideoItem";
import ChannelCard from "./ChannelCard";
import { useParams } from "react-router";
function SearchFeed() {
    const [Videos, setVideos] = useState([]);
    const {searchTerm} = useParams();
    useEffect(function () {
        fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));

    }, [searchTerm])

    return (
        <div className="bg-gray-900 text-white border-t-2 border-gray-600">
            <h1 className="text-[30px] italic font-bold m-8">Search result for: <span className="text-red-500">{searchTerm}</span></h1>
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

export default SearchFeed;
