import React, { useEffect } from 'react';

const HigherOrder = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    console.log("props", props)
    useEffect(() => {
      // Check if the token is valid or expired
    //   const token = localStorage.getItem('token');
    //   if (!token) {
    //     // Redirect to the login page or show a message
    //     // indicating that the user is not authenticated
    //     props.history.push('/login');
    //   }
    }, []);

     // Pass additional properties to the wrapped component
     const wrappedComponentProps = {
        ...props,
        additionalProp: 'Hello from HOC',
      };

    // Render the wrapped component if the user is authenticated
    // Otherwise, you can show a loading spinner or a different UI
    return <WrappedComponent {...wrappedComponentProps} />;
  };

//   AuthenticatedComponent.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name})`;
  return AuthenticatedComponent;
};

export default HigherOrder;