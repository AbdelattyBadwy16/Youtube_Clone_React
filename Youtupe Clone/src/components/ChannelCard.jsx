import { Link } from "react-router-dom";
import Videos from "./Videos";

function ChannelCard({channel}) {
    const {snippet} =channel;
   
    return (
        <Link to={channel.id.channelId ? `/channel/${channel.id.channelId}` : ""} className="text-center">
        <div className="bg-gray-800 flex flex-col items-center p-9" >
            <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} className="rounded-full w-[300px] "></img>
            {snippet?.thumbnails?.high?.url ? "" : <p>Error</p>}
            <div className="p-5">
                <p>{snippet?.title}</p>
            </div>
        </div>
    </Link>
    )
}

export default ChannelCard
