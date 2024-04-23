import React, { Suspense, lazy, useEffect, useState } from 'react';

const Child1 = lazy(() => import('./LazyChild1'))
const Child2 = lazy(() => import('./LazyChild2'))
const Child3 = lazy(() => import('./LazyChild3'))

const style = {
    display : 'flex'
}

function LazyParent() {
    return (
        <div style={style}>
            <Suspense fallback={<div>Loading...</div>}>
                <Child1/>
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Child2/>
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Child3/>
            </Suspense>
        </div>
    );
}

export default LazyParent;