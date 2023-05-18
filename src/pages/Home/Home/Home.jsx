import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Icons from '../Icons/Icons';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Icons></Icons>
            <Gallery></Gallery>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;