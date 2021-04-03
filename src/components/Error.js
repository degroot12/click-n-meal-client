import React from "react";
import {Image, Row, Col} from "react-bootstrap";

function Error () {
    return (
        <div>
            <h1>Snapp! Something went wrong!</h1>
            <Row>
                <Col xs={6} md={4}>
                    <Image                 
                        src="https://res.cloudinary.com/snowbird/image/upload/v1617451630/Click-n-meal/broken_plate_q0yme7.jpg"
                        alt="broken plate" 
                        thumbnail 
                    />
                </Col>
            </Row>

        </div>
    )
}

export default Error