import React from 'react';
import ChildHOC from './childHOC';

function ChildWrapper() {
    return (
        <ChildHOC fromWap={'hi'}/>
    );
}

export default ChildWrapper;