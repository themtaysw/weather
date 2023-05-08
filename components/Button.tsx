import React from "react";
import { motion } from "framer-motion";

type Props = {
    text: string;
    isLoading: boolean;
    getWeatherData: () => void;
};

const Button = (props: Props) => {
    return (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            disabled={props.isLoading}
            className={`${props.isLoading && "cursor-wait"} px-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-600 transition-all duration-400`}
            onClick={() => props.getWeatherData()}
        >
            {props.text}
        </motion.button>
    )
};

export default Button;
