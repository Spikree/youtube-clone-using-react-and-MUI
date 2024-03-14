import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChanelCard from "./ChannelCard";

function Videos({ videos }) {
  return (
    <>
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, index) => (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChanelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </>
  );
}

export default Videos;
