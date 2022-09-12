import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { FeedData } from "../assets";

const Feeds = ({ name, user, alt, src, feed, hashtags }) => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex" }}>
                <Avatar alt={alt} src={src} />
                <Box sx={{ display: "flex", flexDirection: "column", textAlign: "start", marginLeft: "15px" }}>
                    <Typography sx={{ fontSize: "16px" }}>{name}</Typography>
                    <Typography sx={{ fontSize: "14px", color: "#d3d3d3", display: "flex", alignItems: "center" }}>{user} <VerifiedOutlinedIcon sx={{ width: "17px", height: "17px", marginLeft: "5px", color: "#7367f0" }} /></Typography>
                </Box>
                <Checkbox
                    icon={<StarBorderIcon sx={{ color: "gray" }} />}
                    checkedIcon={<StarIcon sx={{ color: "#ff9f43" }} />}
                    sx={{ marginLeft: "auto" }}
                />
            </Box>
            <Typography sx={{ textAlign: "start", m: "10px 0px" }}>{feed}</Typography>
            <Box sx={{ display: "flex", gap: "5px" }}>
                {
                    hashtags ? hashtags.map((data, i) => (
                        <Typography sx={{ color: "#7367f0" }} key={i + 10}>{data}</Typography>
                    )) : null
                }
            </Box>
        </Box>
    )
}


const TwitterFeeds = () => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "white", p: "20px", borderRadius: "7px", gap: "20px" }}>
            <Typography sx={{ color: "black", fontSize: "17px", textAlign: "start", marginBottom: "5px" }}>Twitter Feeds</Typography>
            {
                FeedData ? FeedData.map((data, i) => (
                    <Feeds name={data.name} user={data.user} key={i} alt={`avatarFeed${i}`} src={data.avatar} feed={data.feed} hashtags={data.hashtags} />
                )) : null
            }
        </Box>
    )
}

export default TwitterFeeds