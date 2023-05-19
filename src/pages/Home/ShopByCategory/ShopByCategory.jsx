import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ShopByCategory = () => {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then((response) => response.json())
            .then((data) => setCategoryData(data));
    }, []);

    return (
        <Container className='text-center mt-5 mb-5'>
            <h1 className='text-center text-info fw-bold mt-5'>Shop By Category</h1>
            <p className='text-center fw-semibold mb-5'>Find your favorite toys here</p>
            <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList>
                    <Tab>Animal Toys</Tab>
                </TabList>

                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab>Teddy Bear</Tab>
                            <Tab>Dogs</Tab>
                            <Tab>Cats</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='row row-cols-1 row-cols-md-2'>
                                {
                                    categoryData[0]?.toys?.map((category) => (
                                        <div key={category.id}>
                                            <div className="card mb-3 shadow mt-4">
                                                <div className="row g-0">
                                                    <div className="col-md-6">
                                                        <img src={category.img} alt="" className="rounded m-3" height='200' width='300' />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card-body mt-4">
                                                            <h5 className="card-title">{category.title}</h5>
                                                            <p>Price: ${category.price}</p>
                                                            <p>Rating: {category.rating}</p>
                                                            <Button variant='info'>View Details</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='row row-cols-1 row-cols-md-2'>
                                {
                                    categoryData[1]?.toys?.map((category) => (
                                        <div key={category.id}>
                                            <div className="card mb-3 shadow mt-4">
                                                <div className="row g-0">
                                                    <div className="col-md-6">
                                                        <img src={category.img} alt="" className="rounded m-3" height='200' width='300' />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card-body mt-4">
                                                            <h5 className="card-title">{category.title}</h5>
                                                            <p>Price: ${category.price}</p>
                                                            <p>Rating: {category.rating}</p>
                                                            <Button variant='info'>View Details</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='row row-cols-1 row-cols-md-2'>
                                {
                                    categoryData[2]?.toys?.map((category) => (
                                        <div key={category.id}>
                                            <div className="card mb-3 shadow mt-4">
                                                <div className="row g-0">
                                                    <div className="col-md-6">
                                                        <img src={category.img} alt="" className="rounded m-3" height='200' width='300' />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card-body mt-4">
                                                            <h5 className="card-title">{category.title}</h5>
                                                            <p>Price: ${category.price}</p>
                                                            <p>Rating: {category.rating}</p>
                                                            <Button variant='info'>View Details</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </Container>
    );
};

export default ShopByCategory;