import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleTravelList = (props) => {
    const { index, picture, Travel_destination, travel_cost } = props.travel || {};
    return (
        <div className="col-md-4 mt-4">
            <Card style={{ width: '18rem', height: '100%' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title><span className="text-warning"> Destination-</span> {Travel_destination}</Card.Title>
                    <Card.Text>


                        {/* <span className="text-info"> About Doctor:-</span> : {about} */}
                    </Card.Text>
                    <Card.Title><span className="text-danger font-weight-bold"> Travel Cost-</span> {travel_cost} $</Card.Title>
                    <Link to={`/travelbooking/${index}`}>
                        <Button variant="info">Add to Travel</Button>
                    </Link>
                </Card.Body>
            </Card>


        </div>
    );
};

export default SingleTravelList;