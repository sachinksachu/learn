import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function RouterExample() {
    //Get 'dynamic' params from URL
    const { productid, id } = useParams();

    //use to navigate
    const navigate = useNavigate();

    //access to current location object
    const location = useLocation();
    console.log(location)
    return (
        <>
            <div>
                Product Id : {productid}
                Id : {id}
            </div>
            <div>
                <button type="button" onClick={() => navigate('/stopwatch')}>Stopwatch</button>
            </div>
        </>
    )

}

export default RouterExample;