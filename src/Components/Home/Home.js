import React from 'react';
import AllBlogList from '../AllBlogList/AllBlogList';
import Banner from '../Banner/Banner';
import GalleryImage from '../GalleryImage/GalleryImage';
import TravelList from '../TravelList/TravelList';
import Vacation from '../Vacation/Vacation';

const Home = () => {
    return (
        <div>
            <h1 className="text-danger">Best Travel Plan and Tours</h1>
            <Banner></Banner>
            <TravelList></TravelList>
            <GalleryImage></GalleryImage>
            <AllBlogList></AllBlogList>
            <Vacation></Vacation>

        </div>
    );
};

export default Home;