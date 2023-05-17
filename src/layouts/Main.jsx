import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <h1>this is main layout</h1>
            <Outlet></Outlet>
        </>
    );
};

export default Main;