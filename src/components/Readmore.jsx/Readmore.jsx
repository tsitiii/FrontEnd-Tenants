// Filename - components/ReadMore.js

import { useState } from "react";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="inline">
            {isReadMore ? text.slice(0, 400) : text}
            <span
                onClick={toggleReadMore}
                className="cursor-pointer"
                style={{ color: "blue" }}
            >
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};

const Content = () => {
    return (
        <div className="text-base sm:text-lg font-medium">
            {/* <h2> */}
            <ReadMore>
                The primary objective of this new law is to create a fairer and more balanced rental market.
                It seeks to ensure that rental prices are reasonable and aligned with tenants' financial capabilities,
                thereby protecting tenants from unfair practices while also encouraging landlords to rent out their properties
                under clear and regulated terms. The law introduces mandatory registration of all housing lease agreements,
                regulated rent pricing, and sets minimum lease durations, among other significant changes.
                This overhaul of the rental housing system marks a crucial step towards creating a more equitable and transparent
                market that benefits both tenants and landlords. Whether you're a tenant looking to understand your rights or a landlord
                navigating the new requirements,
                this page provides a detailed breakdown of what you need to know.
            </ReadMore>
            {/* </h2> */}
        </div>
    );
};

export default Content;
