import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';


const Section = ({ title, data }) => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ color: "black", fontSize: "17px", textAlign: "start", marginBottom: "5px" }}>{title}</Typography>
            <Typography sx={{ color: "gray", fontSize: "15px", textAlign: "start" }}>{data}</Typography>
        </Box>
    )
}



const Summary = () => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "white", p: "20px", borderRadius: "7px", gap: "20px" }}>
            <Section title="About" data="I am a UX / UI designer 💻 from Buenos Aires, Argentina, in constant training who also has experience in programming and advertising." />
            <Section title="Joined" data="November 15, 2015" />
            <Section title="Lives" data="Buenos Aires, Argentina" />
            <Section title="Email" data="uidesigner@outlook.com" />
            <Section title="Website" data="www.designer.com" />
        </Box>
    )
}


export default Summary;