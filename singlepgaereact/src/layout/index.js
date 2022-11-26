import React from 'react';
import Nav from './Nav';

const Layout = (props) =>(
    
    <div>
        
        {props.children}
    </div>
)
export { Layout, Nav}; // difference between default and Named export
// export default Layout;