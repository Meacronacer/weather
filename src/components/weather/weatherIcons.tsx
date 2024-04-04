import { IoIosSunny } from "react-icons/io";
import { CiCloudOn } from "react-icons/ci";
import { BsCloudDrizzle, BsCloudSnow  } from "react-icons/bs";
import { TbCloudRain } from "react-icons/tb";
import { IoThunderstormOutline } from "react-icons/io5";

export const getWeatherIcon = (weatherCode:number) => {

    if ([0,1,2,3].includes(weatherCode)) {
        return < IoIosSunny color="#FFBF00" size={50} />
    } else if (4 === weatherCode) {
        return < CiCloudOn color='#fff' />
    } else if ([51,52,53,54,55,56,57].includes(weatherCode)) {
        return < BsCloudDrizzle color='#fff' size={50} />
    } else if ([61,62,63,64,65,66,67,80,81,82].includes(weatherCode)) {
        return < TbCloudRain color='#fff'  size={50}/>
    } else if ([71,72,73,74,75,76,77,85,86].includes(weatherCode)) {
        return <BsCloudSnow color='#fff' size={50} />
    } else if ([95,96,99].includes(weatherCode)) {
        return < IoThunderstormOutline color='#fff' size={50} />
    }
}