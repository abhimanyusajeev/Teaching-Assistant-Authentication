// components/HomepageContainer.tsx

import React from 'react';
import Link from 'next/link';

const HomepageContainer: React.FC = () => {
    return (
        <div className=" flex justify-center items-center h-screen bg-gray-200 transition-transform duration-300 transform hover:scale-110 bg-zinc-500">
            <div className=" flex flex-col items-center space-y-4 bg-zinc-300 py-10 px-10 rounded-lg">
                <Link href="/Game">
                    <div className="button transition ease-in-out delay-150 bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 border rounded-md">Games</div>
                </Link>
                <Link href="/Quiz">
                    <div className="button transition ease-in-out delay-150 bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  rounded-md">Quiz</div>
                </Link>
            </div>
        </div>
    );
};

export default HomepageContainer;
