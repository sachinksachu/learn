import React from "react";
import { Link} from "react-router-dom";

function Default() {

    const data = {"from" : "root", "to" : "route-example"}
    return (
        <>
            <div>
                <h3>Default</h3>
            </div>
            <div>
                <Link to='/123/xyz?type=1' state={data}>Route Example</Link>
            </div>
        </>
    )

}

export default Default;