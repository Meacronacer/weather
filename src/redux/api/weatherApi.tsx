import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.open-meteo.com/v1/forecast' }),
    endpoints: (builder) => ({
      getWeather: builder.query({
        query: ({longitude, latitude}) => ({
            url: `?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,rain,wind_speed_10m,showers,snowfall,weather_code&hourly=temperature_2m,relative_humidity_2m,rain,showers,snowfall,snow_depth,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,sunshine_duration&timezone=GMT&forecast_days=5`
        }),
      }),
    }),
  })
  

export const { useGetWeatherQuery } = weatherApi