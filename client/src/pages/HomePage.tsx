import React from "react";
import {
    Banner,
    SearchTop,
    SearchTrend,
    ShopeeMall,
    Directory,
    FlashSale,
} from "../components/index";
const HomePage = () => {
    return (
        <>
            <Banner />
            <Directory />
            <FlashSale />
            <ShopeeMall />
            <SearchTrend />
            <SearchTop />
        </>
    );
};

export default HomePage;
