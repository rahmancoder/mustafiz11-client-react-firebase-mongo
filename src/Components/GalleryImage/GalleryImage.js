import React from 'react';

import img1 from "../../images/collage/bottle.jpg";
import img2 from "../../images/collage/stool.jpg";
import img3 from "../../images/collage/coffee.jpg";
import img4 from "../../images/collage/lamp.jpg";
import img5 from "../../images/collage/watch.jpg";
import img6 from "../../images/collage/honey.jpg";
import img7 from "../../images/collage/cactus.jpg";
import img8 from "../../images/collage/sunglass.jpg";
import img9 from "../../images/collage/lens.jpg";
import img10 from "../../images/Gallery/galleryimg1.jpg";
import img11 from "../../images/Gallery/galleryimg2.jpg";
import img12 from "../../images/Gallery/galleryimg3.jpg";
import img13 from "../../images/Gallery/galleryimg4.jpg";


const GalleryImage = () => {
    return (
        <div className="container">
            <h1 className="text-danger mt-5 mb-4"> Gallery Tour Images</h1>
            <div className="row">
                <div className="col-4">
                    <div className="row mb-3">
                        <img className="img-fluid" src={img1} alt="" />
                        <p className="mt-4 mb-3 text-warning">Bottle</p>
                    </div>
                    <div className="row">
                        <img src={img13} alt="" />
                        <p className="mt-4 text-warning">Hat And Sunglass</p>
                    </div>
                </div>
                {/* <!-- middle column --> */}
                <div className="col-4">
                    <div className="row mb-3">
                        <img className="img-fluid" src={img10} alt="" />
                        <p className="mb-4 text-warning"> Shoe and Bags</p>
                    </div>
                    <div className="row mb-3">
                        <img src={img4} alt="" className="img-fluid" />
                        <p className="text-warning">Lamp and Lights</p>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <img src={img5} alt="" className="img-fluid" />
                            <p className="mt-4 text-warning">Watch and Battery</p>
                        </div>
                        <div className="col-6">
                            <img src={img11} alt="" className="img-fluid" />
                            <p className="mt-4 text-warning">Lugage</p>
                        </div>
                    </div>
                </div>
                {/* <!-- last column --> */}
                <div className="col-4">
                    <div className="row mb-3">
                        <img className="img-fluid" src={img12} alt="" />
                        <p className="text-warning">Sutcase Bags and Hats</p>
                    </div>
                    <div className="row mb-3">
                        <img className="img-fluid" src={img8} alt="" />
                        <p className="text-warning"> Black Sunglass</p>
                    </div>
                    <div className="row mb-3">
                        <img className="img-fluid" src={img9} alt="" />
                        <p className="text-warning">Camera Lens</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryImage;