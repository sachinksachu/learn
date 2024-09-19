import React, { useEffect } from 'react';

function HigherOrder(WrappedComponent) {

  const AuthComponent = (props) => {
    const propsFromHoc = 'hello from HOC'
    const appendProps = { ...props, propsFromHoc }
    const auth = true;

    if(auth)
      return <WrappedComponent {...appendProps}/>
      else
      return <div>UnAuthorized</div>
}

return AuthComponent;
}

export default HigherOrder;