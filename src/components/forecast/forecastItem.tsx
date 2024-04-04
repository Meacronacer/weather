import { Typography, Grid } from "@mui/material"
import { getWeatherIcon } from "../weather/weatherIcons";

interface IforecastItem {
    weather_code: number
    temperature_2m: number
    time: string
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const ForecastItem: React.FC<IforecastItem> = ({weather_code, temperature_2m, time}) => {

    const day = days[new Date(time).getDay()]

    return <Grid item xs={4} md={2} display='flex' flexDirection='column' rowGap='20px' alignItems='center'>
        <Typography fontSize='13px'>
            {day}
        </Typography>
        {getWeatherIcon(weather_code)}
        <Typography>
            {temperature_2m}°
        </Typography>
    </Grid>
}


export default ForecastItem