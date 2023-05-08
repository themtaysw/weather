import React from "react";
import { motion } from "framer-motion";

type Props = {
    data: any;
    setData: (data: any) => void;
    required?: boolean;
};

const TextInput = (props: Props) => {
    return (
        <motion.input
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-2 py-2 rounded-xl lg:py-0 outline-sky-600"
            type="text"
            placeholder="Country"
            required={props.required}
            value={props.data}
            onChange={(e) => props.setData(e.target.value)}
        />
    );
};

export default TextInput;
