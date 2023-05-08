import { useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import { apiUrl } from "../utils/config";
import { WeatherResponse } from "../types/Weather";

type Props = {
    location: string;
    date: string;
}

const apiKey: string = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

const useWeather = (props: Props) => {
    const [data, setData] = useState<WeatherResponse>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getWeatherData = async () => {
        if (isEmpty(props.location) || isEmpty(props.date)) alert("Please fill out all fields!")
        if (!isEmpty(props.location) && !isEmpty(props.date)) {
            try {
                setLoading(true)
                const { data } = await axios.get(
                    `${apiUrl}?apiKey=${apiKey}&location=${props.location}&date=${props.date}`
                )
                if (data) setData(data)
            }
            catch (e) {
                console.log(e)
            }
            finally {
                setLoading(false)
            }
        }
    }

    return { getWeatherData, data, loading }
};

export default useWeather;
