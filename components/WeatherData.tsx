import Image from "next/image";
import React from "react";

type Props = {
    image?: React.ReactNode;
    data: any;
};

const WeatherData = (props: Props) => {
    return (
        <div className="flex items-center gap-4">
            {props.image}
            <h1 className="text-4xl font-medium lg:text-3xl">{props.data}</h1>
        </div>
    )
};

export default WeatherData;
