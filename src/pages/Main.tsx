import React from "react";
import { BlogPage } from ".";
import { Section1, Section3 } from "../Layouts/Section";
const Main = () => {
    return (
        <>
            <Section1 />
            <BlogPage limit={4} className="lg:-mt-32" readmore="true" />
            <Section3 />
        </>
    );
};

export default Main;
