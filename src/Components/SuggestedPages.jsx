import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Avatars } from "../assets/index";
import Checkbox from '@mui/material/Checkbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';


const Page = ({ alt, src, name, category }) => {

    return (
        <Box sx={{ display: "flex" }}>
            <Avatar alt={alt} src={src} />
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "start", marginLeft: "15px" }}>
                <Typography sx={{ fontSize: "16px" }}>{name}</Typography>
                <Typography sx={{ fontSize: "14px", color: "gray" }}>{category}</Typography>
            </Box>
            <Checkbox
                icon={<StarBorderIcon sx={{ color: "gray" }} />}
                checkedIcon={<StarIcon sx={{ color: "#ff9f43" }} />}
                sx={{ marginLeft: "auto" }}
            />
        </Box>
    )
}


const SuggestedPages = () => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "white", p: "20px", borderRadius: "7px", gap: "20px" }}>
            <Typography sx={{ color: "black", fontSize: "17px", textAlign: "start", marginBottom: "5px" }}>Suggested Pages</Typography>
            {
                Avatars ? Avatars.map((data, i) => (
                    <Page key={i} alt={`avatar${i}`} src={data.avatar} name={data.name} category={data.category} />
                )) : null
            }
        </Box>
    )
}


export default SuggestedPages;