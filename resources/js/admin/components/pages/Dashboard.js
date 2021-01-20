import React from 'react';
import Breadcrumb from '../partials/Breadcrump';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

    constructor(props)
    {
        super(props);

        document.body.classList.remove("login-page");
        document.body.classList.add("skin-green");
    }

    render() {
        return (
            <>
            <Breadcrumb />
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">

				<header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
					Buildings Overview
				</header>


				<section className=" flex flex-row flex-wrap items-center text-center border-b border-solid border-gray-300">
					<div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
						<span className="text-xs font-medium text-gray-500 uppercase">Posts</span>
						<div className="py-4 flex items-center justify-center text-center">
							<span className="mr-4 text-3xl"><i className="fa fa-th"></i></span>
                            <Link to="/posts" className="inline-flex items-center bg-green-500 h-6 px-2 rounded text-white text-xs">More info <i className="fa fa-arrow-circle-right"></i></Link>
						</div>
					</div>
					<div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
						<span className="text-xs font-medium text-gray-500 uppercase">Categories</span>
						<div className="py-4 flex items-center justify-center text-center">
							<span className="mr-4 text-3xl"><i className="fa fa-list"></i></span>
                            <Link to="/categories" className="inline-flex items-center bg-green-500 h-6 px-2 rounded text-white text-xs">More info <i className="fa fa-arrow-circle-right"></i></Link>
						</div>
					</div>
					<div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
						<span className="text-xs font-medium text-gray-500 uppercase">Comments</span>
						<div className="py-4 flex items-center justify-center text-center">
							<span className="mr-4 text-3xl"><i className="fas fa-comments "></i></span>
                            <Link to="/comments" className="inline-flex items-center bg-red-500 h-6 px-2 rounded text-white text-xs">More info <i className="fa fa-arrow-circle-right"></i></Link>
						</div>
					</div>
					<div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r flex flex-col items-center">
						<span className="text-xs font-medium text-gray-500 uppercase">Users</span>
                        <div className="py-4 flex items-center justify-center text-center">
						    <span className="mr-4 text-3xl"><i className="fa fa-users"></i></span>
                            <Link to="/users" className="inline-flex items-center bg-blue-500 h-6 px-2 rounded text-white text-xs">More info <i className="fa fa-arrow-circle-right"></i></Link>
                        </div>
					</div>
				</section>
				<section id="chart" className="p-4">
					<canvas id="myChart" width="200" height="200"></canvas>
				</section>
			</section>
            </>

        )
    }
}

export default Dashboard;
