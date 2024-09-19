import React from 'react';
import {ErrorBoundary} from './ErrorBoundary';

function ChildComponent1() {
    // Simulate an error scenario (remove for normal operation)
    throw new Error('Error from ChildComponent1');
    // return JSX content
}

function ChildComponent2() {
    // Return JSX content
    return <p>Normal Child Component</p>;
}

function ChildWithError() {
    return (
        <ErrorBoundary>
            <ChildComponent1 />
            <ChildComponent2 />
        </ErrorBoundary>
    );
}

export default ChildWithError;
