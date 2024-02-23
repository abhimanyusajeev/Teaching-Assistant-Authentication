// layout.tsx

import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="container mx-auto p-4 margin-top: 0px;">{children}</div>
    );
};

export default Layout;
