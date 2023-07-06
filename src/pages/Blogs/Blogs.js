import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {

    useTitle("Blogs")

    return (
        <div className='lg:mx-24 mt-3'>
            <h2 className='lg:text-5xl text-center font-semibold'><span className='border-b-4 border-yellow-500'>Blo</span><span className='pb-0.5 border-b border-gray-500'>gs</span></h2>
            <div className='mt-6'>
                <h2 className='text-3xl font-semibold text-green-500'> 1. Difference between SQL and NoSQL</h2>
                <h5 className='text-1xl font-semibold mt-1'>SQL:</h5>
                <p className='text-lg'>1.1 SQL databases are primarily called RDBMS or Relational Database.</p>
                <p className='text-lg'>1.2 Structured Query Language (SQL)</p>
                <p className='text-lg'>1.3 SQL databases are table based database.</p>
                <p className='text-lg'>1.4 Oracle Postgres, MySQL, and MS-SQL</p>

                <h5 className='text-1xl font-semibold mt-1'>NoSQL:</h5>
                <p className='text-lg'>1.1 NoSQL databases are primarily called as Non-relational or distributed database.</p>
                <p className='text-lg'>1.2 No declarative query language.</p>
                <p className='text-lg'>1.3 NoSQL databases can be document based, key value pairs, graph databases.</p>
                <p className='text-lg'>1.4 MongoDB, Redis</p>
            </div>
            
            <div className='mt-4'>
                <h2 className='text-3xl font-semibold text-green-500'> 2. What is JWT, and how does it work?</h2>
                <p className='text-lg pt-2'>JWT stands for JSON Web Token. It is a compact, URL-safe means of representing claims between two parties, typically used for authentication and authorization purposes in web applications. JWTs are digitally signed, ensuring the integrity of the information contained within them.</p>
                <p className='text-lg pt-2'>JWTs consist of three parts: the header, the payload, and the signature. Each part is base64 encoded and separated by dots.</p>
                <p className='text-lg pt-1'>1. Header: The header typically consists of two parts: the algorithm used to sign the token and the token type. The header is then base64 encoded.</p>
                <p className='text-lg pt-1'>2. Payload: The payload contains the claims, which are statements about an entity (typically the user) and additional metadata. Claims can be categorized into three types: registered claims, public claims, and private claims. Registered claims include standardized claims such as "iss" (issuer), "exp" (expiration time), and "sub" (subject). Public claims are custom claims defined by the application, while private claims are custom claims agreed upon between parties. The payload is also base64 encoded.</p>
                <p className='text-lg pt-1'>3. Signature: The signature is created by taking the base64 encoded header, the base64 encoded payload, a secret key, and the specified signing algorithm. The signature ensures the authenticity and integrity of the token. </p>
            </div>
            
            <div className='mt-4'>
                <h2 className='text-3xl font-semibold text-green-500'> 3. What is the difference between javascript and NodeJS?</h2>
                <p className='text-xl pt-2'>JavaScript and Node.js are related but serve different purposes. Here's an overview of the differences between JavaScript and Node.js:</p>
                <h5 className='text-2xl font-semibold mt-1'>JavaScript:</h5>
                <p className='text-lg'>1. JavaScript is primarily used in web browsers.</p>
                <p className='text-lg'>2. It runs in a single-threaded environment.</p>
                <p className='text-lg'>3. It provides APIs for web-related tasks like DOM manipulation, AJAX requests, and browser interactions.</p>
                <p className='text-lg'>4. JavaScript code is executed by the browser's JavaScript engine.</p>

                <h5 className='text-2xl font-semibold mt-1'>NodeJs:</h5>
                <p className='text-lg'>1. Node.js is primarily used for server-side development.</p>
                <p className='text-lg'>2. It uses an event-driven, non-blocking I/O model, which allows for efficient handling of concurrent requests.</p>
                <p className='text-lg'>3. Node.js provides a vast ecosystem of modules and packages via npm (Node Package Manager).</p>
                <p className='text-lg'>4. It allows developers to build scalable and high-performance applications using JavaScript on the server-side.</p>
                
            </div>
            
            <div className='mt-4'>
                <h2 className='text-3xl font-semibold text-green-500'> 4. How does NodeJS handle multiple requests at the same time?</h2>
                <p className='text-lg pt-2'>Node.js uses an event-driven, non-blocking I/O model to handle multiple requests at the same time efficiently. This approach allows Node.js to handle concurrent requests without blocking the execution of other requests.</p>
                <p className='text-xl pt-2'>Here's an overview of how Node.js handles multiple requests:</p>
                <h5 className='text-2xl font-semibold mt-1'>1. Event Loop:</h5>
                <p className='text-lg'>Node.js utilizes an event loop, which is a single-threaded mechanism responsible for managing and executing I/O operations and callbacks. The event loop constantly listens for events and dispatches them to appropriate handlers.</p>
                
                <h5 className='text-2xl font-semibold mt-1'>2. Non-Blocking I/O:</h5>
                <p className='text-lg'>Node.js uses non-blocking I/O operations, which means that when a request is made to perform I/O operations like reading from a file, making a network request, or querying a database, Node.js initiates the operation and continues executing the next instructions without waiting for the I/O operation to complete. When the operation is finished, a callback function associated with that operation is invoked</p>
                
                <h5 className='text-2xl font-semibold mt-1'>3. Callbacks and Asynchronous Execution::</h5>
                <p className='text-lg'>Node.js relies heavily on callbacks to handle asynchronous execution. When an I/O operation completes, the associated callback function is placed in an event queue. The event loop continuously checks the event queue for completed events and triggers the corresponding callbacks.</p>
                
                <h5 className='text-2xl font-semibold mt-1'>4. Event-Driven Architecture::</h5>
                <p className='text-lg'>Node.js follows an event-driven architecture where events are emitted and handled asynchronously. Various modules and libraries in Node.js are built on top of this architecture, allowing developers to register event listeners and respond to specific events.</p>
                
           </div>
        </div>
    );
};

export default Blogs;