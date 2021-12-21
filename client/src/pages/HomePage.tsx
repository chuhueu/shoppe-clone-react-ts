import React from "react";
import {
    Banner,
    SearchTop,
    SearchTrend,
    ShopeeMall,
    Directory,
    FlashSale,
    ListProduct,
    Header,
    Footer,
} from "../components/index";
const HomePage = () => {
    return (
        <>
            <Header />
            <Banner />
            <Directory />
            <FlashSale />
            <ShopeeMall />
            <SearchTrend />
            <SearchTop />
            <ListProduct />
            <Footer />
        </>
    );
};

export default HomePage;
