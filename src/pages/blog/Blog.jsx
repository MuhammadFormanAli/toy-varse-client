import React from 'react';
import useTitle from '../../useTitle';
import Header from '../../components/shared/Header';

const Blog = () => {
    useTitle('Blogs')
    return (
        <div>
            <div>
<Header pageName = {'Blog'}
>

</Header>

                <main className="container mx-auto py-8 px-8">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">

                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2">What is an access token and refresh token? How do they
                                    work and where should we store them on the client-side?</h2>
                                <p className="text-gray-700"><strong>Access Token:</strong> Access token is a credential
                                    that used to authenticate and authorize requests to access protected resources. It is typically
                                    a short-lived token with an expiration time. </p>
                                <p><strong>Refresh Token:</strong> Refresh token is a long-lived credential that is used to
                                    obtain a new access token once the original access token expires. It is usually issued along
                                    with the access token during the authentication process. The refresh token  stored on the
                                    client-side  or in a separate server-side session.</p>
                                <br />
                                <br />
                                <p><strong>Authentication:</strong> When a user logs in or authenticates, the server
                                    verifies their credentials and generates an access token and a refresh token.
                                    <br />
                                    <br />
                                    <strong>Access Token Usage:</strong> The client includes the access token in
                                    the header or authorization section of subsequent requests to the server or API.
                                    The server validates the access token to ensure the request is coming from an
                                    authenticated user and grants access to the requested resources or actions if
                                    the token is valid and not expired.</p>
                                <br />
                                <p>
                                    We can can store token on our local storage on browser. or more better options
                                    is http only cookie. http only cookie in more secure than local storage.
                                </p>
                            </div>
                        </div>


                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2">Compare SQL and NoSQL databases?</h2>
                                <p className="text-gray-700"><strong>SQL:</strong> SQL databases follow a structured, tabular data model, commonly known as a relational database. Data is organized into tables with predefined schemas, and relationships between tables are established using keys.</p>
                                <br />
                                <br />

                                <p><strong>SQL:</strong> SQL databases require a predefined schema, meaning the structure of tables and the types of data they can store are defined upfront. Altering the schema often requires migrations and can be time-consuming.</p>
                                <br />

                                <p><strong>noSQL:</strong> NoSQL databases offer a flexible data model. They can be categorized into various types, such as document databases, key-value stores, columnar databases, or graph databases. NoSQL databases allow for storing unstructured or semi-structured data, enabling greater scalability and adaptability.</p>

                                <br />
                                <strong>noSQL:</strong> NoSQL databases are schema-less or schema-flexible. They allow for dynamic and agile data structures, enabling easier and faster changes to the data model without requiring migrations.
                                <br />


                            </div>
                        </div>


                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2">What is express js & What is Nest JS</h2>
                                <p className="text-gray-700"><strong>Express.js:</strong>
                                    Express.js is a minimalistic, unopinionated web framework for Node.js. It provides a lightwe
                                    ight and flexible foundation for building web applications and APIs.
                                    Express.js is known for its simplicity and ease of use. It allows developers to handle HTTP
                                    requests, define routes, and manage middleware functions for processing incoming requests and
                                    generating responses.</p>
                                <br />
                                <strong>NestJS:</strong>
                                NestJS is a progressive, opinionated framework for building efficient and scalable server-side
                                applications with TypeScript. It is built on top of Express.js and leverages the concepts and
                                features of modern JavaScript and TypeScript.
                                NestJS follows the modular and component-based architecture inspired by Angular. It encourages
                                the use of decorators, dependency injection, and modules to organize the application's
                                components and provide a structured approach to development.
                                <br />

                            </div>

                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2">What is MongoDB aggregate and how does it work</h2>
                                <p className="text-gray-700">In MongoDB, the aggregate method is used
                                    to perform advanced data aggregation operations on collections. It allows
                                    you to process and transform data using a pipeline of multiple stages.</p>
                                <br />
                                The aggregate method takes an array of stages as input, with each stage representing
                                a specific operation to be performed on the data. The stages are processed in order,
                                with the output of one stage serving as the input for the next stage. This allows for
                                complex data manipulations and transformations.

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Blog;