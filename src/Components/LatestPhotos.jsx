import { Box } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { Photos } from "../assets";
import Typography from '@mui/material/Typography';

const LatestPhotos = () => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "white", p: "20px", borderRadius: "7px" }}>
            <Typography sx={{ color: "black", fontSize: "17px", textAlign: "start", marginBottom: "10px" }}>Lastest Photos</Typography>
            <Grid container rowSpacing={2} columns={3} columnSpacing={4} sx={{ padding: "0px" }}>
                {
                    Photos ? Photos.map((data, i) => (
                        <Grid key={i + 50} xs={1} >
                            <Box component="img" sx={{ width: "60px", height: "60px", borderRadius: "5px", padding: "0px", objectFit:"cover" }} src={data} key={i} alt={i} />
                        </Grid>
                    )) : null
                }
            </Grid>
        </Box>
    )
}


export default LatestPhotos;