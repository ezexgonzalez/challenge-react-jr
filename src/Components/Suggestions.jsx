import { Box } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { SuggestedData } from "../assets";
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const Profile = ({ name, friends, avatar }) => {

    return (
        <Box sx={{ display: "flex" }}>
            <Avatar alt={name} src={avatar} />
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "start", marginLeft: "10px" }}>
                <Typography sx={{ fontSize: "15px" }}>{name}</Typography>
                <Typography sx={{ fontSize: "13px", color: "gray" }}>{friends} Mutual Friends</Typography>
            </Box>
            <Button sx={{ backgroundColor: "#7367f0", marginLeft: "auto", boxShadow: "0px 0px 9px 0px #7367f0", minWidth: "40px", height: "40px", textTransform: "none", transition: "200ms", p: "0px", '&:hover': { backgroundColor: '#7367f0', boxShadow: "0px 0px 14px 0px #7367f0", opacity: ".9" } }} variant="contained">
                <PersonAddAltIcon sx={{ width: "20px", height: "20px" }} />
            </Button>
        </Box>
    )
}

const Suggestions = () => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "white", p: "20px", borderRadius: "7px", gap: "20px" }}>
            <Typography sx={{ color: "black", fontSize: "17px", textAlign: "start", marginBottom: "5px" }}>Suggestions</Typography>
            {
                SuggestedData ? SuggestedData.map((data, i) => (
                    <Profile name={data.name} key={i + 12} friends={data.friends} avatar={data.avatar} />
                )) : null
            }
        </Box>
    )
}

export default Suggestions;  