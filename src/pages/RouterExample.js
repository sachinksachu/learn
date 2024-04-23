import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function RouterExample() {
    //Get 'dynamic' params from URL
    const { productid, id } = useParams();

    //use to navigate
    const navigate = useNavigate();

    //access to current location object
    const location = useLocation();
    const {from, to} = location ?? location.state;
    const path = location?.pathname;
    const queryParam = location?.search;
    console.log(location)
    return (
        <>
            <div>
                <h3>useParams()</h3>
                <p>Product Id : {productid}</p>
                <p>Id : {id}</p>
            </div>

            <div>
                <h3>useLocation()</h3>
                <p>State passed: 1:{from} 2:{to}</p>
                <p>Current path : {path}</p>
                <p>Query param : {queryParam}</p>
            </div>

            <div>
                <button type="button" onClick={() => navigate('/stopwatch', {state: "sd"})}>Stopwatch</button>
            </div>
        </>
    )

}

export default RouterExample;