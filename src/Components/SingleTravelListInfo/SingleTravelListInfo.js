import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleTravelListInfo = () => {
    let { travelId } = useParams();
    const [traveldetails, setTravelDetails] = useState([]);

    useEffect(() => {
        fetch('/mustafiztravel.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setTravelDetails(data))

    }, [])

    useEffect(() => {

        const found = traveldetails.find(d => d.index == travelId)
        console.log('found', found);


    }, [traveldetails, travelId])



    return (
        <div className="text-center">
            <h2 className="text-danger">Service Index: {travelId}</h2>

            <h2 className="text-success">Service Name: {traveldetails[travelId]?.travel_destination}</h2>
            <h2 className="text-warning">About This Service- {traveldetails[travelId]?.travel_description}</h2>
            <img src={traveldetails[travelId]?.picture} alt="" />


            <div className="text-center">
                <h1> Travel List</h1>
                <p>Want to Travel Now?</p>
                <p><Link to="/travel">View All TravelList</Link></p>

            </div>

        </div>
    );
};

export default SingleTravelListInfo;