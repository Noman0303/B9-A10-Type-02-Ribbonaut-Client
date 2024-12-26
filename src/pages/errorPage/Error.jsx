import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8' id="error-page">
      <h1 className="text-lg mb-4">Oops! Something went wrong.</h1>
      <p className="text-sm italic text-gray-700 mb-4">
      <i>{error.statusText || error.message || 'An unknown error occurred'}</i>
        </p>
      <Link to="/" style={{ fontSize: '18px', color: 'blue' }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;