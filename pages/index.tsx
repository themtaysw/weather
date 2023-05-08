import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Button from "../components/Button"
import useWeather from "../hooks/useWeather"
import PageHead from "../components/base/PageHead"
import Loading from "../components/Loading"
import LargeText from "../components/LargeText"
import DateInput from "../components/DateInput"
import TextInput from "../components/TextInput"
import WeatherData from "../components/WeatherData"
import MainBox from "../components/MainBox"

const Home = () => {
    const [date, setDate] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const { getWeatherData, data, loading } = useWeather({ date, location })

    return (
        <>
            <PageHead />
            <div className="grid w-full h-screen grid-rows-2">
                <MainBox>
                    <div className="w-full h-full bg-opacity-70 lg:bg-opacity-20 backdrop-blur-lg flex items-center justify-center flex-col rounded-bl-[3rem] rounded-br-[3rem] lg:rounded-[3rem]">
                        <LargeText initial={{ y: -20 }} animate={{ y: 0 }}>SUNset/rise</LargeText>
                        <motion.div className="flex flex-col w-5/6 gap-4 lg:w-auto lg:flex-row">
                            <DateInput
                                date={date}
                                setDate={setDate}
                            />
                            <TextInput
                                data={location}
                                setData={setLocation}
                                required
                            />
                            <Button
                                text="Get Weather"
                                isLoading={loading}
                                getWeatherData={getWeatherData}
                            />
                        </motion.div>
                    </div>
                </MainBox>
                {!loading ? data &&
                    <div className="flex flex-col items-center justify-center w-full">
                        <WeatherData
                            image={<Image src="/sunrise.png" alt="me" width="50" height="50" title="Sunrise" />}
                            data={data.sunrise}
                        />
                        <WeatherData
                            image={<Image src="/sunset.png" alt="me" width="50" height="50" title="Sunset" />}
                            data={data.sunset}
                        />
                    </div>
                    :
                    <Loading />
                }
            </div>
        </>
    )
}

export default Home
