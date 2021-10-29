import React from 'react';
import Banner from '../Banner/Banner';
import GalleryImage from '../GalleryImage/GalleryImage';
import Vacation from '../Vacation/Vacation';

const Home = () => {
    return (
        <div>
            <h1>This is Home render four plus two extra section here</h1>
            <Banner></Banner>
            <Vacation></Vacation>
            <GalleryImage></GalleryImage>

        </div>
    );
};

export default Home;