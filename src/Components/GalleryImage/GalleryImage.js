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

const GalleryImage = () => {
    return (
        <div class="container">
            <h1> Gallery Tour Images</h1>
            <div class="row">
                <div class="col-4">
                    <div class="row mb-3">
                        <img class="img-fluid" src={img1} alt="" />
                    </div>
                    <div class="row">
                        <img src={img2} alt="" />
                    </div>
                </div>
                {/* <!-- middle column --> */}
                <div class="col-4">
                    <div class="row mb-3">
                        <img class="img-fluid" src={img3} alt="" />
                    </div>
                    <div class="row mb-3">
                        <img src={img4} alt="" class="img-fluid" />
                    </div>
                    <div class="row mb-3">
                        <div class="col-6">
                            <img src={img5} alt="" class="img-fluid" />
                        </div>
                        <div class="col-6">
                            <img src={img6} alt="" class="img-fluid" />
                        </div>
                    </div>
                </div>
                {/* <!-- last column --> */}
                <div class="col-4">
                    <div class="row mb-3">
                        <img class="img-fluid" src={img7} alt="" />
                    </div>
                    <div class="row mb-3">
                        <img class="img-fluid" src={img8} alt="" />
                    </div>
                    <div class="row mb-3">
                        <img class="img-fluid" src={img9} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryImage;