import { Box, Container } from '@mui/material'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/homePage';
import SavedUsers from '../components/savedUsers/savedUser';

const App = () => {

    return <Container sx={{ height:'100vh', alignItems: 'center', display: 'flex', flexDirection: 'column'}} >
        <Box sx={{ display: 'flex', margin: 'auto', columnGap: '20px'}} >
            <Routes>
                <Route path='/weather' element={ <HomePage />} />
                <Route path='/users' element={ <SavedUsers />} />
            </Routes>
        </Box>
    </Container>
}


export default App