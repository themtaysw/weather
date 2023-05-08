import React from "react";
import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode;
    initial?: any;
    animate?: any;
    styles?: string;
};

const LargeText = (props: Props) => {
    return (
        <motion.h1
            initial={props.initial}
            animate={props.animate}
            className={`${props.styles || ""} mb-12 text-5xl font-bold lg:text-8xl`}
        >
            {props.children}
        </motion.h1>
    );
};

export default LargeText;
