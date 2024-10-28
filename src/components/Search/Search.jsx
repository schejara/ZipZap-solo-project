import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Search() {
    const history = useHistory();

    const home = () => {
        history.push('/Home')
    }
    return (
        <div>
            <h1>This is a Search Page</h1>
            <button onClick={home}>Home</button>
        </div>
    );
}


export default Search;
