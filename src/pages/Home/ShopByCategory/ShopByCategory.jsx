import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShopByCategory = () => {

    const [category, setCategory] = useState([]);
    const [activeTab, setActiveTab] = useState("teddy");
    const [card] = useState(2)

    useEffect(() => {
        fetch(`https://toys-project-server.vercel.app/category/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setCategory(result);
            });
    }, [activeTab]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <Container className='text-center mt-5 mb-5'>
            <h1 className='text-center text-info fw-bold mt-5'>Shop By Category</h1>
            <p className='text-center fw-semibold mb-5'>Find your favorite toys here</p>

            <div className='d-flex justify-content-center gap-5'>
                <button
                    onClick={() => handleTabClick("teddy")}
                    className={`px-4 py-2 borders rounded fw-bold ${activeTab == "teddy" ? " bg-info text-black" : ""
                        }`}
                >
                    Teddy
                </button>
                <button
                    onClick={() => handleTabClick("dog")}
                    className={`px-4 py-2 borders rounded fw-bold ${activeTab == "dog" ? " bg-info text-black" : ""
                        }`}
                >
                    Dog
                </button>
                <button
                    onClick={() => handleTabClick("cat")}
                    className={`px-4 py-2 borders rounded fw-bold ${activeTab == "cat" ? " bg-info text-black" : ""
                        }`}
                >
                    Cat
                </button>
            </div>

            <hr />

            <div>
                {
                    <div className='row row-cols-1 row-cols-md-2'>
                        {
                            category.slice(0, card).map((teddy) => (
                                <div key={teddy._id}>
                                    <div className="card mb-3 shadow mt-4">
                                        <div className="row g-0">
                                            <div className="col-md-6">
                                                <img src={teddy.photo} alt="" className="rounded m-3" height='200' width='300' />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-body mt-4">
                                                    <h5 className="card-title">{teddy.toyName}</h5>
                                                    <p>Price: ${teddy.price}</p>
                                                    <p>Rating: {teddy.rating}</p>
                                                    <Link to={`/details/${teddy._id}`}>
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
                }
            </div>
        </Container>
    );
};

export default ShopByCategory;