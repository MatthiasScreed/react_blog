import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

const Sidebar = (props) => {



    return props.location.pathname != '/login'?(
       <aside className="w-full md:h-screen md:w-64 bg-gray-900 md:flex md:flex-col">
           <header className="p-4 border-t border-solid border-gray-800">
                <div className="flex">
                    <img
                        className="rounded-full h-10"
                        src="https://2.gravatar.com/avatar/2efcd2bced3b094973e38898c50cd14f?s=400&d=mm"/>
                    <div className="flex flex-col p-2">
                        <h2 className="ttext-white pb-1">Matthias Screed</h2>
                        <h3 className="text-xs text-gray-500">The Mad Incanteur</h3>
                    </div>
                </div>
           </header>
           <nav className="overflow-y-auto h-full flex-grow">
                <header>
                    <span className="text-xs text-gray-500 block py-6 px-6">MENU</span>
                </header>
                <ul className="font-medium px-4 text-left">
                    <li className="text-gray-100">
                        <button className="rounded text-sm text-left block py-3 px-6 hover:bg-blue-600 w-full">
                            <Link to='/'>
                                <i className="fas fa-columns mr-3"></i>dashboard
                            </Link>
                        </button>
                        <button className="rounded text-sm text-left block py-3 px-6 hover:bg-blue-600 w-full">
                            <Link to='/posts'>
                                <i className="fa fa-th mr-3"></i>Posts
                            </Link>
                        </button>
                        <button className="rounded text-sm text-left block py-3 px-6 hover:bg-blue-600 w-full">
                            <Link to='/categories'>
                                <i className="fa fa-list mr-3"></i>Categories
                            </Link>
                        </button>
                        <button className="rounded text-sm text-left block py-3 px-6 hover:bg-blue-600 w-full">
                            <Link to='/tags'>
                                <i className="fa fa-tags mr-3"></i>Tags
                            </Link>
                        </button>
                        <button className="rounded text-sm text-left block py-3 px-6 hover:bg-blue-600 w-full">
                            <Link to='/comments'>
                                <i className="fas fa-comments mr-3"></i>Comments
                            </Link>
                        </button>
                        <button className="rounded text-sm text-left block py-3 px-6 hover:bg-blue-600 w-full">
                            <Link to='/users'>
                                <i className="fa fa-users mr-3"></i>Users
                            </Link>
                        </button>
                    </li>
                </ul>
           </nav>
           <footer className="p-4 border-t border-solid border-gray-800">
			<h4 className="pb-2 text-gray-100 text-sm">© Warlands Ltd. 2020</h4>
			<p className="text-gray-600 text-xs leading-normal">
				Created with love for the environment. By designers and develodivers who love to work together in offices!</p>
		</footer>
       </aside>
    ):null;
};

export default withRouter(Sidebar);
