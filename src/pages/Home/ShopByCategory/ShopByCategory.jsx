import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ShopByCategory = () => {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetch("/public/categoryToy.json")
            .then((response) => response.json())
            .then((data) => setCategoryData(data));
    }, []);

    console.log(categoryData);
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
                                            <div className='d-flex p-4 mt-4 border rounded shadow'>
                                                <img src={category.img} alt="" className='rounded me-4' height='300' width='400' />
                                                <div className='my-auto'>
                                                    <h5 className='fw-bold'>{category.title}</h5>
                                                    <p>Price: ${category.price}</p>
                                                    <p>Rating: {category.rating}</p>
                                                    <Button variant='info'>View Details</Button>
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
                                            <div className='d-flex p-4 mt-4 border rounded shadow'>
                                                <img src={category.img} alt="" className='rounded me-4' height='300' width='400' />
                                                <div className='my-auto'>
                                                    <h5 className='fw-bold'>{category.title}</h5>
                                                    <p>Price: ${category.price}</p>
                                                    <p>Rating: {category.rating}</p>
                                                    <Button variant='info'>View Details</Button>
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
                                            <div className='d-flex p-4 mt-4 border rounded shadow'>
                                                <img src={category.img} alt="" className='rounded me-4' height='300' width='400' />
                                                <div className='my-auto'>
                                                    <h5 className='fw-bold'>{category.title}</h5>
                                                    <p>Price: ${category.price}</p>
                                                    <p>Rating: {category.rating}</p>
                                                    <Button variant='info'>View Details</Button>
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