import React from 'react';
import './Vacation.css';

import img1 from "../../images/vacation/sunset.png";
import img2 from "../../images/vacation/boat.png";
import img3 from "../../images/vacation/beach.png";
import img4 from "../../images/vacation/coconut.png";
import img5 from "../../images/vacation/sand.jpg";


const Vacation = () => {
    return (
        <div className="container">
            <h1 className="text-danger"> Sea Beach Images</h1>
            <div className="row g-0">
                <div className="col-4 first-image">
                    <img src={img1} alt="" className="img-fluid" />
                </div>
                <div className="col-8">
                    <div className="row g-0 side-collage">
                        <div className="col-4">
                            <img src={img2} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <img src={img3} alt="" className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <img src={img4} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row g-0 bottom-image">
                        <img src={img5} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vacation;