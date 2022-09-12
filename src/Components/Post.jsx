import { Box } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TextField from '@mui/material/TextField';
import { Avatars } from "../assets";
import Button from '@mui/material/Button';


const Comment = ({ avatar, name, comment, likes }) => {

    return (
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <Avatar alt={name} src={avatar} sx={{ marginRight: "10px" }} />
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "start" }}>
                <Typography>{name}</Typography>
                <Typography sx={{ fontSize: "15px", color: "gray" }}>{comment}</Typography>
            </Box>
            <Checkbox
                sx={{ marginLeft: "auto" }}
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
            />
            <Typography sx={{ marginTop: "10px", color: "gray" }}>{likes}</Typography>
        </Box>
    )
}


const Post = ({ text, avatar, name, date, comments, image, likes, amountComments, share }) => {

    return (
        <Box sx={{ backgroundColor: "white", display: "flex", flexDirection: "column", borderRadius: "5px", p: "20px" }}>
            <Box sx={{ display: "flex" }}>
                <Avatar alt={name} src={avatar} />
                <Box sx={{ display: "flex", flexDirection: "column", textAlign: "start", marginLeft: "15px" }}>
                    <Typography sx={{ fontSize: "16px" }}>{name}</Typography>
                    <Typography sx={{ fontSize: "14px", color: "gray" }}>{date}</Typography>
                </Box>
            </Box>
            <Typography sx={{ textAlign: "start", margin: "10px 0px" }}>{text}</Typography>
            {
                image ? <Box component="img" alt={name} src={image} sx={{ borderRadius: "5px" }} /> : null
            }
            <Box sx={{ display: "flex", alignItems: "center", margin: "10px 0px 0px 0px", width: "100%" }}>
                <Checkbox
                    icon={<FavoriteBorderIcon />}
                    checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
                />
                <Typography sx={{ color: "gray" }}>{likes}</Typography>
                <AvatarGroup max={6} sx={{ marginLeft: "10px" }} >
                    {
                        Avatars ? Avatars.map((data, i) => (
                            <Avatar key={i} alt={data.name} src={data.avatar} sx={{ width: "30px", height: "30px" }} />
                        )) : null
                    }
                </AvatarGroup>
                <Typography sx={{ color: "gray", marginLeft: "5px" }}>+140 more</Typography>
                <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
                    <ChatBubbleOutlineIcon sx={{ color: "gray", width: "20px", height: "20px", marginRight: "5px" }} />
                    <Typography sx={{ color: "gray", marginRight: "10px" }}>{amountComments}</Typography>
                    <ShareOutlinedIcon sx={{ color: "gray", width: "20px", height: "20px" }} />
                    <Typography sx={{ color: "gray", marginLeft: "5px" }}>{share}</Typography>
                </Box>
            </Box>
            {/* COMMENTS */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "15px" }}>
                {
                    comments ? comments.map((data, i) => (
                        <Comment key={i} avatar={data.avatar} name={data.name} comment={data.comment} likes={data.likes} />
                    )) : null
                }
            </Box>
            <TextField sx={{ marginTop: "20px" }} placeholder="Add Comment" />
            <Button sx={{ backgroundColor: "#7367f0", width: "150px", marginTop: "20px", boxShadow: "0px 0px 9px 0px #7367f0", textTransform: "none", transition: "200ms", p: "7px 25px", '&:hover': { backgroundColor: '#7367f0', boxShadow: "0px 0px 14px 0px #7367f0", opacity: ".9" } }} variant="contained">Post Comment</Button>
        </Box>
    )
}

export default Post;