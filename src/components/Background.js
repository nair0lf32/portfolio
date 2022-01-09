import React from 'react';

const Background = ({ children }) => {
    return (

        <body className="bg-white dark:bg-black dark:text-white transition-all">
            {children}

        </body>
    )
}

export default Background;