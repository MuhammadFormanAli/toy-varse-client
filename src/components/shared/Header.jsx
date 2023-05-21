import React from 'react';

const Header = ({pageName}) => {
    return (
        <header className="bg-gray-800 h-28 text-white">
        <div className="container mx-auto py-4 px-8">
            <h1 className="text-2xl font-bold text-center">{pageName}</h1>
        </div>
    </header>
    );
};

export default Header;