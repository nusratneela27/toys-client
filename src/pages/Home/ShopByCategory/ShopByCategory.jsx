import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ShopByCategory = () => {
    // const [categoryData, setCategoryData] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/category')
    //         .then((response) => response.json())
    //         .then((data) => setCategoryData(data));
    // }, []);

    const [teddyData, setTeddyData] = useState([]);
    const [catData, setCatData] = useState([]);
    const [dogData, setDogData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/teddy')
            .then((response) => response.json())
            .then((data) => setTeddyData(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/cat')
            .then((response) => response.json())
            .then((data) => setCatData(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/dog')
            .then((response) => response.json())
            .then((data) => setDogData(data));
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
                            <Tab>Cats</Tab>
                            <Tab>Dogs</Tab>
                        </TabList>
                        {/* <TabPanel>
                            <div className='row row-cols-1 row-cols-md-2'>
                                {
                                    categoryData[0]?.toys?.map((category) => (
                                        <div key={category._id}>
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
                                                            <Link to={`/toyDetails/${category._id}`}>
                                                                <Button variant='info'>View Details</Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel> */}


                        <TabPanel>
                            <div className='row row-cols-1 row-cols-md-2'>
                                {
                                    teddyData.map((teddy) => (
                                        <div key={teddy._id}>
                                            <div className="card mb-3 shadow mt-4">
                                                <div className="row g-0">
                                                    <div className="col-md-6">
                                                        <img src={teddy.img} alt="" className="rounded m-3" height='200' width='300' />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card-body mt-4">
                                                            <h5 className="card-title">{teddy.title}</h5>
                                                            <p>Price: ${teddy.price}</p>
                                                            <p>Rating: {teddy.rating}</p>
                                                            <Link to={`/teddy/${teddy._id}`}>
                                                                <Button variant='info'>View Details</Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>



                        {/* <TabPanel>
                            <div className='row row-cols-1 row-cols-md-2'>
                                {
                                    categoryData[1]?.toys?.map((category) => (
                                        <div key={category._id}>
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
                                                            <Link to={`/toyDetails/${category._id}`}>
                                                                <Button variant='info'>View Details</Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel> */}

                        <TabPanel>
                            <div className='row row-cols-1 row-cols-md-2'>
                                {
                                    catData.map((cat) => (
                                        <div key={cat._id}>
                                            <div className="card mb-3 shadow mt-4">
                                                <div className="row g-0">
                                                    <div className="col-md-6">
                                                        <img src={cat.img} alt="" className="rounded m-3" height='200' width='300' />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card-body mt-4">
                                                            <h5 className="card-title">{cat.title}</h5>
                                                            <p>Price: ${cat.price}</p>
                                                            <p>Rating: {cat.rating}</p>
                                                            <Link to={`/cat/${cat._id}`}>
                                                                <Button variant='info'>View Details</Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>


                        {/* <TabPanel>
                            <div className='row row-cols-1 row-cols-md-2'>
                                {
                                    categoryData[2]?.toys?.map((category) => (
                                        <div key={category._id}>
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
                                                            <Link to={`/toyDetails/${category._id}`}>
                                                                <Button variant='info'>View Details</Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel> */}
                        <TabPanel>
                            <div className='row row-cols-1 row-cols-md-2'>
                                {
                                    dogData.map((dog) => (
                                        <div key={dog._id}>
                                            <div className="card mb-3 shadow mt-4">
                                                <div className="row g-0">
                                                    <div className="col-md-6">
                                                        <img src={dog.img} alt="" className="rounded m-3" height='200' width='300' />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card-body mt-4">
                                                            <h5 className="card-title">{dog.title}</h5>
                                                            <p>Price: ${dog.price}</p>
                                                            <p>Rating: {dog.rating}</p>
                                                            <Link to={`/dog/${dog._id}`}>
                                                                <Button variant='info'>View Details</Button>
                                                            </Link>
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