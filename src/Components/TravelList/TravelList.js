import React, { useEffect, useState } from 'react';
import SingleTravelList from '../SingleTravelList/SingleTravelList';

const TravelList = () => {

    const [travellist, setAlltravellist] = useState([]);
    useEffect(() => {
        // fetch('./mustafiztravel.json')
        fetch('http://localhost:5000/travel')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAlltravellist(data));

    }, [])

    return (
        <div className="text-center">

            <div className="text-center">
                <h1 className="text-danger"> Choose your Travel List</h1>
                <p>Want to Travel? Book Now!</p>

                <div className="row m-3">

                    {
                        travellist.slice(0, 6).map(travel =>
                            <SingleTravelList
                                key={travel.index}
                                travel={travel}

                            ></SingleTravelList>

                        )
                    }

                </div>

            </div>

        </div>
    );
};

export default TravelList;