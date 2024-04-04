import { Box, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/hooks'
import { useGetWeatherQuery } from '../../redux/api/weatherApi'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Forecast from '../forecast/forecast';
import {wmoCodes} from '../waetherCodes'
import { getWeatherIcon } from './weatherIcons';
import Navbar from '../navbar/navbar';


const Weather = () => {

    const {longitude, latitude} = useAppSelector(state => state.userSlice.location.coordinates)
    const {location} = useAppSelector(state => state.userSlice)
    const {data, isLoading} = useGetWeatherQuery({longitude, latitude}, { skip: !!!longitude })

    if (isLoading) return null
    
    const date_time = data && new Date(data.current.time).toLocaleDateString()


    return <Box sx={{width: '600px',
            height: '600px',
            background: 'radial-gradient(circle at 10% 20%, rgb(59, 149, 237) 0%, rgb(7, 91, 173) 90%);',
            borderRadius: '6px'
            }} >
            <Navbar />
            <Box>
                <Typography sx={{ textAlign: 'center', mt: '20px'}} color='#fefefe' >
                    {date_time}
                </Typography>
                <Typography variant='h5' sx={{ textAlign: 'center', mt: '20px'}} color='#fefefe'>
                    {location.city}
                </Typography>
                <Typography variant='h6' sx={{textAlign: 'center', mt: '20px', opacity: '0.8'}} color='#fefefe'>
                    {wmoCodes[data?.current?.weather_code]}
                </Typography>

                <Box paddingInline='10px' display='flex' mt='20px' alignItems='center' justifyContent='space-between'>
                    <Box ml='20px'>
                        {getWeatherIcon(Number(data?.current?.weather_code))}
                    </Box>

                    <Typography variant='h4' ml='50px' textAlign='center' alignItems='center' color='#fefefe'>
                        {data?.current?.temperature_2m}{data?.hourly_units?.temperature_2m}
                    </Typography>

                    <Box sx={{display: 'flex', flexDirection: 'column'}} color='#ffff'>
                        <Typography display='flex' alignItems='center' fontSize='13px' variant='body2'>
                            <DeviceThermostatIcon fontSize='small' /> Real fell {(data?.current?.temperature_2m - 2).toFixed(1)}°
                        </Typography>
                        <Typography display='flex' alignItems='center'  fontSize='13px' variant='body2'>
                            <WaterDropIcon fontSize='small' /> humidity {data?.current?.relative_humidity_2m}%
                        </Typography>
                        <Typography display='flex' alignItems='center'  fontSize='13px' variant='body2'>
                            <AirIcon fontSize='small' /> {data?.current?.wind_speed_10m} km/h
                        </Typography>
                    </Box>
                </Box>

                <Box display='flex' columnGap='10px' justifyContent='center' mt='20px' color='#fefefe'>
                    <Typography fontSize='13px' display='flex' alignItems='center' columnGap='5px'>
                        <WbSunnyIcon /> Rise: 04:50 AM
                    </Typography>
                    |
                    <Typography fontSize='13px' display='flex' alignItems='center' columnGap='5px'>
                        <WbTwilightIcon /> Set: 09:06 PM
                    </Typography>
                    |
                    <Typography fontSize='13px' display='flex' alignItems='center' columnGap='5px'>
                        <ArrowUpwardIcon /> High {data?.daily?.temperature_2m_max[0]}°
                    </Typography>
                    |
                    <Typography fontSize='13px' display='flex' alignItems='center' columnGap='5px'>
                        <ArrowDownwardIcon /> LOW {data?.daily?.temperature_2m_min[0]}°
                    </Typography>
                </Box>

                <Box display='flex' flexDirection='column' alignItems='center' mt='20px' color='#fff'>
                    <Typography mb='5px' mr='355px' >DAILY FORECAST</Typography>
                    <Box width='500px' mb='10px' borderBottom='1px solid'></Box>
                    <Forecast 
                     weather_code={data?.daily?.weather_code}
                     temperature_2m_max={data?.daily?.temperature_2m_max}
                     temperature_2m_min={data?.daily?.temperature_2m_min}
                     time={data?.daily?.time}
                     />
                </Box>

            </Box>

        </Box>

}

export default Weather