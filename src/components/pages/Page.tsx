import React from 'react';

class Page extends React.Component {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        document.title = 'Home Page';
    }
}

export default Page;
