import React from "react";
import { motion } from "framer-motion";

type Props = {
    date: string;
    setDate: (date: string) => void;
};

const DateInput = (props: Props) => {
    return (
        <motion.input
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center px-2 py-2 text-gray-400 valid:text-white rounded-xl lg:py-0 outline-sky-600"
            type="date"
            value={props.date}
            onChange={(e) => props.setDate(e.target.value)}
        />
    );
};

export default DateInput;
