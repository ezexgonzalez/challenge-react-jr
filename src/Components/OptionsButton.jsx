import { Button } from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const OptionsButton = () =>{

    return(
        <Button sx={{ backgroundColor: "#7367f0",right:"0",top:"50px",position:"fixed", zIndex:"100" ,minWidth:"50px", height:"40px",borderRadius:"5px 0px 0px 5px" ,boxShadow: "0px 0px 9px 0px #7367f0", textTransform: "none", transition: "200ms", p: "0px", '&:hover': { backgroundColor: '#7367f0', boxShadow: "0px 0px 14px 0px #7367f0", opacity: ".9" } }} variant="contained">
            <SettingsOutlinedIcon sx={{width:"20px", height:"20pxx"}}/>
        </Button>
    )
}


export default OptionsButton;