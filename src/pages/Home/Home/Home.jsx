import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Icons from '../Icons/Icons';
import LatestNews from '../LatestNews/LatestNews';
import Question from '../Question/Question';
import PhotoShot from '../PhotoShot/PhotoShot';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Icons></Icons>
            <Question></Question>
            <PhotoShot></PhotoShot>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;