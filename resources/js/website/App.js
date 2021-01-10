import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class App extends Component {
    render() {
        return (
            <div className="h-full flex items-center px-6 lg:px-32 bg-purple-900 text-white">
                <div className="w-full md:w-9/12 xl:w-8/12">
                            <h1 className="text-3xl lg:text-5xl font-bold text-pink-500">Hello</h1>
                            <p className="font-bold mb-1">I'm the website</p>
                    </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
