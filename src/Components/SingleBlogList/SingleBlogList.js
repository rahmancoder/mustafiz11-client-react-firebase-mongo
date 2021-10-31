import React from 'react';
import { Card } from 'react-bootstrap';

const SingleBlogList = (props) => {

    const { index, name, description, price, img } = props.blog || {};
    return (
        <div className="col-md-4 mt-4">
            <Card style={{ width: '18rem', height: '100%' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><span className="text-warning"> Travel Place-</span> {name}</Card.Title>
                    <Card.Title><span className="text-warning"> Description-</span> {description}</Card.Title>
                    <Card.Text>


                        {/* <span className="text-info"> About Doctor:-</span> : {about} */}
                    </Card.Text>
                    <Card.Title><span className="text-danger font-weight-bold"> Travel Cost-</span> {price} $</Card.Title>

                </Card.Body>
            </Card>


        </div>
    );
};

export default SingleBlogList;