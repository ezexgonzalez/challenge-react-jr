import Typography from '@mui/material/Typography';
import Banner from "../assets/banner.jpg";
import Box from '@mui/material/Box';
import Avatar1 from "../assets/avatar1.jpg";
import Button from '@mui/material/Button';


const styles = {
    boxContainer: {
        backgroundImage: `url(${Banner})`
    }
};

const Head = () => {

    return (
        <Box sx={{ backgroundColor: "white", borderRadius: "5px 5px 5px 5px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <Box style={styles.boxContainer} sx={{ width: "100%", height: "300px", color: "white", backgroundPosition: "center", backgroundSize: "cover", borderRadius: "5px 5px 0px 0px", display: "flex", alignItems: "flex-end", position: "relative" }}>
                <Box component="img" src={Avatar1} alt="avatar" sx={{ width: "100px", height: "100px", borderRadius: "3px", outline: "5px solid white", position: "absolute", bottom: "-20px", left: "40px", boxShadow: "-1px 5px 25px -3px rgba(0,0,0,0.32)" }} />
                <Box sx={{ marginLeft: "170px", textAlign: "start", marginBottom: "10px" }}>
                    <Typography sx={{ fontSize: "23px", fontWeight: "500" }}>Kitty Allanson</Typography>
                    <Typography>UI/UX Designer</Typography>
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "60px", display: "flex", alignItems: "center", gap: "20px" }}>
                <Button sx={{ backgroundColor: "#7367f0", marginLeft: "170px", boxShadow: "0px 0px 9px 0px #7367f0", textTransform: "none", transition: "200ms", p: "7px 25px", '&:hover': { backgroundColor: '#7367f0', boxShadow: "0px 0px 14px 0px #7367f0", opacity: ".9" } }} variant="contained">Feed</Button>
                <Button variant="text" sx={{ textTransform: "none", color: "gray", "&:hover": { color: "black" } }}>About</Button>
                <Button variant="text" sx={{ textTransform: "none", color: "gray", "&:hover": { color: "black" } }}>Photos</Button>
                <Button variant="text" sx={{ textTransform: "none", color: "gray", "&:hover": { color: "black" } }}>Friends</Button>
                <Button sx={{ backgroundColor: "#7367f0", marginLeft: "auto", marginRight: "15px", boxShadow: "0px 0px 9px 0px #7367f0", textTransform: "none", transition: "200ms", p: "7px 25px", '&:hover': { backgroundColor: '#7367f0', boxShadow: "0px 0px 14px 0px #7367f0", opacity: ".9" } }} variant="contained">Edit</Button>
            </Box>
        </Box>
    )
}


export default Head;