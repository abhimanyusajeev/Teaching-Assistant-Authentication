import React from 'react';
import Link from 'next/link';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <div className="flex justify-center items-center">
                    <Link href="/">
                        {/* Use a div instead of an anchor tag */}
                        {/* <div className="text-xl font-bold cursor-pointer"> */}
                        Teaching Assistant
                        {/* </div> */}
                    </Link>
                </div>
                <div>
                    <Link href="/logout">
                        {/* Use a button instead of an anchor tag */}
                        {/* <button className="mr-4">Logout</button> */}
                    </Link>
                </div>
            </nav>
            <div className="container mx-auto p-4">{children}</div>
        </div>
    );
};

export default Layout;
