import React, { useEffect, useState } from 'react';
import SingleBlogList from '../SingleBlogList/SingleBlogList';

const AllBlogList = () => {

    const [allbloglist, setAllbloglist] = useState([]);
    useEffect(() => {
        // fetch('./mustafiztravel.json')
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAllbloglist(data));

    }, [])

    return (
        <div className="text-center container mt-4">

            <div className="text-center">
                <h1 className="text-danger"> Blog List</h1>
                <p>Read Some Blogs!</p>

                <div className="row m-3">

                    {
                        // travellist.slice(0, 9).map(travel =>
                        allbloglist.map(blog =>
                            <SingleBlogList
                                key={blog.id}
                                blog={blog}

                            ></SingleBlogList>

                        )
                    }

                </div>

            </div>

        </div>
    );
};

export default AllBlogList;