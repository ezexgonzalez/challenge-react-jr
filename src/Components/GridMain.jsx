import Grid from '@mui/material/Unstable_Grid2';
import Summary from './Summary';
import SuggestedPages from './SuggestedPages';
import TwitterFeeds from './TwitterFeeds';
import Post from './Post';
import LatestPhotos from './LatestPhotos';
import { Posts } from "../assets/index";
import Suggestions from './Suggestions';
import Polls from './Polls';
import { Box, Button } from "@mui/material";

const GridMain = () => {

    return (
        <Grid container spacing={3} sx={{ marginTop: "10px" }}>
            {/* LEFT */}
            <Grid xs sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <Summary />
                <SuggestedPages />
                <TwitterFeeds />
            </Grid>
            {/* MIDDLE */}
            <Grid xs={6} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {
                    Posts ? Posts.map((data, i) => (
                        <Post name={data.name} key={i + 32} date={data.date} comments={data.comments} image={data.image} text={data.text} avatar={data.avatar} share={data.share} likes={data.likes} amountComments={data.ammountComments} />
                    )) : null
                }
                <Box>
                    <Button sx={{ backgroundColor: "#7367f0", boxShadow: "0px 0px 9px 0px #7367f0", textTransform: "none", transition: "200ms", p: "7px 25px", '&:hover': { backgroundColor: '#7367f0', boxShadow: "0px 0px 14px 0px #7367f0", opacity: ".9" } }} variant="contained">Load More</Button>
                </Box>
            </Grid>
            {/* RIGHT */}
            <Grid xs sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <LatestPhotos />
                <Suggestions />
                <Polls />
            </Grid>
        </Grid>
    )

}

export default GridMain;