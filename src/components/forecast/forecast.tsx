
import Grid from '@mui/material/Grid';
import ForecastItem from './forecastItem';

interface Iforecast {
    weather_code: Array<number>
    temperature_2m_max: Array<number>
    temperature_2m_min: Array<number>
    time: Array<string>
}


const Forecast:React.FC<Iforecast> = ({weather_code, temperature_2m_max, temperature_2m_min, time}) => {

    const items = weather_code && weather_code.map((_, index) => {

        const temperature = Number(((temperature_2m_max[index] + temperature_2m_min[index]) / 2).toFixed(2))

        return <ForecastItem key={index}
            weather_code={weather_code[index]}
            temperature_2m={temperature}
            time={time[index]}
        />
    })


    return <Grid container justifyContent='center' spacing={2}>
            {items}
    </Grid>
}


export default Forecast