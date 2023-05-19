import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Icons from '../Icons/Icons';
import LatestNews from '../LatestNews/LatestNews';
import Question from '../Question/Question';
import PhotoShot from '../PhotoShot/PhotoShot';
import useTitle from '../../../hooks/useTitle';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Icons></Icons>
            <Question></Question>
            <PhotoShot></PhotoShot>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;