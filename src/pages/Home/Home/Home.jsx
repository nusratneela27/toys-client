import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Icons from '../Icons/Icons';
import LatestNews from '../LatestNews/LatestNews';
import Question from '../Question/Question';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Icons></Icons>
            <Question></Question>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;