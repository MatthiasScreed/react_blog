import React from 'react';
import Breadcrumb from '../partials/Breadcrump';

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
						<span className="text-xs font-medium text-gray-500 uppercase">TOTAL REVENUE</span>
						<div className="py-4 flex items-center justify-center text-center">
							<span className="mr-4 text-3xl">$485,985</span>
							<span className="inline-flex items-center bg-green-500 h-6 px-2 rounded text-white text-xs">+9.1%</span>
						</div>
					</div>
					<div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
						<span className="text-xs font-medium text-gray-500 uppercase">PREDICTED MONTHLY REVENUE</span>
						<div className="py-4 flex items-center justify-center text-center">
							<span className="mr-4 text-3xl">$6,576</span>
							<span className="inline-flex items-center bg-green-500 h-6 px-2 rounded text-white text-xs">+12.0%</span>
						</div>
					</div>
					<div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
						<span className="text-xs font-medium text-gray-500 uppercase">ACTIVE RENTERS</span>
						<div className="py-4 flex items-center justify-center text-center">
							<span className="mr-4 text-3xl">152</span>
							<span className="inline-flex items-center bg-red-500 h-6 px-2 rounded text-white text-xs">-12</span>
						</div>
					</div>
					<div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r flex flex-col items-center">
						<span className="text-xs font-medium text-gray-500 uppercase">PENDING RENTS</span>
						<span className="block py-4 text-gray-500 text-3xl">$930,10</span>

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
