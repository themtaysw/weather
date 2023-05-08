import React from "react";

type Props = {
    children: React.ReactNode;
};

const MainBox = (props: Props) => {
    return (
        <div className="w-full lg:w-4/6 lg:m-6 justify-self-center rounded-bl-[3rem] rounded-br-[3rem] lg:rounded-[3rem] flex items-center justify-center flex-col bg-neutral-700 bg-[url('https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/altocumulus.jpg/altocumulus.jpg/metofficegovuk%3AheroXLarge')] bg-cover">
            {props.children}
        </div>
    );
};

export default MainBox;
