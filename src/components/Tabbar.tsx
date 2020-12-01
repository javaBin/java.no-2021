import React from 'react';
import { Card, Col, Row, Tab, Tabs } from 'react-bootstrap';

const Tabbar = () => {
    const regions = ["Oslo", "Bergen", "Trondheim", "Vestfold", "Sogn", "Tromsø", "Sørlandet", "Stavanger"];

    return (
        <Tabs className="justify-content-center">
            <Tab eventKey="Digital" title="Digital">Digital</Tab>
            {
                regions.map( region => 
                    <Tab key={region} eventKey={region} title={region}>
                        <Row className="mr-auto">
                            <Col>
                                <h3>{region}</h3>
                                <p>Learn more about this region. See past and future events on  
                                    <a href="https://www.meetup.com/javaBin/">{` ${region}'s Meetup page`}</a>
                                </p>
                            </Col>
                            <Col>
                                <Card>
                                    <p>Dette er en dummy tekst</p>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <p>Dette er en dummy tekst nummer 2</p>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <p>Dette er en dummy tekst nummer 3</p>
                                </Card>
                            </Col>
                        </Row>
                    </Tab>
                )
            }
        </Tabs>
    );
}

export default Tabbar;
