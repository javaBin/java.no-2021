import React from 'react';

class Page extends React.Component {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        document.title = 'Home Page';
    }

    render() {
        return <div>aaa</div>;
    }
}

export default Page;
