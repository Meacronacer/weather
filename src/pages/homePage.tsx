import { Box } from '@mui/material'
import CardItem from '../components/card/card'
import Weather from '../components/weather/weather'

const HomePage = () => {
    return <Box sx={{ display: 'flex', margin: 'auto', columnGap: '20px'}} >
        <Weather/>
        <CardItem/>
    </Box>
}

export default HomePage