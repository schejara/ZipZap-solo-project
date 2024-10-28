import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Admin() {
    const history = useHistory();
    const home = () => {
        history.pushState('/Home')
    }
    return (
        <div>
            <h1>This is a Admin Page</h1>
            <button onClick={home}>Home</button>
        </div>
    );
}


export default Admin;
