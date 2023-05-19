import React from 'react';
import { Container, Table } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h1 className='text-center fs-3 fw-bold bg-info bg-opacity-25 pt-5 pb-5'>Question & Answer</h1>
            <Container className='pt-5'>
                <div>
                    <div className='card shadow p-3 mb-5'>
                        <h1 className='fw-bold fs-2'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        <p className='fs-4'>
                            <strong>Access token</strong>
                            <br />An access token is a type of security token used to authenticate and allow access to restricted areas of a computer system. It is frequently employed in relation to online applications and other authentication-required systems.
                            <br />
                            <strong>Refresh token</strong>
                            <br />
                            A refresh token is a type of token when the first access token expires, authentication systems can use a refresh token to generate a new one. As part of a token-based authentication system, it is frequently used together with access tokens.
                            <br />
                            <strong>How do they work and where should to store</strong>
                            <br />
                            Access and refresh tokens work together to provide secure and seamless authentication for client applications. Here's a overview of where they should be stored on the client-side:
                            <ul>
                                <li>Local Storage</li>
                                <li>Browser Cookie(HTTP)</li>
                            </ul>
                        </p>
                    </div>
                    <div className='card shadow p-3 mb-5'>
                        <h1 className='fw-bold fs-2'>Compare SQL and NoSQL databases?</h1>
                        <p className='fs-4'>
                            <Table striped bordered hover>
                                <thead>
                                    <tr className='text-center'>
                                        <th>SQL</th>
                                        <th>NoSQL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Structured query language (SQL)</td>
                                        <td>No declarative query language</td>
                                    </tr>
                                    <tr>
                                        <td>SQL databases are table based databases</td>
                                        <td>NoSQL databases can be document based, key-value pairs, graph databases</td>
                                    </tr>
                                    <tr>
                                        <td>SQL databases have a predefined schema</td>
                                        <td>NoSQL databases use dynamic schema for unstructured data.</td>
                                    </tr>
                                    <tr>
                                        <td>Oracle, Postgres, and MS-SQL.</td>
                                        <td>MongoDB, Redis, Neo4j, Cassandra, Hbase.</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </p>
                    </div>
                    <div className='card shadow p-3 mb-5'>
                        <h1 className='fw-bold fs-2'>What is express js? What is Nest JS?</h1>
                        <p className='fs-4'>
                            <strong>Express js</strong>
                            <br />
                            Node.js, a JavaScript runtime environment, has a popular web application framework called Express.js. It offers a complete collection of tools and functionality for creating web apps and APIs.
                            <br />
                            <strong>Node js</strong>
                            <br />
                            Node.js is an open-source server-side runtime environment for JavaScript. It enables the creation of web applications that are flexible and have great speed by allowing developers to run JavaScript code on the server side, outside of the browser.

                        </p>
                    </div>
                    <div className='card shadow p-3 mb-5'>
                        <h1 className='fw-bold fs-2'>What is MongoDB aggregate and how does it work ?</h1>
                        <p className='fs-4'>
                            <strong>MongoDB aggregate</strong>
                            <br />
                            The aggregate operation in MongoDB is used to process and analyze collections of data in an advanced way. We can use it to carry out complex data changes, calculations, collections, and more. The parameter for the aggregate operation is an array of stages, where each stage indicates a particular action to be applied to the data.
                            <br />
                            <strong>How does it work</strong>
                            <br />
                            <p>In MongoDB, the aggregate operation uses a pipeline-based technique, which lets one specify a number of steps to be executed in order to analyze and process data.It simplifies the pipeline execution process by using indexes and reducing moving data, enabling better data handling and improved performance.

                            </p>
                        </p>
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default Blog;