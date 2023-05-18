import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import question from '../../../assets/questions/1.webp';

import { useEffect } from 'react';
import AOS from 'aos';

import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <button
            type="button"
            style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

const Question = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();

        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <Container>
            <h1 className='text-center text-info fw-bold mt-5'>Frequently Asked Questions</h1>
            <p className='text-center fw-semibold mb-5'>Find your answer from here</p>
            <Row>
                <Col md={6}>
                    <img src={question} className='img-fluid' alt="" data-aos="zoom-in-up" data-aos-duration="2000"
                        data-aos-easing="ease-in-sine" />
                </Col>
                <Col md={6}>
                    <Accordion defaultActiveKey="0">
                        <Card className='borders mb-4'>
                            <Card.Header className='d-flex justify-content-between'>
                                <p className='fw-semibold fs-5'>What is the age range of toys available in the store?</p>
                                <ContextAwareToggle eventKey="0">Open!</ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi modi dicta suscipit ex facere laboriosam voluptatem odit facilis sint. Magnam, dignissimos. Suscipit ratione assumenda fugit doloremque corporis quasi atque perferendis.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='borders mb-4'>
                            <Card.Header className='d-flex justify-content-between'>
                                <p className='fw-semibold fs-5'>Can I order toys online or do i need to visit the store?</p>
                                <ContextAwareToggle eventKey="1">Open!</ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur odio omnis ex repellendus aspernatur, quas dignissimos error consequatur, nihil molestiae minus maiores illo ipsum libero in veritatis, sit repudiandae exercitationem?
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='borders mb-4'>
                            <Card.Header className='d-flex justify-content-between'>
                                <p className='fw-semibold fs-5'>Do i need to pick them up in-store or delivered at home?</p>
                                <ContextAwareToggle eventKey="2">Open!</ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ab necessitatibus voluptate, amet similique molestias ipsam praesentium assumenda ratione tempore laboriosam error cumque neque cupiditate recusandae enim fugit, sequi esse?
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='borders mb-4'>
                            <Card.Header className='d-flex justify-content-between'>
                                <p className='fw-semibold fs-5'>Are your toys environmentally friendly and sustainable?</p>
                                <ContextAwareToggle eventKey="3">Open!</ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ab necessitatibus voluptate, amet similique molestias ipsam praesentium assumenda ratione tempore laboriosam error cumque neque cupiditate recusandae enim fugit, sequi esse?
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='borders mb-4'>
                            <Card.Header className='d-flex justify-content-between'>
                                <p className='fw-semibold fs-5'>What age range of toys do you have in your store?</p>
                                <ContextAwareToggle eventKey="4">Open!</ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ab necessitatibus voluptate, amet similique molestias ipsam praesentium assumenda ratione tempore laboriosam error cumque neque cupiditate recusandae enim fugit, sequi esse?
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default Question;