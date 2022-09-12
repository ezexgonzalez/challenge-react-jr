import Container from '@mui/material/Container';
import Head from "../Components/Head";
import GridMain from '../Components/GridMain';
import OptionsButton from '../Components/OptionsButton';


const Home = () => {

    return (
        <Container maxWidth="lg" sx={{ width: "100%", minHeight: "100vh", paddingTop: "20px", position: "relative" }}>
            <OptionsButton />
            <Head />
            <GridMain />
        </Container>
    )

}

export default Home;