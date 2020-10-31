import React from 'react';
import Page from './Page';

class NotFound extends Page {
    render() {
        return (
            <div>
                <h1>404 Not Found</h1>
                <p>Whooops!</p>
            </div>
        );
    }
}
export default NotFound;
