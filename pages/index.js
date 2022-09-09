import { useState } from "react"
import axios from "axios"
import Head from "next/head"
import { motion } from "framer-motion"
import { isEmpty } from "lodash"
import Image from "next/image"

const Home = () => {
    const [date, setDate] = useState(null)
    const [location, setLocation] = useState(null)
    const [data, setData] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const key = "e1365237acaa426ab0aebac7e58a7879"

    const getWeatherData = async () => {
        if (isEmpty(location) || isEmpty(date)) alert("Please fill out all fields!")
        if (!isEmpty(location) && !isEmpty(date)) {
            try {
                setIsLoading(true)
                const { data } = await axios.get(`https://api.ipgeolocation.io/astronomy?apiKey=${key}&location=${location}&date=${date}`)
                if (data) setData(data)
                setIsLoading(false)
            }
            catch (e) {
                console.log(e)
                setIsLoading(false)
            }
        }
    }

    return (
        <>
            <Head>
                <title>Sunset/Sunrise</title>
            </Head>
            <div className={`w-full h-screen grid grid-rows-2`}>
                <div className="w-full lg:w-4/6 lg:m-6 justify-self-center rounded-bl-[3rem] rounded-br-[3rem] lg:rounded-[3rem] flex items-center justify-center flex-col bg-neutral-700 bg-[url('https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/altocumulus.jpg/altocumulus.jpg/metofficegovuk%3AheroXLarge')] bg-cover">
                    <div className="w-full h-full bg-opacity-70 lg:bg-opacity-20 backdrop-blur-lg flex items-center justify-center flex-col rounded-bl-[3rem] rounded-br-[3rem] lg:rounded-[3rem]">
                        <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }} className="text-5xl lg:text-8xl font-bold mb-12">SUNset/rise</motion.h1>
                        <motion.div className="w-5/6 lg:w-auto flex flex-col lg:flex-row gap-4">
                            <motion.input initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl py-2 lg:py-0 px-2 outline-sky-600 app" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                            <motion.input initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl py-2 lg:py-0 px-2 outline-sky-600" type="text" placeholder="Country" value={location} onChange={(e) => setLocation(e.target.value)} />
                            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} disabled={isLoading} className={`${isLoading && "cursor-wait"} px-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-600 transition-all duration-400`} onClick={() => getWeatherData()}>Show</motion.button>
                        </motion.div>
                    </div>
                </div>
                {!isLoading ? data &&
                    <div className="w-full flex items-center justify-center flex-col">
                        <div className="flex items-center gap-4">
                            <Image src="/sunrise.png" alt="me" width="50" height="50" title="Sunrise" />
                            <h1 className="text-4xl lg:text-3xl font-medium">{data.sunrise}</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src="/sunset.png" alt="me" width="50" height="50" title="Sunset" />
                            <h1 className="text-4xl lg:text-3xl font-medium">{data.sunset}</h1>
                        </div>
                    </div>
                    :
                    <div className="w-full flex items-center justify-center">
                        <h3 className="text-xl font-medium text-neutral-400">Loading...</h3>
                    </div>
                }
            </div>
        </>
    )
}

export default Home