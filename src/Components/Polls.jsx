import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import { PollData } from "../assets";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import LinearProgress from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Option = ({ value, percent, avatars }) => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <FormControlLabel sx={{}} value={value} control={<Radio sx={{
                    '&.Mui-checked': {
                        color: "#7367f0",
                    }
                }} />} label={value} />
                <Typography sx={{ color: "gray" }}>{percent}%</Typography>
            </Box>
            <LinearProgress variant="determinate" sx={{
                borderRadius: "5px", height: "8px", "& .MuiLinearProgress-bar": {
                    backgroundColor: "#7367f0", borderRadius: "5px"
                },
                backgroundColor: "#eeedfd"
            }}

                value={percent} />
            <AvatarGroup sx={{ display: "flex", marginTop: "10px", justifyContent: "left" }}>
                {
                    avatars ? avatars.map((data, i) => (
                        <Avatar alt={`avatar${i}`} key={i + 90} src={data} sx={{ width: "25px", height: "25px" }} />
                    )) : null
                }

            </AvatarGroup>
        </Box>
    )
}

const Polls = () => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "white", p: "20px", borderRadius: "7px" }}>
            <Typography sx={{ color: "black", fontSize: "17px", textAlign: "start", marginBottom: "10px" }}>Polls</Typography>
            <Typography sx={{ textAlign: "start", color: "gray" }}>{PollData.text}</Typography>
            <FormControl>
                <RadioGroup
                    name="radio-buttons-group"
                >
                    {
                        PollData.options ? PollData.options.map((data, i) => (
                            <Option key={i + 55} value={data.option} percent={data.percent} avatars={data.avatars} />
                        )) : null
                    }
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default Polls;