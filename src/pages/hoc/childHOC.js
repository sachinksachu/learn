import React from 'react';
import HigherOrder from './HigherOrder';

function childHOC(props) {

    console.log("props", props)
    return (
        <div>
            <h3>Child HOC</h3>
        </div>
    );
}

export default HigherOrder(childHOC);