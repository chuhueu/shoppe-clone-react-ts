import React from "react";
import {
    Banner,
    SearchTop,
    SearchTrend,
    ShopeeMall,
} from "../components/index";
const HomePage = () => {
    return (
        <>
            <Banner />
            <ShopeeMall />
            <SearchTrend />
            <SearchTop />
        </>
    );
};

export default HomePage;
